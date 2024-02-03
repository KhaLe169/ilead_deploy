import { Box, Tooltip, Typography } from '@mui/material';
import { Icon } from '@iconify/react';
import { useStyles } from './styles';
import colors from 'theme/colors';
import Textarea from 'components/Textarea';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';

const data = [
  {
    id: '1',
    title: 'FCPL',
    tooltip: 'FCPL',
  },
  {
    id: '2',
    title: 'Insight',
    tooltip: 'Insight',
  },
  {
    id: '3',
    title: 'Market insight',
    tooltip: 'Market insight',
  },
];
export default function Info() {
  const styles = useStyles();
  const handleChange = () => { };

  return (
    <>
      <Typography className={styles.headerText}>Outcome</Typography>
      {data.map((e) => (
        <InfoItem data={e} handleChange={handleChange} />
      ))}
    </>
  );
}

interface IProps {
  data: any;
  handleChange: () => void;
}

const InfoItem = ({ data }: IProps) => {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.flex}>
        <Typography className={styles.text}>{data.title}</Typography>
        <Tooltip title={data.tooltip} placement="top">
          <Icon color={colors.black6} fontSize={16} icon="mynaui:search" />
        </Tooltip>
      </Box>
      <Textarea />
      <input style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
      <label htmlFor="raised-button-file">
        <ButtonPrimary
          component="span"
          startIcon="ep:video-play"
          variant="outlined"
          title="attach report"
          styled={{ backgroundColor: 'primary.lighter', marginBottom: 2 }}
        />
      </label>
    </>
  );
};
