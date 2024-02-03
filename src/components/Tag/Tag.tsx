import { Typography } from '@mui/material';
import { useStyles } from './styles';
import { Icon } from '@iconify/react';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
interface IProps {
  title: string;
  logo?: string;
  handleDel?: (value: number) => void;
  data?: any;
}
export default function Tag({ logo, title, handleDel, data }: IProps) {
  const styles = useStyles();
  return (
    <div className={styles.tag}>
      {logo && <img className={styles.imgTag} src={logo} alt="image" />}
      <Typography className={styles.textTag} color="primary.main">
        {title}
      </Typography>
      {handleDel && (
        <ButtonIcon
          onClick={() => handleDel(data.id)}
          icon="material-symbols:close"
          styled={{
            padding: '2px',
            minWidth: 'max-content',
            fontSize: '12px',
            marginLeft: '5px',
          }}
        />
      )}
    </div>
  );
}
