import { Alert, Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import RadioTabs from '../../components/RadioTab/RadioTab';
import Empty from './components/Empty/Empty';
import ItemObjectives from './components/ItemObjectives/ItemObjectives';
import SildeObjectives from './components/SlideTab';
import SelectCompany from './components/SelectCompany/SelectCompany';
import { useDispatch } from 'react-redux';
import { getCompanyRequest, getMapRequest, getObjectiveRequest, openObjectivesRequest } from 'redux/objectives/action';
import { Link } from 'react-router-dom';
import { getUserActiveRequest } from 'redux/humanResources/action';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import ButtonIcon from 'components/ButtonIcon/ButtonIcon';

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

const VIEW = {
  PENDING_OBJ: 'PENDING_OBJ',
  STARTED_OBJ: 'STARTED_OBJ',
};

export default function Objectives() {
  const [companyId, setCompanyId] = useState('');
  const [view, setView] = useState(VIEW.STARTED_OBJ);
  const [dataObjective, setDataObjective] = useState([]);
  const [dataObjectivePending, setDataObjectivePending] = useState([]);
  const isOpenChatBox = useSelector((state: RootState) => state.chatBox.isOpenChatBox);
  const isOpenObjectives = useSelector((state: RootState) => state.objectives.isOpenObjectives);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompanyRequest());

    const data = {
      userType: '',
      companyId: companyId.id || '',
      mapFlowId: '',
      statep: '',
      pageNumber: 1,
      rowsPerPage: 20,
    };

    dispatch(
      getObjectiveRequest(
        data,
        (response: any) => {
          console.log('response =>>>>>', response);
          const listItemPending = response.acts.filter((el: any) => el.statep === '7');
          setDataObjectivePending(listItemPending);
          setDataObjective(response);
        },
        (error: any) => {
          console.log('error', error);
        },
      ),
    );
    getListUser();
    dispatch(getMapRequest({}));
  }, []);

  const getListUser = () => {
    dispatch(
      getUserActiveRequest(
        {},
        (response: any) => {
          console.log('response', response);
        },
        (err: any) => {
          <Alert variant="filled" severity="error">
            {err.message}
          </Alert>;
        },
      ),
    );
  };

  const handleSelectCompany = (value: any) => {
    setCompanyId(value);
  };
  const handleChangeView = (value: string) => {
    setView(value);
  };

  return (
    <>
      <ContainerStyle>
        {!isOpenChatBox ? (
          <SelectCompany
            handleSelectCompany={handleSelectCompany}
            handleChangeView={handleChangeView}
            count={dataObjectivePending.length}
          />
        ) : null}
        {companyId ? (
          <>
            <ContainerObjectiveStyle
              style={{
                flex: 1,
              }}
            >
              <HeaderTopStyle>
                <Box sx={{ display: 'flex' }}>
                  <ButtonIcon
                    onClick={() => handleChangeView(VIEW.STARTED_OBJ)}
                    icon="fluent-mdl2:back"
                    styled={{
                      backgroundColor: '#fff',
                      padding: '8px',
                      fontSize: '18px',
                      marginRight: 5,
                    }}
                  />
                  <RadioTabs companyId={companyId} />
                </Box>
                {/* <Header titleButton="Start Objectives" /> */}
                <ButtonPrimary
                  onClick={() => {
                    dispatch(openObjectivesRequest('start'));
                  }}
                  variant="contained"
                  startIcon="ep:video-play"
                  title={'Start Objectives'}
                  styled={{
                    backgroundColor: '#7259EE',
                    marginRight: '10px',
                  }}
                />
              </HeaderTopStyle>
              <ItemObjectivesStyle>
                {view === VIEW.STARTED_OBJ ? (
                  <Grid container spacing={2}>
                    {dataObjective?.acts?.length > 0 &&
                      dataObjective?.acts.map((e, i) => (
                        <Grid key={i.toString()} item xs={isOpenObjectives ? 12 : 6}>
                          <Link to={e.id}>
                            <ItemObjectives data={e} />
                          </Link>
                        </Grid>
                      ))}
                  </Grid>
                ) : (
                  <Grid container spacing={2}>
                    {/* {dataObjective?.acts?.length > 0 &&
                      dataObjective?.acts.map((e, i) => (
                        <Grid key={i.toString()} item xs={isOpenObjectives ? 12 : 6}>
                          <Link to={e.id}>
                            <ItemObjectives data={e} />
                          </Link>
                        </Grid>
                      ))} */}
                    View Pending
                  </Grid>
                )}
              </ItemObjectivesStyle>
            </ContainerObjectiveStyle>

            <SildeObjectives title="ExecuteObjectives" />
          </>
        ) : (
          <Empty />
        )}
      </ContainerStyle>
    </>
  );
}
