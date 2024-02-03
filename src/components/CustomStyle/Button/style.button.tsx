import { Button } from "@mui/material";
import styled from "styled-components";
import { Props, Type } from "./type.button";
import { IconButton } from "@mui/material";

const typeButton: {
  [key in Type]: {
    backgroundColor: string;
    color: string;
  };
} = {
  primary: {
    backgroundColor: `#4F4EA6`,
    color: `#FFF`,
  },
};

export const ButtonStyle = styled(Button)<Props>`
  background: ${({ type }) => {
    return typeButton[type as Type]?.backgroundColor || "";
  }} !important;
  color: ${({ type }) => {
    return typeButton[type as Type]?.color || "";
  }} !important;

  border-radius: 100px;
  border: 1px solid rgba(79, 78, 166, 0.1);
  box-shadow: 0px 32px 32px 0px rgba(79, 78, 166, 0.05),
    0px 0px 32px 0px rgba(79, 78, 166, 0.1);

  display: flex;
  padding: 10px 12px;
  align-items: center;
  justify-content: center;

  gap: 4px;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const IconButtonStyle = styled(IconButton)`
  border-radius: 100px;
  border: 1px solid #eaeaf5;
  background: #fff;
  box-shadow: 0px 12px 20px 0px rgba(79, 78, 166, 0.05),
    0px 0px 20px 0px rgba(79, 78, 166, 0.1);
`;
