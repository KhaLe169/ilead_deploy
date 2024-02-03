import colors from 'theme/colors';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Autocomplete, Box, Chip, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

type Props = {
  options: unknown;
  handleChangeHR: (value: any) => void;
  optionName?: string;
};

const useStyles = makeStyles(() => ({
  container: {
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  avatar: {
    width: 30,
    height: 30,
    padding: 2,
    border: `1px solid ${colors.black2}`,
    borderRadius: '50%',
    color: colors.primary,
    zIndex: 1,
  },
  iconAdd: {
    width: 30,
    height: 30,
    padding: 2,
    border: `1px solid ${colors.black2}`,
    borderRadius: '50%',
    color: colors.primary,
    zIndex: 2,
    backgroundColor: colors.white,
    marginLeft: '-5px',
  },
  iconBtn: {
    backgroundColor: 'none',
  },
  autocomplete: {
    background: 'white',
    padding: '10px',
  },
}));

function AddmorePeopleInput({ options, handleChangeHR, optionName }: Props) {
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [value, setValue] = useState([]);
  const styles = useStyles();
  return (
    <>
      {!isShowSelect ? (
        <Box
          className={styles.container}
          onClick={() => {
            setIsShowSelect(true);
          }}
        >
          {/* <AccountCircleOutlinedIcon className={styles.avatar} /> */}
          <PersonAddAltOutlinedIcon className={styles.iconAdd} />
        </Box>
      ) : (
        <>
          <Autocomplete
            multiple
            className={styles.autocomplete}
            id="human-select"
            options={options}
            autoHighlight
            value={value}
            getOptionLabel={(option) => (option.name ? option.name : option.extFullName)}
            sx={{ width: '100%' }}
            renderOption={(props, option) => (
              <Box sx={{ '& > img': { mr: 2, flexShrink: 0 } }} component="li" {...props}>
                {/* <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option?.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option?.code.toLowerCase()}.png`}
                  alt=""
                /> */}
                {option.name ? option.name : option.extFullName}
              </Box>
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => {
                return (
                  <Chip
                    variant="outlined"
                    label={option.name ? option.name : option.extFullName}
                    {...getTagProps({ index })}
                  />
                );
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
              setValue(newValue);
            }}
            onBlur={() => {
              setIsShowSelect(false);
              handleChangeHR(value);
            }}
          />
        </>
      )}
    </>
  );
}

export default AddmorePeopleInput;
