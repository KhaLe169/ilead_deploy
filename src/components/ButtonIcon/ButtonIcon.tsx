import { Icon } from "@iconify/react";
import { Button } from "@mui/material";
import { useStyles } from "./styles";

interface IProps {
  onClick?: () => void;
  icon: string;
  styled?: any;
}
export default function ButtonIcon({ onClick, icon, styled }: IProps) {
  const styles = useStyles();
  return (
    <Button
      style={styled}
      onClick={onClick}
      className={styles.button}
      variant="outlined"
    >
      <Icon icon={icon} />
    </Button>
  );
}
