import { openCreateSaRequest } from "redux/toob/action";
import { Icon } from "@iconify/react";
import { Box, Grid, Paper } from "@mui/material";
import ButtonPrimary from "components/Button/ButtonPrimary/ButtonPrimary";
import SelectOptions from "components/Select/SelectOptions";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import WrapperDrag from "pages/toob/progress/Drag/WrapperDrag";
import { HeaderDrag } from "pages/toob/progress/Drag/style.drag";

const KanbanContainer = styled(Box)`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const BoxFilter = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 24px 0px 24px;
`;

const ColumnsOptions = [
  {
    value: "column1",
    label: "Column 1",
  },
  {
    value: "column2",
    label: "Column 2",
  },
  {
    value: "column3",
    label: "Column 3",
  },
];

const KanbanBoard = () => {
  const dispatch = useDispatch();
  return (
    <Paper
      elevation={0}
      sx={{ backgroundColor: "#F8F8FC", height: "100%", width: "100%" }}
    >
      <KanbanContainer>
        <BoxFilter>
          <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm={6} md={2}>
              <SelectOptions options={ColumnsOptions} placeholder="This week" />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box display={"flex"}>
                <SelectOptions
                  options={ColumnsOptions}
                  placeholder="Human Resources"
                />
                <Box
                  border="1px solid #EAEAF5"
                  borderRadius={100}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  bgcolor="#fff"
                  padding="8px"
                  marginLeft="10px"
                >
                  <Icon
                    icon="ion:filter"
                    color="#4F4EA6"
                    width="20px"
                    height="20px"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={7}>
              <Box display={"flex"} justifyContent={"flex-end"} onClick={() =>
                dispatch(openCreateSaRequest())
              }>
                <ButtonPrimary
                  variant="contained"
                  startIcon="tabler:plus"
                  key="create Sa"
                  title="Create SA"

                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <HeaderDrag>
                <div>
                  <span className="header-tag todo">TO DO • 20</span>
                </div>
                <div>
                  <span className="header-tag doing">DOING • 20</span>
                </div>
                <div>
                  <span className="header-tag submitted">SUBMITTED • 20</span>
                </div>
                <div>
                  <span className="header-tag done">DONE • 20</span>
                </div>
              </HeaderDrag>
            </Grid>
          </Grid>
        </BoxFilter>

        <WrapperDrag />
      </KanbanContainer>
    </Paper>
  );
};

export default KanbanBoard;
