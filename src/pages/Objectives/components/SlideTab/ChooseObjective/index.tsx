import { getListObjRequest } from 'redux/objective/action';
import { closeObjectivesRequest, getDetailObjectiveRequest, startObjectiveRequest } from 'redux/objectives/action';
import { Autocomplete, Box, CardContent, Tab, Tabs, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Executing from './Executing/Index';
import Info from './Info';
import { useStyles } from './styles';

export default function ChooseObjective() {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [listOBJ, setListOBJ] = useState([]);
  const [valueOBJ, setValueOBJ] = useState(null);
  const [objDetail, setObjDetail] = useState(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleNext = () => {
    setValue(1);
  };
  useEffect(() => {
    const data = { userType: 'A', companyId: '', mapFlowId: '', statep: '5', pageNumber: 0, rowsPerPage: 0 };
    dispatch(
      getListObjRequest(
        data,
        (response: any) => {
          if (response.acts.length > 0) {
            setListOBJ(response.acts);
          }
        },
        (error: any) => {
          console.log('error', error);
        },
      ),
    );
  }, []);
  const handleSelectOBJ = (newValue: any) => {
    setValueOBJ(newValue);
    dispatch(
      getDetailObjectiveRequest(
        { id: newValue.id },
        (res) => {
          setObjDetail(res);
        },
        (err) => {
          console.log('err', err);
        },
      ),
    );
  };
  const handleStartObj = () => {
    if (objDetail !== null && valueOBJ !== null) {
      console.log('dasdasd');
      dispatch(
        startObjectiveRequest(
          { id: valueOBJ.id },
          (res) => {
            dispatch(closeObjectivesRequest());
            const data = { userType: 'A', companyId: '', mapFlowId: '', statep: '', pageNumber: 0, rowsPerPage: 0 };
            dispatch(
              getListObjRequest(
                data,
                (response: any) => {
                  if (response.acts.length > 0) {
                    setListOBJ(response.acts);
                  }
                },
                (error: any) => {
                  console.log('error', error);
                },
              ),
            );
          },
          (err) => {},
        ),
      );
    }
  };

  return (
    <CardContent>
      <Typography className={styles.headerText}>Choose objective</Typography>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={listOBJ}
        value={valueOBJ}
        getOptionLabel={(option) => option.name}
        sx={{ width: '100%', marginTop: 2 }}
        renderInput={(params) => <TextField {...params} label="Objective" />}
        onChange={(event, newValue) => {
          handleSelectOBJ(newValue);
        }}
      />
      {objDetail !== null && (
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Info" {...a11yProps(0)} />
              <Tab label="Executing" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Info handleNext={handleNext} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Executing handleStartObj={handleStartObj} />
          </CustomTabPanel>
        </Box>
      )}
    </CardContent>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ marginTop: '32px' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
