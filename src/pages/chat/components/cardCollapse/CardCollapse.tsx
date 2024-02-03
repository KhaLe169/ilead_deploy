import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Theme, styled } from "@mui/material/styles";
import * as React from "react";
import FilterTabs from "../filterTab/RadioTab";
import { data } from "./data";
import { useState } from "react";
import { Box, Checkbox, Divider, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import colors from "theme/colors";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  collapseItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "start",
    width: "100%",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 12px",
  },
  checkBox: {
    padding: 0,
    marginRight: 1,
  },
  title: {
    fontSize: 14,
    color: "#4F4EA6",
    fontWeight: 600,
    marginBottom: 1,
  },
  description: {
    fontSize: 10,
    color: colors.primary,
    marginBottom: 0,
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardCollapse() {
  const [expanded, setExpanded] = useState(false);
  // const [filter, setFilter] = useState(false);
  // const [overdue, setOverdue] = useState(false);
  // const [done, setDone] = useState(false);
  // const [all, setAll] = useState(false);

  const [tasks, setTasks] = useState(data);
  const classes = useStyles();

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const handleExpandClick = (date: string) => {
    let cloneTaskData = { ...tasks };
    let data = cloneTaskData.overdue.tasks.map((el) => {
      if (el.date === date) {
        return {
          ...el,
          isOpen: !el.isOpen,
        };
      }
      return el;
    });
    cloneTaskData = {
      ...cloneTaskData,
      overdue: {
        ...cloneTaskData.overdue,
        tasks: data,
      },
    };
    setTasks(cloneTaskData);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardHeader sx={{ padding: "15px 12px" }} title="Your SAs"></CardHeader> */}
      <Box className={classes.cardHeader}>
        <Typography variant="h6">Your SAs</Typography>
        <FilterTabs />
      </Box>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ my: 1, borderWidth: 1, backgroundColor: "primary.dark" }}
      />
      {tasks.overdue.tasks.length > 0 &&
        tasks.overdue.tasks.map((el, index) => (
          <Box padding={"10px 12px"}>
            <CardActions disableSpacing sx={{ padding: 0 }}>
              <Typography>{el.date}</Typography>
              <ExpandMore
                expand={el.isOpen}
                onClick={() => handleExpandClick(el.date)}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={el.isOpen} timeout="auto" unmountOnExit>
              <CardContent sx={{ padding: 0, width: "100%" }}>
                {el.data.length > 0 &&
                  el.data.map((elm, index) => (
                    <>
                      <Grid
                        container
                        className={`${classes.collapseItem} ${classes.flexCenter}`}
                        spacing={0.5}
                      >
                        <Grid item xs={1}>
                          <Checkbox checked={elm.done} size="small" className={classes.checkBox} />
                        </Grid>
                        <Grid item xs={8.5}>
                          <Typography paragraph noWrap className={classes.title}>
                            {elm.title}
                          </Typography>
                          <Typography paragraph noWrap className={classes.description}>
                            {elm.description}
                          </Typography>
                        </Grid>
                        <Grid item xs={2.5}>
                          <Typography fontSize={12} color={colors["--orange-7"]}>
                            1 days left
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{ my: 1, borderWidth: 1, backgroundColor: "primary.dark" }}
                      />
                    </>
                  ))}
              </CardContent>
            </Collapse>
          </Box>
        ))}
    </Card>
  );
}
