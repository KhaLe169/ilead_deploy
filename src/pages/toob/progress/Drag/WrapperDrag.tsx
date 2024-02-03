import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { isArray } from "lodash";
import DragContext from "pages/toob/progress/Drag/DragContext";
import { StyleAccordionSummary, StyledBadge } from "pages/toob/progress/Drag/style.drag";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { getListToobUser } from "redux/toob/action";
import { Acts } from "types/toob.interface";
import Drag from "./Drag";


type ContentProps = {
  dataItem: Acts;
  index: string | number;
}

const Content = ({
  dataItem,
  index,
}: ContentProps) => {

  const [checkBox, setCheckBox] = useState<{ id: string }[]>([]);

  return (
    <StyleAccordionSummary defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={"panel1-content" + index}
        id={"panel1-header" + index}
      >
        <StyledBadge badgeContent={4} color="secondary">
          <span className="title">{dataItem.name}</span>
        </StyledBadge>
      </AccordionSummary>
      <AccordionDetails>
        <DragContext
          setCheckBox={setCheckBox}
          checkBox={checkBox}
          dataItem={dataItem}
        >
          <Drag />
        </DragContext>
      </AccordionDetails>
    </StyleAccordionSummary>
  );
};

export default function WrapperDrag() {
  const dispatch = useDispatch();

  const userType = "A";
  useEffect(() => {
    dispatch(
      getListToobUser({
        userType,
      })
    );
  }, []);

  const { listToob } = useSelector(
    (item: RootState) => item.toob.dataToobUser
  ) as {
    listToob: Acts[];
  };
  return (
    <>
      <div style={{ marginTop: "8px" }}>
        {isArray(listToob) && listToob?.map((item) => (
          <Content dataItem={item} index={item.id} />
        ))}
      </div>
    </>
  );
}
