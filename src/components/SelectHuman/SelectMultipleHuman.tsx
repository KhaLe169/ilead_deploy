import React, { useMemo } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useStyles } from './styles';
import { getListHumanResourcesPayload } from 'redux/humanResources/types';
import { Chip } from '@mui/material';

type Props = {
  options: getListHumanResourcesPayload[];
  handleChangeHR: (value: getListHumanResourcesPayload[]) => void;
  value: getListHumanResourcesPayload[];
};
export default function SelectMultipleHuman({ options, handleChangeHR, value }: Props) {
  console.log('options', options);
  const styles = useStyles();
  return (
    <Autocomplete
      multiple
      className={styles.autocomplete}
      id="human-select"
      options={options}
      autoHighlight
      value={value}
      getOptionLabel={(option) => option.name}
      sx={{ width: '100%' }}
      renderOption={(props, option) => (
        <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }} component="li" {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.name}
        </Box>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => {
          console.log('option', option);
          return <Chip variant="outlined" label={option.name} {...getTagProps({ index })} />;
        })
      }
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
      onChange={(event, newValue) => {
        handleChangeHR(newValue);
      }}
    />
  );
}
