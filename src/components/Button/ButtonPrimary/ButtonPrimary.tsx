import { Icon } from '@iconify/react';
import { Button, ButtonProps } from '@mui/material';
import { useStyles } from './styles';
import { ReactNode } from 'react';

interface IProps extends ButtonProps {
  onClick?: () => void;
  title?: any;
  startIcon?: string;
  styled?: any;
}
export default function ButtonPrimary({ title, onClick, startIcon, styled, ...props }: IProps) {
  const styles = useStyles();
  return (
    <Button
      sx={styled}
      onClick={onClick}
      className={styles.button}
      startIcon={startIcon && <Icon icon={startIcon} />}
      {...props}
    >
      {title}
    </Button>
  );
}
