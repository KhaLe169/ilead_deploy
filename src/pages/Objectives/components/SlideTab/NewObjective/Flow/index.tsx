import Tag from 'components/Tag/Tag';
import { Select, MenuItem, Box, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './styles';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

export default function Flow() {
  const dataListCom = useSelector((state: RootState) => state.objectives.listCompany);

  const styles = useStyles();
  const [data, setData] = useState<any>([]);
  const [dataSelect, setDataSelect] = useState<any>(dataListCom);

  const handleChange = (e: any) => {
    const newArr = dataListCom.filter((el) => el.id === e.target.value);
    setData([...data, ...newArr]);
    const filterArr = dataSelect.filter((el) => !(el.id === e.target.value));
    setDataSelect(filterArr);
  };

  const handleDel = (value: number) => {
    const filterArr = dataListCom.filter((el) => el.id === value);
    setDataSelect([...dataSelect, ...filterArr]);
    const newArr = data.filter((el) => !(el.id === value));
    setData(newArr);
  };

  return (
    <Box>
      <Typography className={styles.text}>Effective corporations</Typography>
      <Box>
        <Select
          sx={{
            color: 'white',
            '.MuiSelect-select.MuiSelect-outlined': { padding: '0px' },
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '.MuiSvgIcon-root ': {
              fill: 'transparent !important',
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          displayEmpty
          onChange={handleChange}
          renderValue={() => (
            <ButtonPrimary title={'Add corporations'} variant="outlined" startIcon="ic:baseline-plus" />
          )}
        >
          {dataSelect.map((e, i) => (
            <MenuItem key={i.toString()} value={e.id}>
              {e.code}
            </MenuItem>
          ))}
        </Select>
        <Box className={styles.container}>
          {data?.map((e) => <Tag data={e} logo={e.fileName} title={e.code} handleDel={handleDel} />)}
        </Box>
      </Box>
      <Divider className={styles.divider} />
      <Box className={styles.flex}>
        <Box>
          <Typography className={styles.text}>Status</Typography>
          <OptionsStatus />
        </Box>
        <Box>
          <Typography className={styles.text}>Map</Typography>
          <OptionsMap />
        </Box>
      </Box>
      <ButtonPrimary
        variant="contained"
        title="Create"
        styled={{
          backgroundColor: '#7259EE',
          display: 'block',
          position: 'absolute',
          bottom: 24,
          right: 24,
        }}
      />
    </Box>
  );
}

const dataOptionsMenu = [
  {
    id: 1,
    text: 'VMAP',
    active: false,
  },
  {
    id: 2,
    text: 'GMAP',
    active: false,
  },
  {
    id: 3,
    text: 'CMAP',
    active: false,
  },
];

const OptionsMap = () => {
  const handleChange = (e) => {
    console.log('e', e.target.value);
  };
  return (
    <Box>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handleChange}>
        {dataOptionsMenu.map((e, i) => (
          <MenuItem key={i.toString()} value={e.text}>
            {e.text}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

const dataOptionsStatus = [
  {
    id: 2,
    text: 'Optimizing',
    active: false,
  },
  {
    id: 3,
    text: 'BAU',
    active: false,
  },
];

const OptionsStatus = () => {
  const handleChange = (e) => {
    console.log('e', e.target.value);
  };
  return (
    <Box>
      <Select labelId="demo-simple-select-label" id="demo-simple-select" onChange={handleChange}>
        {dataOptionsStatus.map((e, i) => (
          <MenuItem key={i.toString()} value={e.text}>
            {e.text}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
