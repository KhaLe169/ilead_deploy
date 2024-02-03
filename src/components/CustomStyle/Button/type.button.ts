import { ButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export type Type = 'primary';
export type Shape = 'circle';
export interface Props extends Omit<ButtonProps, 'type'> {
  children?: ReactNode | ReactNode[];
  type?: Type | undefined;
  icon?: ReactNode | ReactNode[];
  shape?: Shape;
}
