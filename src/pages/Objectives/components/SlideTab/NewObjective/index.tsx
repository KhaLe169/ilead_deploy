import React from 'react';
import { Box, CardContent, Tab, Tabs, Typography, Input } from '@mui/material';

import { useStyles } from './styles';
import Flow from './Flow';
import Raci from './Raci';

import Info from './Info';
// import Executing from './Executing';

export default function NewObjective() {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);
  const ariaLabel = { 'aria-label': 'description' };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
      <Input className={styles.headerText} placeholder="Enter new objective" inputProps={ariaLabel} />
      <Box sx={{ width: '100%', height: '100vh' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            sx={{ '.MuiButtonBase-root': { marginRight: '12px' } }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Flow" {...a11yProps(0)} />
            <Tab label="Raci" {...a11yProps(1)} />
            <Tab label="IPAM" {...a11yProps(2)} />
            <Tab label="Info" {...a11yProps(3)} />
            <Tab label="Executing" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Flow />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Raci />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Raci />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Info />
        </CustomTabPanel>
        {/* <CustomTabPanel value={value} index={4}>
          <Executing />
        </CustomTabPanel> */}
      </Box>
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
