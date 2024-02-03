import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { LinearProgress } from "@mui/material";

const LinearProgressStyle = styled("div")(({ theme }) => ({
  position: "relative",
  marginBottom: 20,
}));

const TextProcessBarStyle = styled("div")(({ theme }) => ({
  padding: "2px 5px",
  borderRadius: 40,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: "#EAEAF5",
  width: "max-content",
  position: "absolute",
  background: "#fff",
  fontSize: 13,
  boxShadow: "0px 4px 8px 0px #EAEAF5",
}));

export default function LinearProcess() {
  const [progress, setProgress] = useState(25);
  return (
    <LinearProgressStyle>
      <TextProcessBarStyle
        style={{
          left: `${progress > 98 ? progress - 4 : progress - 5}%`,
          top: -12,
          zIndex: 100,
        }}
      >
        {progress}%
      </TextProcessBarStyle>
      <LinearProgress
        color="secondary"
        variant="determinate"
        value={progress}
      />
    </LinearProgressStyle>
  );
}
