import { Box, Button, Paper, Typography } from "@mui/material";
import CardInfo from "./CardInfo";
import CardBoard from "./packages/CardBoard";
import ButtonPrimary from "components/Button/ButtonPrimary/ButtonPrimary";
import { icons } from "theme/icon";
import { Grid } from "@mui/material";
import styled from "styled-components";

const DashboardLayout = styled(Paper)`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function DashboardInfo() {
  // random one of 4 word 'done', 'create', 'overdue', 'due'
  const randomBytes = () => {
    const words = ["done", "create", "overdue", "due"];
    return words[Math.floor(Math.random() * words.length)];
  };

  return (
    <DashboardLayout
      elevation={0}
      sx={{ backgroundColor: "#EAEAF5", height: "100%", width: "100%" }}
    >
      <Box
        display={"flex"}
        gap={3}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography fontSize="32px" fontWeight="800" lineHeight={"44px"}>
          Dashboard
        </Typography>
        <ButtonPrimary
          variant="outlined"
          startIcon={icons.EDIT_EDIT}
          style={{ background: "white" }}
          title="Edit List"
        />
      </Box>
      <Grid container spacing={3}>
        {Array.from(Array(4).keys()).map((item) => (
          <Grid item xs={12} sm={6} md={3}>
            <CardBoard
              type={randomBytes() as any}
              count={12}
              key={"card-board"}
            />
          </Grid>
        ))}
      </Grid>
      <CardInfo />
    </DashboardLayout>
  );
}

export default DashboardInfo;
