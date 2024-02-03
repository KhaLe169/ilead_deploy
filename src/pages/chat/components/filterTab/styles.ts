import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "100px",
    backgroundColor: "#F1EEFD",
    padding: "2px 2px",
  },
  tabItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    fontSize: 12,
    padding: "4px 8px",
    "&.Mui-selected": {
      backgroundColor: "#fff",
    },
    "&.MuiTab-root": {
      marginRight: 0,
    },
  },
});
