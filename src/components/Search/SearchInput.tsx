import { Icon } from "@iconify/react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },

  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  zIndex: 100,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.grey[700],
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "10px",
    transition: theme.transitions.create("width"),
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: alpha(theme.palette.primary.main, 0.15),
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up("sm")]: {
      "&:focus": {
        backgroundColor: alpha(theme.palette.primary.main, 0.05),
        borderColor: alpha(theme.palette.primary.main, 1),
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
}));

export default function SearchInput() {
  return (
    <Search>
      <SearchIconWrapper>
        <Icon color="#D5D5EB" fontSize={24} icon="mynaui:search" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}
