import { Button } from "@mui/material";
import { listToobUser } from "api/toob.api";
import { cloneDeep } from "lodash";
import { useEffect, useState } from "react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";
import { dispatch } from "redux/store";
import { openMVCScreenRequest } from "redux/toob/action";
import { CheckBox, ColDrag, TaskStatus } from "types/drag.interface";
import DragContext, { useDragContext } from "./DragContext";
import ItemDrag from "./ItemDrag";
import { StrictModeDroppable } from "./StrictModeDroppable";
import { WrapperDragDrop } from "./style.drag";
import { GET_DETAIL_SA_REQUEST } from "redux/toob/actionTypes";

const listBgColor = ["#EAEAF5", "#ECF5FE", "#F1EEFD", "#E8F9EF"];

const taskStatus: TaskStatus = {
  requested: {
    name: "0",
    items: [],
  },
  toDo: {
    name: "To do",
    items: [],
  },
  inProgress: {
    name: "In Progress",
    items: [],
  },
  done: {
    name: "Done",
    items: [],
  },
};

type SetColumnsType = React.Dispatch<React.SetStateAction<TaskStatus>>;
type SetCheckBox = React.Dispatch<React.SetStateAction<CheckBox[]>>;

const fetchDrag = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
const onDragEnd = async (
  result: DropResult,
  columns: TaskStatus,
  setColumns: SetColumnsType,
  setCheckBox: SetCheckBox
) => {
  if (!result.destination) return;
  const { source, destination } = result;
  const sourceDroppableId: ColDrag = source.droppableId as ColDrag;
  const destinationDroppableId: ColDrag = destination.droppableId as ColDrag;

  if (sourceDroppableId !== destinationDroppableId) {
    const sourceColumn = columns[sourceDroppableId];
    const destColumn = columns[destinationDroppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    console.log({ sourceColumn, destColumn });
    setCheckBox((prevData: CheckBox[]) => {
      const dataClone = cloneDeep(prevData);
      const index = dataClone.findIndex(
        (item) => item.id === result.draggableId
      );

      if (index === -1) {
        return prevData;
      }
      return dataClone.filter((item) => item.id !== result.draggableId);
    });
    setColumns({
      ...columns,
      [sourceDroppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destinationDroppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
    await fetchDrag();
  } else {
    const column = columns[sourceDroppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [sourceDroppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export default function Drag() {
  const [columns, setColumns] = useState<TaskStatus>(taskStatus);
  const { checkBox, setCheckBox, dataItem } = useDragContext();

  useEffect(() => {
    const fetch = async () => {
      const columnsDefault = cloneDeep(taskStatus);
      const { acts } = await listToobUser({
        actId: dataItem.actId,
      });

      acts.forEach((item) => {
        if (item.statep === "0") {
          columnsDefault.requested.items.push(item);
        }
        if (item.statep === "7") {
          columnsDefault.toDo.items.push(item);
        }
        if (item.statep === "8") {
          columnsDefault.inProgress.items.push(item);
        }
        if (item.statep === "F") {
          columnsDefault.done.items.push(item);
        }
      });

      setColumns(columnsDefault);
    };
    fetch();
  }, [dataItem]);

  const handleOpenMVCScreen = (id: string) => {
    dispatch(openMVCScreenRequest());
    dispatch({
      type: GET_DETAIL_SA_REQUEST,
      payload: { id },
    });
  };

  return (
    <WrapperDragDrop>
      <DragDropContext
        onDragEnd={(result) =>
          onDragEnd(result, columns, setColumns, setCheckBox)
        }
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              className="col-drag"
              style={{ background: listBgColor[index] }}
              key={columnId}
            >
              <StrictModeDroppable droppableId={columnId} key={columnId}>
                {(provided) => {
                  return (
                    <div
                      className="drag-drop-context"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided) => {
                              return (
                                <div
                                  className="item-drag"
                                  ref={provided.innerRef}
                                  onClick={() => handleOpenMVCScreen(item?.id)}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <DragContext dragItem={item}>
                                    <ItemDrag
                                      permissionsUser={"MAKER"}
                                      textContent={item.note}
                                      name={item.name}
                                      time="Today"
                                    />
                                  </DragContext>
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </StrictModeDroppable>
              <Button className="btn-new" variant="text">
                <img src="/images/plus.svg" alt="" />
                <span>New</span>
              </Button>
            </div>
          );
        })}
      </DragDropContext>
    </WrapperDragDrop>
  );
}
