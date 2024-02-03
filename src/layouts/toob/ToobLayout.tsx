import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
};

const PageWrapper = styled(Paper)`
  width: 100%;
  height: 100vh ;
  /* overflow-y: hidden; */
  background-color: #fff;
  display: flex;
  border-style: none;
  gap: 24px;
  flex-shrink: 0;
  align-self: stretch;
`;

const TeamPageWrapper = styled(Paper)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-style: none;
  gap: 24px;
`;

export const ToobMainLayout = ({ children }: Props) => {
  return <PageWrapper elevation={0}>{children}</PageWrapper>;
};

export const TeamMainLayout = ({ children }: Props) => {
  return <TeamPageWrapper elevation={0}>{children}</TeamPageWrapper>;
};
