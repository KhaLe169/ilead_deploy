import React from "react";
import { styled } from "@mui/material/styles";
import { CircularProgress, Box } from "@mui/material";

interface IProps {
  value: number;
}
const CircularProcessStyle = styled("div")(({ theme }) => ({
  position: "relative",
  marginBottom: 20,
  marginRight: 16,
  marginLeft: 10,
}));

export default function CusCircularProgress({ value }: IProps) {
  return (
    <CircularProcessStyle>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            margin: "auto",
            zIndex: 0,
            color: "#f3f3f3",
          }}
        >
          <CircularProgress
            variant="determinate"
            color="inherit"
            value={100}
            thickness={3}
            size={16}
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            margin: "auto",
            zIndex: 2,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={25}
            thickness={3}
            size={16}
          />
        </Box>
      </Box>
    </CircularProcessStyle>
  );
}
