import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  mainText: {
    display: "flex",
    justifyContent: "space-between",
    margin: "12px 0",
    alignItems: "end",
  },
  tag: {
    display: "flex",
    alignItems: "center",
    margin: "16px 0",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#EAEAF5",
    width: "max-content",
    borderRadius: 99,
    padding: "2px 4px",
  },
  imgTag: {
    height: 20,
    width: 20,
    borderRadius: 99,
    marginRight: 5,
  },

  textTag: {
    fontSize: 12,
    fontWeight: 600,
  },

  toobs: {
    fontSize: 14,
    fontWeight: 600,
    color: "#101023",
  },
});
