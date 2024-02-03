import React, { useEffect, useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { useStyles } from './styles';
import { getMapRequest } from 'redux/objectives/action';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
interface IProps {
  companyId: string;
}

export default function RadioTabs({ companyId }: IProps) {
  const dispatch = useDispatch();
  const [dataMap, setDataMap] = useState([]);
  const listMap = useSelector((state: RootState) => state.objectives.listMap);

  useEffect(() => {
    if (listMap) {
      setDataMap(listMap);
    }
  }, [listMap]);

  const [value, setValue] = React.useState(0);
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
    >
      {dataMap &&
        dataMap.map((e, i) => <Tab key={i.toString()} className={styles.tabItem} label={e?.name} {...a11yProps(i)} />)}
    </Tabs>
  );
}
