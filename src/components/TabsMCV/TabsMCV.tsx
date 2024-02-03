import VisibilityIcon from '@mui/icons-material/Visibility';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import { includes } from 'lodash';
import * as React from 'react';
import { screenValue } from 'types/toob.interface';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

type Props = {
  setValue: (value: screenValue) => void;
  value?: string;
  roleSA?: string[];
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '100px',
    backgroundColor: '#F1EEFD',
    padding: '2px 2px',
    width: '100%',
  },
  root: {
    width: '100%',
  },
  tabItem: {
    width: '33.3%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    fontSize: 12,
    '&.Mui-selected': {
      backgroundColor: '#fff',
    },
    '&.MuiTab-root': {
      marginRight: 0,
    },
  },
});

export default function TabsMCV({ setValue, value, roleSA }: Props) {
  const styles = useStyles();

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: screenValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  const showMake = includes(roleSA, 'A');
  const showCheck = includes(roleSA, 'X');
  const showValidate = includes(roleSA, 'Y');

  return (
    <Tabs
      value={value}
      aria-label="basic tabs example"
      indicatorColor="primary"
      onChange={(event, newValue) => handleChange(event, newValue)}
      TabIndicatorProps={{
        style: { display: 'none' },
      }}
      className={styles.container}
    >
      <Tab
        className={styles.tabItem}
        label="Make"
        {...a11yProps(1)}
        value={'Make'}
        iconPosition="end"
        icon={<img src="/info-icon/edit.svg" alt="" />}
        disabled={!showMake}
      />
      <Tab
        className={styles.tabItem}
        label="Check"
        {...a11yProps(2)}
        value={'Check'}
        iconPosition="end"
        icon={<img src="/info-icon/doing.svg" alt="" />}
        disabled={!showCheck}
      />
      <Tab
        className={styles.tabItem}
        label="Validate"
        {...a11yProps(2)}
        value={'Validate'}
        iconPosition="end"
        icon={<VisibilityIcon style={{ color: '#754ea6' }} />}
        disabled={!showValidate}
      />
    </Tabs>
  );
}
