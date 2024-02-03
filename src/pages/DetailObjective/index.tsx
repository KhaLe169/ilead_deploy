import Report from 'components/FileReport/Report';
import Tag from 'components/Tag/Tag';
import CollapseNoCard from 'components/collapse';
import colors from 'theme/colors';
import { AccountCircle } from '@mui/icons-material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import DoNotDisturbAltOutlinedIcon from '@mui/icons-material/DoNotDisturbAltOutlined';
import { Box, Button, Card, CardActions, CardContent, Grid, Tab, Tabs, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import reactangle from 'public/images/Rectangle.png';
import logo from 'public/logoCom.png';
import { useState } from 'react';
import Checkers from './components/Checkers';
import FormReject from './components/FormReject';

const ContainerStyle = styled('div')(() => ({
  display: 'flex',
  padding: '10px',
}));
const ContentStyle = styled('div')(() => ({
  display: 'flex',
  padding: '1em 8em',
  flexDirection: 'column',
}));
const ContentApprove = styled('div')(() => ({
  display: 'flex',
  padding: '1em ',
  flexDirection: 'column',
}));

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  avatar: {
    width: 35,
    height: 35,
  },
  assigner: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  action: {
    backgroundColor: colors.primaryLighter,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '1px solid #D3D3EA',
  },
  buttonApprove: {
    boxShadow: 'none',
    padding: '2px 4px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    alignSelf: 'stretch',
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: '100px',
    minWidth: '110px',
  },
  buttonReject: {
    boxShadow: 'none',
    padding: '6px 12px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    alignSelf: 'stretch',
    borderRadius: '100px',
    minWidth: '110px',
    backgroundColor: '#FFEDEB',
    color: colors.red,
    border: `1px solid ${colors.red}`,
  },
  iconBtn: {
    marginRight: 1,
  },
  card: {
    borderRadius: '20px',
    border: '1px solid #D3D3EA',
    // boxShadow: 'none',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '100px',
    backgroundColor: '#F1EEFD',
    padding: '2px 2px',
  },
  tabItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    padding: '2px 8px',
    opacity: 0.7,
    '&.Mui-selected': {
      backgroundColor: '#fff',
      opacity: 1,
    },
    '&.MuiTab-root': {
      marginRight: 0,
    },
  },
  numberTabItem: {
    minWidth: '32px',
    borderRadius: '100%',
    backgroundColor: colors.red,
    color: colors.white,
    padding: 3,
    marginLeft: 5,
  },
}));

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default function DetailObjective() {
  const styles = useStyles();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <ContainerStyle>
        <Grid container spacing={1} direction={'row'}>
          <Grid item xs={8}>
            <ContentStyle>
              <Typography variant="h3" color={`${colors.primary}`}>
                10k personnel onboarded
              </Typography>
              <Grid container direction={'row'}>
                <Grid item xs={2}>
                  <Typography variant="subtitle1" fontWeight={800}>
                    Map
                  </Typography>
                  <Tag title="CMAP" />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" fontWeight={800}>
                    Expected deadline
                  </Typography>
                  <Tag title="VNDIRECT" />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1" fontWeight={800}>
                    Expected deadline
                  </Typography>
                  <Tag logo={logo} title="VNDIRECT" />
                </Grid>
              </Grid>
              <CollapseNoCard title="Outcome">
                <Box>
                  <Typography variant="subtitle2" padding={'15px 0px'}>
                    FCPL
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      Recruiting 10,000 employees for a multicompany group is a massive undertaking that requires a
                      well-planned and executed strategy. One of the most effective recruitment strategies is to define
                      your corporate brand. This involves developing a reputation for your products and services that
                      will attract the best talent.
                    </Grid>
                    <Grid item xs={6}>
                      <img src={reactangle} width={'100%'} height={'auto'} />
                    </Grid>
                    <Report mainText="Report" link="https://docs.google.com/files/dwj19-29kvn-cakw2" />
                  </Grid>
                </Box>
              </CollapseNoCard>
              <CollapseNoCard title="Outcome">
                <Box>
                  <Typography variant="subtitle2" padding={'15px 0px'}>
                    FCPL
                  </Typography>
                  <Grid container>
                    <Grid item xs={6}>
                      Recruiting 10,000 employees for a multicompany group is a massive undertaking that requires a
                      well-planned and executed strategy. One of the most effective recruitment strategies is to define
                      your corporate brand. This involves developing a reputation for your products and services that
                      will attract the best talent.
                    </Grid>
                    <Grid item xs={6}>
                      <img src={reactangle} width={'100%'} height={'auto'} />
                    </Grid>
                    <Report mainText="Report" link="https://docs.google.com/files/dwj19-29kvn-cakw2" />
                  </Grid>
                </Box>
              </CollapseNoCard>
            </ContentStyle>
          </Grid>
          <Grid item xs={4}>
            <ContentApprove>
              <Card className={styles.card}>
                <CardContent>
                  <Grid container className={styles.assigner}>
                    <Grid item xs={2}>
                      <AccountCircle className={styles.avatar} />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="subtitle1" color="text.secondary">
                        <strong>Nguyen Pham Hong (Brandcare-IPA-Group)</strong>
                        assigned you to check this objective
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions className={styles.action}>
                  <Button
                    className={styles.buttonReject}
                    size="small"
                    variant="text"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <DoNotDisturbAltOutlinedIcon className={styles.iconBtn} />
                    Reject
                  </Button>
                  <Button className={styles.buttonApprove} size="small" variant="contained">
                    <CheckCircleOutlinedIcon className={styles.iconBtn} />
                    Approve
                  </Button>
                </CardActions>
              </Card>
              <Typography variant={'h3'} marginTop={6}>
                Reviewers
              </Typography>
              <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
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
                  <Tab
                    className={styles.tabItem}
                    label={
                      <>
                        <Typography variant="subtitle1">Checkers</Typography>
                        <Typography className={styles.numberTabItem}>{3}</Typography>
                      </>
                    }
                    {...a11yProps(1)}
                  ></Tab>
                  <Tab
                    className={styles.tabItem}
                    label={
                      <>
                        <Typography variant="subtitle1">Validators</Typography>
                        <Typography className={styles.numberTabItem}>{3}</Typography>
                      </>
                    }
                    {...a11yProps(2)}
                  />
                  <Tab
                    className={styles.tabItem}
                    label={
                      <>
                        <Typography variant="subtitle1">SOI</Typography>
                        <Typography className={styles.numberTabItem}>{12}</Typography>
                      </>
                    }
                    {...a11yProps(3)}
                  />
                </Tabs>
                <Box padding={0} width={'100%'}>
                  <CustomTabPanel value={value} index={0}>
                    <Checkers />
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    Item Two
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    Item Three
                  </CustomTabPanel>
                </Box>
              </Box>
            </ContentApprove>
          </Grid>
        </Grid>
        <FormReject open={open} setOpen={setOpen} />
      </ContainerStyle>
    </>
  );
}
