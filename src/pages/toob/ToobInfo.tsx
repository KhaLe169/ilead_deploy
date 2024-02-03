import { Box, Typography } from "@mui/material";
import styled from "styled-components";

import { BoxFlex } from "components/Box/BoxFlex";
import { ToobMainLayout } from "layouts/toob/ToobLayout";
import colors from "theme/colors";
import CardIleadRevive from "./CardIleadRevive";
import DashboardInfo from "./DashboardInfo";
import toobDetail from "src/mock/toobdetail.json";
import toobInfo from "src/mock/toob-info.json";
import { ToobModel } from "types/toob.interface";
import { get } from "lodash";

const ReviveLayout = styled(Box)`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-style: none;
`;

const ToobInfo = () => {
  const { name } = toobInfo;

  return (
    <ToobMainLayout>
      <ReviveLayout>
        <Box gap={4} display="flex" flexDirection="column" padding="1rem">
          <BoxFlex>
            <Typography
              fontSize="14px"
              fontWeight="400"
              color={colors.primary}
              className="uppercase"
            >
              Toob 05
            </Typography>
            <Typography
              fontSize="14px"
              fontWeight="400"
              // className="p-1 rounded-sm"
              color={colors.white}
              padding="4px 8px"
              borderRadius={8}
              width={"fit-content"}
              bgcolor={colors.primary}
            >
              Doing fine
            </Typography>
          </BoxFlex>
          <Typography
            fontSize="32px"
            fontWeight="800"
            lineHeight={"34px"}
            color="#4F4EA6"
          >
            {get(toobInfo, "name", "")}
          </Typography>
        </Box>
        <CardIleadRevive data={toobDetail} />
      </ReviveLayout>

      <Box sx={{ flexGrow: 1 }}>
        <DashboardInfo />
      </Box>
    </ToobMainLayout>
  );
};

export default ToobInfo;
