import { AccountCircle } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import colors from 'theme/colors';

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.primaryLighter,
    borderRadius: '16px',
    border: `1px solid ${colors.borderCard}`,
    marginTop: 18,
  },
  cardContentHeader: {
    borderBottom: `2px solid ${colors.borderCard}`,
  },
  prioritySelect: {
    backgroundColor: colors.white,
    color: colors.primary,
  },
  avatar: {
    marginTop: '18px',
    width: 35,
    height: 35,
  },
  cardContentOutput: {
    backgroundColor: colors.white,
    borderBottom: `2px solid ${colors.borderCard}`,
    position: 'relative',
  },
  addUser: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'self-end',
  },
  output: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconDeleteOutput: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0, -50%)',
  },
}));

// interface userItem {
//   value: number;
//   label: string;
//   role: string;
// }
interface option {
  value: number;
  label: string;
}
type Props = {
  data: any;
  handleChangeOutput: (value: string, id: string, key: string) => void;
};

// const users = [
//   { value: 0, label: 'A', role: 'role 1' },
//   { value: 1, label: 'B', role: 'role 2' },
//   { value: 2, label: 'C', role: 'role 3' },
//   { value: 3, label: 'D', role: 'role 4' },
// ];
function Output({ data }: Props) {
  const classes = useStyles();
  const [optionPriority, setOptionPriority] = useState<option[]>([]);
  // const [output, setOutput] = useState([]);
  // const [addOutput, setAddOutput] = useState(false);

  useEffect(() => {
    const options = [];
    for (let i = 1; i <= data.id; i++) {
      options.push({
        value: i,
        label: i.toString(),
      });
    }
    setOptionPriority(options);
  }, []);
  const handleChange = (event: SelectChangeEvent) => { };

  console.log('data', data);

  // const handleAddOutput = () => {
  //   setAddOutput(true);
  // };
  // const handleSelectOutput = (value: userItem | null) => {
  //   if (value) {
  //     setOutput((output: []) => [...output, value]);
  //   } else {
  //     const newArray = [...output];
  //     newArray.pop();
  //     setOutput(newArray);
  //   }
  // };
  // const handleDeleteUser = (value: number) => {
  //   const newArray = output.filter((el: userItem) => el.value !== value);
  //   setOutput(newArray);
  // };
  return (
    <Box>
      <Card className={classes.card}>
        <CardContent className={classes.cardContentHeader}>
          <Box className={classes.header}>
            <Typography variant="h6">Sustainable ventilation system</Typography>
            <FormControl>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.priority}
                className={classes.prioritySelect}
                onChange={handleChange}
                size="small"
                disabled
              >
                {optionPriority.map((el: option) => (
                  <MenuItem value={el.value}>{el.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </CardContent>
        <CardContent className={classes.cardContentHeader}>
          <Typography variant="subtitle1">Description</Typography>
          <Typography variant="body1" color={colors.primary} marginTop={2}>
            What does this TOOB do? What are we achieving?
          </Typography>
        </CardContent>
        <CardContent className={classes.cardContentHeader}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant="subtitle1" sx={{ textWrap: 'nowrap' }}>
                Human Resources
              </Typography>
              {data.hr.map((el) => (
                <AccountCircle className={classes.avatar} />
              ))}
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1">SOI</Typography>
              <AccountCircle className={classes.avatar} />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent className={classes.cardContentHeader}>
          <Typography variant="subtitle1">Project duration</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <DatePicker
                    label="From date"
                    defaultValue={dayjs()}
                    onChange={(newValue) => console.log('newValue', dayjs(newValue).format('YYYY/MM/DD'))}
                  />
                </Grid>
                <Grid item xs={6}>
                  <DatePicker
                    label="To date"
                    defaultValue={dayjs()}
                    onChange={(newValue) => console.log('newValue', dayjs(newValue).format('YYYY/MM/DD'))}
                  />
                </Grid>
              </Grid>
            </DemoContainer>
          </LocalizationProvider>
        </CardContent>
        {/* <CardContent className={classes.cardContentHeader}>
          <Typography variant="subtitle1">Outputs</Typography>
          <Typography variant="body1" color={colors.primary} marginTop={1}>
            Break your TOOB down into trackable groups of work
          </Typography>
        </CardContent>
        {output.map((el: userItem) => (
          <CardContent className={classes.cardContentOutput}>
            <Typography variant="h6">{el.role}</Typography>
            <Box className={classes.output}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <Typography variant="body1">{el.label}</Typography>
            </Box>
            <IconButton
              aria-label="delete"
              className={classes.iconDeleteOutput}
              onClick={() => {
                handleDeleteUser(el.value);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </CardContent>
        ))}
        {addOutput && (
          <CardContent className={classes.cardContentOutput}>
            <Typography variant="body1" color={colors.primary} fontSize={16}>
              Enter Output #2
            </Typography>
            <Box className={classes.addUser}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={users}
                sx={{ width: 100 }}
                onChange={(e, value) => {
                  handleSelectOutput(value);
                }}
                onBlur={() => {
                  setAddOutput(false);
                }}
                renderInput={(params) => <TextField autoFocus {...params} variant="standard" label="User" />}
              />
            </Box>
          </CardContent>
        )} */}
        {/* <CardContent>
          <ButtonPrimary
            title={'Add output'}
            variant="outlined"
            startIcon="ic:baseline-plus"
            onClick={() => {
              handleAddOutput();
            }}
          />
        </CardContent> */}
      </Card>
    </Box>
  );
}

export default Output;
