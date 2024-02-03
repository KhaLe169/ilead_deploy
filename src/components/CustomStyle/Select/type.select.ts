import { SelectProps as SelectPropsMui } from '@mui/material';

type Options = {
  value: string | number;
  label: string | number;
};
export interface SelectProps extends SelectPropsMui {
  options: Options[];
  label: string | number;
}
