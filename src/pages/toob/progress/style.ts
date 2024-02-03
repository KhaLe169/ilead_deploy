import { Box, Button, Card, Divider, Input, Typography } from '@mui/material';
import styled from 'styled-components';
import colors from 'theme/colors';

export const BoxCreateSA = styled(Box)`
  border-radius: 12px;
  box-shadow:
    0px 32px 32px 0px var(--black-65, rgba(79, 78, 166, 0.05)),
    0px 0px 32px 0px var(--black-610, rgba(79, 78, 166, 0.1));
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  position: relative;
  width: 100%;
`;

export const BoxIcon = styled(Box)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow:
    0px 12px 20px 0px var(--black-65, rgba(79, 78, 166, 0.05)),
    0px 0px 20px 0px var(--black-610, rgba(79, 78, 166, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const InputTitle = styled(Input)`
  color: #7471bc;
  font-size: 22px;
  font-weight: 800;
  line-height: 24px;
`;

export const InputDescription = styled(Input)`
  color: #7471bc;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export const TitleAssign = styled(Typography)`
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

export const CardSubStyled = styled(Card)`
  background-color: #eaeaf5;
  padding: 16px;
  color: #7471bc;
`;

export const DividerStyled = styled(Divider)`
  margin: 12px 0;
`;

export const ButtonAction = styled(Button)`
  border-radius: 100px;
  width: max-content;
`;
