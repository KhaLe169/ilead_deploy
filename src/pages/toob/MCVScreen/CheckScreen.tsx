import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, MenuItem, Typography } from '@mui/material';
import Select from '@mui/material/Select';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { makeStyles } from '@mui/styles';
import React from 'react';
import styled from 'styled-components';

import BoxAvatar from '../packages/BoxAvatar';
import CheckInfo from './CheckInfo';
import CheckResults from './CheckResults';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function CheckScreen() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { dataSA } = useSelector((state: RootState) => state.toob);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} flexDirection={'column'} height="100%">
        <Typography fontSize="20px" fontWeight="800">
          Mock Screen
        </Typography>
        <BoxAvatar dataSA={dataSA} />
        <Typography fontSize="14px" fontWeight="600" lineHeight={'34px'}>
          Status
        </Typography>
        <Select style={{ width: '50%' }} defaultValue={'10'} className={classes.root} disabled>
          <MenuItem value={10}>
            <Box display={'flex'}>
              <img src="/info-icon/todo.svg" alt="" style={{ paddingRight: '15px' }} />
              <span>To do </span>
            </Box>
          </MenuItem>
          <MenuItem value={11}>
            <Box display={'flex'}>
              <img src="/info-icon/doing.svg" alt="" style={{ paddingRight: '15px' }} />
              <span>Doing</span>
            </Box>
          </MenuItem>
          <MenuItem value={12}>
            <Box display={'flex'}>
              <VisibilityIcon style={{ color: '#754ea6' }} />
              <span>Submited</span>
            </Box>
          </MenuItem>
        </Select>
        <Box width={'100%'} marginLeft="10px">
          <TabsStyled value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Info" {...a11yProps(1)} value={0} />
            <Tab label="Results" {...a11yProps(2)} value={1} />
          </TabsStyled>
          {value === 0 && <CheckInfo />}
          {value === 1 && <CheckResults />}
        </Box>
      </Box>
    </>
  );
}

export default CheckScreen;

const useStyles = makeStyles({
  root: {
    backgroundColor: '#F1EEFD',
    // color: (props) => props.color,
    borderRadius: '35px',
    height: '35px',
  },
});

const TabsStyled = styled(Tabs)`
  .Mui-selected {
    color: #7259ee !important;
  }
`;
