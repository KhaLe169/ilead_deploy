import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useEffect } from 'react';
import { configTabs } from './config';
import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TabsStyled = styled(Tabs)`
  .Mui-selected {
    color: #7259ee !important;
  }
`;

export default function HeaderTab() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleNextTabs = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const index = configTabs.findIndex((tab) => tab.path === location.pathname);
    setValue(index);
  }, []);

  return (
    <Box width={'100%'} marginLeft="10px">
      <TabsStyled value={value} onChange={handleChange} aria-label="basic tabs example">
        {configTabs.map((tab, index) => (
          <Tab label={tab.title} {...a11yProps(index)} onClick={() => handleNextTabs(tab.path)} />
        ))}
      </TabsStyled>
    </Box>
  );
}
