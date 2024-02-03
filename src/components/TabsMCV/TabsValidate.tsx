import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
type Props = {
  setValue: (value: number) => void;
  value: number;
};
export default function TabsValidate({ setValue, value }: Props) {
  // const [value, setValue] = React.useState(0);
  const styles = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      indicatorColor="primary"
      TabIndicatorProps={{
        style: { display: 'none' },
      }}
      className={styles.container}
      sx={{ paddingBottom: '10px' }}
    >
      <Tab
        className={styles.tabItem}
        label="Checker"
        {...a11yProps(1)}
        value={'Checker'}
        iconPosition="end"
        icon={<div style={{ background: 'red', color: 'white', padding: '3px', borderRadius: '10px' }}>1/2</div>}
      />
      <Tab
        className={styles.tabItem}
        label="Validator"
        {...a11yProps(2)}
        value={'Validator'}
        iconPosition="end"
        icon={<div style={{ background: 'red', color: 'white', padding: '3px', borderRadius: '10px' }}>1/2</div>}
      />
    </Tabs>
  );
}
const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '100px',
    backgroundColor: '#F1EEFD',
    padding: '2px 2px',
    width: '94%',
    height: '30px',
    minHeight: '30px',
    marginBottom: '10px',
  },
  root: {
    width: '100%',
  },
  MuiTab: {
    // root: {
    minHeight: '10px',
    // },
  },
  tabItem: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    fontSize: 12,
    minHeight: '25px',
    // padding: '4px 8px',
    '&.Mui-selected': {
      backgroundColor: '#fff',
    },
    '&.MuiTab-root': {
      marginRight: 0,
    },
  },
});
