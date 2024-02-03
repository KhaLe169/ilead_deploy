import { AccountCircle } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Autocomplete,
  Avatar,
  Box,
  CardContent,
  Chip,
  Divider,
  Grid,
  IconButton,
  Input,
  TextField,
  Theme,
  Tooltip,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { useEffect, useState } from 'react';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import colors from 'theme/colors';
import { GetListHumanResourcePayload } from 'redux/humanResources/types';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import AddmorePeopleInput from 'components/AddMorePeople/Index';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

const useStyles = makeStyles((theme: Theme) => ({
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
    marginRight: '10px',
  },
  cardContentOutput: {
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
  headerText: {
    fontSize: '28px',
    fontWeight: '800',
    color: colors.black5,
    paddingBottom: '30px',
    marginBottom: '16px',
    width: '100%',
  },
  textDescription: {
    fontSize: '14px',
    fontWeight: '800',
    color: colors.black5,
    marginBottom: '16px',
    width: '100%',
    border: '0px',
  },
  btnStart: {
    textAlign: 'end',
    marginBottom: '20px',
  },
  iconAdd: {
    width: 30,
    height: 30,
    padding: 2,
    border: `1px solid ${colors.black2}`,
    borderRadius: '50%',
    color: colors.primary,
    zIndex: 2,
    backgroundColor: colors.white,
    marginLeft: '-5px',
  },
}));

interface userItem {
  value: number;
  label: string;
  role: string;
}
interface option {
  value: number;
  label: string;
}
type Props = {
  handleSubmit: (...value: any) => void;
  data: any;
};

