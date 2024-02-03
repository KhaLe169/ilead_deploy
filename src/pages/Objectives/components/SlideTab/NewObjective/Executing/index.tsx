import { AccountCircle } from '@mui/icons-material';
import { Box, Divider, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useState } from 'react';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import SelectMultipleHuman from 'components/SelectHuman/SelectMultipleHuman';
import colors from 'theme/colors';
import Output from './Output/Index';

type Props = {};
interface userItem {
  value: number;
  label: string;
  role: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
  },
  item: {
    padding: 24,
  },
  avatar: {
    marginTop: '8px',
    width: 30,
    height: 30,
    padding: 0,
    borderRadius: '50%',
    border: `2px solid ${colors['--purple-6']}`,
  },
  divider: {
    margin: '10px 0px',
  },
  buttonAddToob: {
    margin: '28px 0px',
  },
  btnStart: {
    position: 'absolute',
    bottom: -24,
    right: 0,
  },
}));

const users = [
  { value: 0, label: 'A', role: 'role 1' },
  { value: 1, label: 'B', role: 'role 2' },
  { value: 2, label: 'C', role: 'role 3' },
  { value: 3, label: 'D', role: 'role 4' },
];

const Executing = ({ }: Props) => {
  const classes = useStyles();
  const [SOI, setSOI] = useState<userItem[] | null>([{ value: 0, label: 'A', role: 'role 1' }]);
  const [hr, setHr] = useState<userItem[] | null>([{ value: 0, label: 'A', role: 'role 1' }]);
  const [owner, setOwner] = useState<userItem | null>({ value: 0, label: 'A', role: 'role 1' });
  const [toobs, setToobs] = useState<any>([]);
  const [checked, setChecked] = useState(false);
  const handleAddToob = () => {
    const a: number = toobs.length === 0 ? 1 : toobs.length + 1;
    const toob = {
      id: a,
      priority: a,
      hr: hr,
      SOI: SOI,
    };
    setToobs([...toobs, toob]);
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.item}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" sx={{ textWrap: 'nowrap' }}>
              Owner
            </Typography>
            <AccountCircle className={classes.avatar} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Human Resources</Typography>
            <SelectMultipleHuman />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">SOI</Typography>
            <AccountCircle className={classes.avatar} />
          </Grid>
        </Grid>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.item}>
        <Typography variant="body1">Expected deadline</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DemoItem>
              <DatePicker
                defaultValue={dayjs()}
                onChange={(e) => {
                  console.log('e', e);
                }}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.item}>
        <Typography variant="h6">TOOBS</Typography>
        <Typography paragraph>
          Track progress of your objectives easily with TOOBs. <Typography>Read more</Typography>
        </Typography>
      </Box>
      {toobs.length > 0 && toobs.map((el: any) => <Output data={el} />)}
      <Box className={classes.buttonAddToob}>
        <ButtonPrimary
          title={'Add TOOB'}
          variant="outlined"
          startIcon="ic:baseline-plus"
          onClick={() => {
            handleAddToob();
          }}
        />
      </Box>
      <Box className={classes.btnStart}>
        <ButtonPrimary
          title={'Start'}
          variant="contained"
          onClick={() => {
            console.log('toobs', toobs);
          }}
        />
      </Box>
    </Box>
  );
};

export default Executing;
