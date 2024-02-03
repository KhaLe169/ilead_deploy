import { Grid, Tabs, Tab, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Header from '../Header';
import ItemObjectives from './components/ItemObjectives/ItemObjectives';
import SildeObjectives from './components/SlideTab';

import { useDispatch } from 'react-redux';
import { getDetailObjectiveRequest, getInfoOutputRequest, getToobByObjectiveRequest } from 'redux/objectives/action';
import Info from './components/Info';
import { useParams } from 'react-router-dom';
import { getUserActiveRequest } from 'redux/humanResources/action';
import { useStyles } from 'components/RadioTab/styles';

const ContainerStyle = styled('div')(() => ({
  display: 'flex',
  padding: '10px',
}));

const HeaderTopStyle = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '28px',
}));

const ItemObjectivesStyle = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

const ContainerObjectiveStyle = styled('div')(({ theme }) => ({
  borderRadius: theme.spacing(2),
  padding: '24px',
  backgroundColor: '#F8F8FC',
}));

const dataFilter = [
  { id: 1, name: 'Active', status: '0' },
  { id: 2, name: 'To-do', status: '1' },
  { id: 3, name: 'Rejected', status: '0' },
];

export default function DetailObjectives() {
  const [dataObjective, setDataObjective] = useState([]);
  const [dataToob, setDataToob] = useState([]);
  const [value, setValue] = useState(0);
  const isOpenChatBox = useSelector((state: RootState) => state.chatBox.isOpenChatBox);
  const isOpenObjectives = useSelector((state: RootState) => state.objectives.isOpenObjectives);
  const listToob = useSelector((state: RootState) => state.objectives.listToob);
  useEffect(() => {
    setDataToob(listToob);
  }, [listToob]);

  const dispatch = useDispatch();
  const { id } = useParams();
  const styles = useStyles();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const dataToob = {
      userType: 'A',
      actId: '',
      statep: newValue,
      pageNumber: 1,
      rowsPerPage: 20,
    };
    dispatch(getToobByObjectiveRequest(dataToob));
  };

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    dispatch(getUserActiveRequest());
  };

  useEffect(() => {
    const data = { id: id };
    dispatch(
      getDetailObjectiveRequest(
        data,
        (response: any) => {
          setDataObjective(response);
        },
        (error: any) => {
          console.log('error', error);
        },
      ),
    );
  }, [id]);

  useEffect(() => {
    if (dataObjective.acts) {
      const dataToob = {
        userType: 'A',
        actId: '',
        statep: '0',
        pageNumber: 1,
        rowsPerPage: 20,
      };

      dispatch(getToobByObjectiveRequest(dataToob));
    }
  }, [dataObjective]);

  return (
    <>
      <ContainerStyle>
        {!isOpenChatBox ? <Info data={dataObjective?.acts && dataObjective?.acts[0]} /> : null}
        <>
          <ContainerObjectiveStyle
            style={{
              width: isOpenChatBox
                ? isOpenObjectives == ''
                  ? '100%'
                  : '66%'
                : isOpenObjectives == ''
                  ? '100%'
                  : '33%',
            }}
          >
            <HeaderTopStyle>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                indicatorColor="primary"
                TabIndicatorProps={{
                  style: { display: 'none' },
                }}
                className={styles.container}
              >
                {dataFilter.map((e, i) => (
                  <Tab key={i.toString()} className={styles.tabItem} label={e?.name} {...a11yProps(e.status)} />
                ))}
              </Tabs>
              <Header titleButton="Add TOOB" />
            </HeaderTopStyle>
            <ItemObjectivesStyle>
              <Grid container spacing={2}>
                {dataToob?.acts &&
                  dataToob?.acts.map((e, i) => (
                    <Grid key={i.toString()} item xs={isOpenObjectives ? 12 : 6}>
                      <ItemObjectives data={e} />
                    </Grid>
                  ))}
              </Grid>
            </ItemObjectivesStyle>
          </ContainerObjectiveStyle>

          <SildeObjectives data={dataObjective} title="ExecuteObjectives" />
        </>
      </ContainerStyle>
    </>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