function Output({ handleSubmit, data }: Props) {
  const classes = useStyles();
  const [HR, setHR] = useState<GetListHumanResourcePayload[]>([]);
  const [output, setOutput] = useState<any>([]);
  const [endTime, setEndTime] = useState<any>();
  const [accountable, setAccountable] = useState<any>();
  const [nameToob, setNameToob] = useState<any>('');
  const [nameDescription, setNameDescription] = useState<any>('');
  const [addOutput, setAddOutput] = useState(false);
  const [outputs, setOutputs] = useState<any>();
  const [outputUsers, setOutputUsers] = useState<any>([]);
  const [accountValidator, setAccountValidator] = useState<any>();
  const listUser = useSelector((state: RootState) => state.human.listUserActive);

  const { id } = useParams();

  useEffect(() => {
    const idToob = uuidv4();
    localStorage.setItem('idToob', idToob);
  }, []);

  useEffect(() => {
    if (data) {
      setAccountValidator({
        id: data.id,
        userType: 'V',
        actUserId: data.actUserId,
        actId: localStorage.getItem('idToob'),
        rowState: 'Added',
      });
    }
  }, [data]);

  const handleClick = () => {
    const data = {
      acts: [
        {
          name: nameToob,
          id: localStorage.getItem('idToob'),
          actId: id,
          onum: 1,
          toDateString: endTime,
          note: nameDescription,
          rowState: 'Added',
        },
      ],
      actUsers: [accountable, accountValidator, ...HR],
      actOutputs: outputs,
      actOutputUsers: outputUsers,
    };
    handleSubmit(data);
  };

  const handleChangeHR = (value: GetListHumanResourcePayload[]) => {
    const newArr = value.map((e: any, i) => {
      return {
        id: uuidv4(),
        actId: localStorage.getItem('idToob'),
        actUserId: e.id,
        userType: 'S',
        rowState: 'Added',
        name: e?.extFullName,
      };
    });

    setHR((HR: any) => [...HR, ...newArr]);
  };

  const handleChangeInput = (e) => {
    const objIndex = outputs.findIndex((obj, i) => outputs.length - 1 == i);
    const newArr = [...outputs];
    newArr[objIndex].name = e.target.value;
    setOutputs(newArr);
  };

  const handleAddOutput = () => {
    setAddOutput(true);
    const uuid = uuidv4();
    const dataOutput = {
      name: '',
      id: uuid,
      actId: id,
      note: '',
      onum: '',
      toDateString: '',
      rowState: 'Added',
    };

    const userOutput = {
      userType: 'A',
      actUserId: '',
      id: uuidv4(),
      actId: uuid,
      rowState: 'Added',
    };
    if (outputs) {
      setOutputs([...outputs, dataOutput]);
    } else {
      setOutputs([dataOutput]);
    }
    if (outputUsers) {
      setOutputUsers([...outputUsers, userOutput]);
    } else {
      setOutputUsers([userOutput]);
    }

    const dataAddOutput = {
      id: uuid,
      actId: id,
      name: '',
      actUserId: '',
      actUserName: '',
    };
    setOutput([...output, dataAddOutput]);
  };

  const handleSelectOutput = (value: userItem | string) => {
    const objIndex = outputUsers.findIndex((obj, i) => outputUsers.length - 1 == i);
    const newArr = [...outputUsers];
    newArr[objIndex].actUserId = value?.id;
    newArr[objIndex].actUserName = value?.extFullName;
    setOutputUsers(newArr);
  };

  const handleDeleteUser = (value: number) => {
    const newArray = output.filter((el: userItem) => el.id !== value);
    setOutput(newArray);

    const newArrayUser = outputUsers.filter((el: userItem) => el.actId !== value);
    setOutputUsers(newArrayUser);

    const newArrayOutput = outputs.filter((el: userItem) => el.id !== value);
    setOutputs(newArrayOutput);
  };

  const handleChangeDateTime = (date: any) => {
    setEndTime(date);
  };

  const handleChangeListHuman = (value: any) => {
    console.log('handleChangeListHuman', value);
    const data = {
      id: uuidv4(),
      userType: 'A',
      actUserId: value.id,
      actId: localStorage.getItem('idToob'),
      rowState: 'Added',
      name: value?.extFullName,
    };
    setAccountable(data);
  };

  const handleChangeText = (e: any) => {
    setNameToob(e.target.value);
  };

  const handleChangeDescription = (e: any) => {
    setNameDescription(e.target.value);
  };

  const handleDel = (value: any) => {
    const newArr = HR.filter((e) => !(e.id === value));
    setHR(newArr);
  };
  const handleBlur = () => {
    const lastItem = output[output.length - 1];

    const newLastItem = {
      ...lastItem,
      name: outputs[output.length - 1].name,
      actUserId: outputUsers[output.length - 1].actUserId,
      actUserName: outputUsers[output.length - 1].actUserName,
    };

    const newOutput = [...output];
    newOutput.splice(output.length - 1, 1, newLastItem);
    setOutput(newOutput);
    setAddOutput(false);
  };

  return (
    <Box>
      <CardContent className={classes.cardContentHeader}>
        <Input onChange={(e) => handleChangeText(e)} className={classes.headerText} placeholder="Enter new toob" />
        <Typography variant="subtitle1" sx={{ textWrap: 'nowrap' }}>
          Description
        </Typography>
        <TextField
          onChange={(e) => handleChangeDescription(e)}
          className={classes.textDescription}
          placeholder="Add description"
        />
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ textWrap: 'nowrap' }}>
              Accountable
            </Typography>
            <CustomSelectHuman
              handleChangeListHuman={handleChangeListHuman}
              listUser={listUser}
              accountable={accountable}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <Typography variant="subtitle1" sx={{ textWrap: 'nowrap' }}>
              SOS/SOI
            </Typography>
            <Box display={'flex'} alignItems={'center'}>
              {HR?.length === 0 && <AddmorePeopleInput options={listUser} handleChangeHR={handleChangeHR} />}
              {HR?.map((el, index) => {
                if (index < HR.length - 1) {
                  return (
                    <>
                      <Tooltip style={{ position: 'relative' }} title={el.name}>
                        <ButtonIcon
                          onClick={() => handleDel(el.id)}
                          icon="material-symbols:close"
                          styled={{
                            padding: '2px',
                            minWidth: 'max-content',
                            fontSize: '12px',
                            position: 'absolute',
                            backgroundColor: colors.black3,
                            top: 12,
                            right: 8,
                            zIndex: 10,
                          }}
                        />
                        <Avatar className={classes.avatar} />
                      </Tooltip>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Tooltip style={{ position: 'relative' }} title={el.name}>
                        <ButtonIcon
                          onClick={() => handleDel(el.id)}
                          icon="material-symbols:close"
                          styled={{
                            padding: '2px',
                            minWidth: 'max-content',
                            fontSize: '12px',
                            position: 'absolute',
                            backgroundColor: colors.black3,
                            top: 12,
                            right: 8,
                            zIndex: 10,
                          }}
                        />
                        <Avatar className={classes.avatar} />
                      </Tooltip>
                      <AddmorePeopleInput options={listUser} handleChangeHR={handleChangeHR} />
                    </>
                  );
                }
              })}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent className={classes.cardContentHeader}>
        <Typography variant="subtitle1">Toob duration</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <DatePicker
                  onChange={(newValue: any) =>
                    handleChangeDateTime(
                      new Date(newValue).toLocaleDateString('en-GB', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      }),
                    )
                  }
                  label="Deadline"
                />
              </Grid>
            </Grid>
          </DemoContainer>
        </LocalizationProvider>
      </CardContent>
      <div style={{ margin: '20px', backgroundColor: colors.black2, borderRadius: '10px' }}>
        <CardContent>
          <Typography variant="subtitle1">Outputs</Typography>
          <Typography variant="body1" color={colors.primary} marginTop={1}>
            Break your TOOB down into trackable groups of work
          </Typography>
        </CardContent>
        <Divider style={{ margin: '10px 0' }} />
        {output.map((el: userItem) => (
          <>
            {el.name !== '' && el.actUserName !== '' && (
              <CardContent className={classes.cardContentOutput}>
                <Typography variant="h6">{el.name}</Typography>
                <Box className={classes.output}>
                  <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                  <Typography variant="body1">{el.actUserName}</Typography>
                </Box>
                <IconButton
                  aria-label="delete"
                  className={classes.iconDeleteOutput}
                  onClick={() => {
                    handleDeleteUser(el.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            )}
          </>
        ))}

        {addOutput && (
          <CardContent sx={{ width: '100%' }}>
            <Input sx={{ width: '70%' }} autoFocus placeholder="Title output" onChange={(e) => handleChangeInput(e)} />
            <Box className={classes.addUser}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={listUser && listUser}
                sx={{ width: '70%' }}
                getOptionLabel={(options) => options.extFullName}
                onChange={(e, value) => {
                  handleSelectOutput(value);
                }}
                onBlur={() => {
                  handleBlur();
                }}
                renderInput={(params) => <TextField {...params} variant="standard" label="User" />}
              />
            </Box>
          </CardContent>
        )}
      </div>
      <CardContent>
        <ButtonPrimary
          title={'Add output'}
          variant="outlined"
          startIcon="ic:baseline-plus"
          onClick={() => {
            handleAddOutput();
          }}
        />
        <Divider style={{ margin: '32px 0' }} />
        {/* <Typography fontSize="14px" fontWeight="600" paddingTop={'10px'} paddingBottom={'10px'}>
          IPAM report
        </Typography>
        <input style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
        <label htmlFor="raised-button-file">
          <ButtonPrimary
            component="span"
            startIcon="ep:video-play"
            variant="outlined"
            title="attach report"
            styled={{ backgroundColor: 'primary.lighter', marginBottom: 2 }}
          />
        </label> */}
        <Box className={classes.btnStart}>
          <ButtonPrimary title={'Create Toob'} variant="contained" onClick={handleClick} />
        </Box>
      </CardContent>
    </Box>
  );
}

const CustomSelectHuman = ({ accountable, listUser, handleChangeListHuman }) => {
  const classes = useStyles();
  const [visableAccount, setVisableAccount] = useState(false);
  const [value, setValue] = useState('');
  return (
    <>
      {visableAccount ? (
        <Autocomplete
          style={{ background: 'white', padding: '10px' }}
          id="human-select"
          options={listUser}
          autoHighlight
          value={value}
          getOptionLabel={(option) => option.extFullName}
          sx={{ width: '100%' }}
          renderOption={(props, option) => (
            <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }} component="li" {...props}>
              {/* <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option?.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option?.code.toLowerCase()}.png`}
                  alt=""
                /> */}
              {option.extFullName}
            </Box>
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => {
              return <Chip variant="outlined" label={option.extFullName} {...getTagProps({ index })} />;
            })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onBlur={() => {
            setVisableAccount(false);
            handleChangeListHuman(value);
          }}
        />
      ) : (
        <>
          {accountable ? (
            <Tooltip style={{ position: 'relative' }} title={accountable?.name}>
              <Avatar className={classes.avatar} onClick={() => setVisableAccount(true)} />
            </Tooltip>
          ) : (
            <Box onClick={() => setVisableAccount(true)}>
              <PersonAddAltOutlinedIcon className={classes.iconAdd} />
            </Box>
          )}
        </>
      )}
    </>
  );
};

export default Output;
