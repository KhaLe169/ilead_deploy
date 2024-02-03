import {
  Box,
  Typography
} from "@mui/material";
import styled from "styled-components";
import CardOutputList from "./CardOutputList";
import KanbanBoard from "./KanbanBoard";

import { ToobMainLayout } from "layouts/toob/ToobLayout";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import MCVScreen from "./MCVScreen/MCVScreen";
import CreateSaDrawer from "./progress/CreateSaDrawer";


const BoxLeftProgress = styled(Box)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 20%;
`;

const BoxRightProgress = styled(Box)`
  flex: 1;
`;

const ProgressPage = () => {
  const { isOpenCreateSa, outputByUser, visibleMCVScreen } = useSelector((state: RootState) => state.toob);

  return (
    <ToobMainLayout>
      <BoxLeftProgress>
        <Box gap={4} display="flex" flexDirection="column" padding="1rem">
          <Typography
            fontSize="32px"
            fontWeight="800"
            lineHeight={"44px"}
            color="#4F4EA6"
          >
            iLEAD revive
          </Typography>
          <Typography fontSize={"28px"} fontWeight={"800"} lineHeight={"32px"}>
            Output list
          </Typography>
        </Box>

        <CardOutputList />
      </BoxLeftProgress>
      <BoxRightProgress>
        <KanbanBoard />
      </BoxRightProgress>
      {isOpenCreateSa && (
        <div style={{ width: "20%" }}>
          <CreateSaDrawer outputList={outputByUser} />
        </div>
      )}
      {
        visibleMCVScreen && (
          <MCVScreen visible={visibleMCVScreen} />
        )
      }
    </ToobMainLayout>
  );
};

export default ProgressPage;


