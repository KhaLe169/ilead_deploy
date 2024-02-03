import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import styled from "styled-components";

export const useStyles = makeStyles({
  button: {
    borderRadius: 100,
    borderColor: "#EAEAF5",
  },
});

export const ButtonReject = styled(Button)`
  color: red;
  background: #ffedeb;
  border: 1px solid red;
  border-radius: 30px;
`;


export const ButtonApprove = styled(Button)`
  color: #7259ee;
  background: #f1eefd;
  border: 1px solid #7259ee;
  border-radius: 30px;  
`;
