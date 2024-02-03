import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { Icon } from "@iconify/react";

const CardStyle = styled(Card)(({ theme }) => ({
  width: "66%",
  backgroundColor: "#F8F8FC",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CardContentStyle = styled(CardContent)(({ theme }) => ({
  textAlign: "center",
}));

export default function Empty() {
  return (
    <CardStyle>
      <CardContentStyle>
        <Icon color={"#B5B3DB"} fontSize={60} icon="icon-park-outline:box" />
        <Typography color={"#B5B3DB"}>
          Select company to see objectives
        </Typography>
      </CardContentStyle>
    </CardStyle>
  );
}
