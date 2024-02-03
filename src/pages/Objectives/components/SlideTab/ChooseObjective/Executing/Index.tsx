import { AccountCircle } from '@mui/icons-material';
import { Alert, Box, Divider, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import SelectMultipleHuman from 'components/SelectHuman/SelectMultipleHuman';
import colors from 'theme/colors';
import Output from './Output/Index';
import { useDispatch } from 'react-redux';
import { getListHumanResourcesRequest } from 'redux/humanResources/action';
import AddmorePeopleInput from 'src/components/AddMorePeople/Index';
import { GetListHumanResourcePayload } from 'redux/humanResources/types';
import { v4 as uuidv4 } from 'uuid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {
  handleStartObj: () => void;
};
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
    padding: 0,
  },
  textFont14: {
    fontSize: '14px',
    fontWeight: 600,
    textWrap: 'nowrap',
  },
  textFont13: {
    fontSize: '14px',
    fontWeight: 500,
    textWrap: 'nowrap',
  },
  avatar: {
    marginRight: '5px',
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

function Executing({ handleStartObj }: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [SOI, setSOI] = useState<userItem[] | null>([{ value: 0, label: 'A', role: 'role 1' }]);
  const [HR, setHR] = useState<GetListHumanResourcePayload[]>([]);
  const [listHumanResources, setListHumanResources] = useState([]);
  const [owner, setOwner] = useState<userItem | null>({ value: 0, label: 'A', role: 'role 1' });
  const [toobs, setToobs] = useState<any>([]);

  useEffect(() => {
    getListHumanResources();
  }, []);

  const getListHumanResources = () => {
    dispatch(
      getListHumanResourcesRequest(
        {},
        (response: any) => {
          setListHumanResources(response);
        },
        (err: any) => (
          <Alert variant="filled" severity="error">
            {err.message}
          </Alert>
        ),
      ),
    );
  };
  useEffect(() => {
    if (toobs.length > 0) {
      const newToobs = toobs.map((el) => {
        return {
          ...el,
          hr: HR,
        };
      });
      setToobs(newToobs);
    }
  }, [HR]);

  const handleAddToob = () => {
    const priority: number = toobs.length === 0 ? 1 : toobs.length + 1;
    const newToob = {
      id: uuidv4(),
      priority: priority,
      hr: HR,
      SOI: SOI,
    };
    setToobs([...toobs, newToob]);
  };

  const handleChangeOutput = (value: string, id: string, key: string) => {
    console.log('value', value);
    console.log('id', id);
    console.log('key', key);
  };

  const handleChangeHR = (value: GetListHumanResourcePayload[]) => {
    setHR((HR) => [...HR, ...value]);
  };
  return (
    <Box className={classes.container}>
      <Box className={classes.item}>
        <Grid container>
          <Grid item xs={12}>
            <Typography className={classes.textFont14}>Owner</Typography>
            <AccountCircle className={classes.avatar} />
          </Grid>
          <Grid item xs={12} mt={1}>
            <Typography className={classes.textFont14}>Human Resources</Typography>
            <Box display={'flex'} alignItems={'center'}>
              {HR?.length === 0 && <AddmorePeopleInput options={listHumanResources} handleChangeHR={handleChangeHR} />}
              {HR?.map((el, index) => {
                if (index < HR.length - 1) {
                  console.log('a');
                  return <AccountCircle className={classes.avatar} />;
                } else {
                  console.log('b');
                  return (
                    <>
                      <AccountCircle className={classes.avatar} />
                      <AddmorePeopleInput options={listHumanResources} handleChangeHR={handleChangeHR} />
                    </>
                  );
                }
              })}
            </Box>
            {/* <SelectMultipleHuman options={listHumanResources} value={HR} handleChangeHR={handleChangeHR} /> */}
          </Grid>
          <Grid item xs={12} mt={1}>
            <Typography className={classes.textFont14}>SOI</Typography>
            <AccountCircle className={classes.avatar} />
          </Grid>
        </Grid>
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.item}>
        <Typography className={classes.textFont14}>Expected deadline</Typography>
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
        <Typography className={classes.textFont14}>TOOBS</Typography>
        <Typography className={classes.textFont13}>
          Track progress of your objectives easily with TOOBs. <Typography>Read more</Typography>
        </Typography>
      </Box>
      {toobs.length > 0 && toobs.map((el: any) => <Output data={el} handleChangeOutput={handleChangeOutput} />)}
      <Box className={classes.buttonAddToob}>
        <ButtonPrimary
          title={'Add TOOB'}
          variant="outlined"
          disabled
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
            handleStartObj();
          }}
        />
      </Box>
    </Box>
  );
}

export default Executing;
