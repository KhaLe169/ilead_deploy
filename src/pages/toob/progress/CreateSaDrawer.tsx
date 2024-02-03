import { Icon } from '@iconify/react';
import {
  Autocomplete,
  Box,
  Divider,
  Menu,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BoxFlex } from 'components/Box/BoxFlex';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import SelectOptions from 'components/Select/SelectOptions';
import { isArray } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { CLOSE_CREATE_SA_REQUEST } from 'redux/toob/actionTypes';
import { getActiveUserRequest } from 'redux/user/action';
import { OutputModel } from 'types/toob.interface';
import { UserModel, UserType } from 'types/user.interface';
import {
  BoxCreateSA,
  BoxIcon,
  ButtonAction,
  CardSubStyled,
  DividerStyled,
  InputDescription,
  InputTitle,
  TitleAssign,
} from './style';

type Props = {
  outputList: OutputModel[];
};

interface IFormInput {
  name: string;
  note: string;
  dueDate: Date;
  assignSoi: string;
  assignResponsible: string;
  assignCheckers: string;
  assignValidator: string;
}

const CreateSaDrawer = (props: Props) => {
  const dispatch = useDispatch();
  const { outputList } = props;

  const { userActive } = useSelector((state: RootState) => state.user);

  const [visiblePopupAssignSOI, setVisiblePopupAssignSOI] = useState(false);
  const [visiblePopupAssignResponsible, setVisiblePopupAssignResponsible] = useState(false);
  const [visiblePopupAssignCheckers, setVisiblePopupAssignCheckers] = useState(false);
  const [visiblePopupAssignValidator, setVisiblePopupAssignValidator] = useState(false);
  const [visiblePriority, setVisiblePriority] = useState(false);
  const [visibleDatePicker, setVisibleDatePicker] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handlePopupAssignSOI = () => {
    setVisiblePopupAssignSOI(!visiblePopupAssignSOI);
  };

  useEffect(() => {
    dispatch(
      getActiveUserRequest({
        userType: 'MAKE',
      }),
    );
  }, []);


  const handlePopupAssignCheckers = () => {
    setVisiblePopupAssignCheckers(!visiblePopupAssignCheckers);
  };

  const handlePopupAssignValidator = () => {
    setVisiblePopupAssignValidator(!visiblePopupAssignValidator);
  };

  const { register, handleSubmit, setValue, getValues } = useForm<IFormInput>();

  const handleCloseSA = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch({ type: CLOSE_CREATE_SA_REQUEST });
  };

  const listNameOutput = isArray(outputList)
    ? outputList.map((item) => {
      return {
        value: item.name,
        label: item.name,
      };
    })
    : [];

  const handleSelectDuedate = (value: Date) => {
    setValue('dueDate', value);
  };

  const handleClickButtonPriority = (event: React.MouseEvent<HTMLButtonElement>) => {
    setVisiblePriority(!visiblePriority);
    setAnchorEl(event.currentTarget);
  };

  const handleClosePriority = () => {
    setVisiblePriority(false);
    setAnchorEl(null);
  };

  const handleGetValues = (event: MouseEvent, value: UserModel, userType: UserType) => {
    event.stopPropagation();
    if (value) {
      const actUser = {
        id: value.id,
        state: value.state,
        userName: value.extName,
        actId: '',
        actUserId: '',
        userType: userType,
        // rowState: value.
      };
    }

  }

  return (
    <BoxCreateSA>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        width="100%
          "
      >
        <Typography fontSize={'28px'} fontWeight={'800'} lineHeight={'32px'}>
          Create SA
        </Typography>
        <BoxIcon onClick={(event) => handleCloseSA(event)}>
          <Icon icon={'mdi:close'} />
        </BoxIcon>
      </Box>
      <Box display="flex" flexShrink={'inherit'} width={'50%'} gap={2}>
        <SelectOptions placeholder="Select output" options={listNameOutput} />
      </Box>
      <InputTitle placeholder="Title of new SA" {...register('name')} />
      <InputDescription placeholder="Add description" {...register('note')} />

      <Box display={'flex'} flexDirection={'column'} gap={3}>
        <Box display={'flex'} gap={1} marginTop={'24px'}>
          <ButtonPrimary startIcon={'material-symbols-light:pause-outline'} variant="outlined" title="TO DO" disabled />
          <ButtonPrimary
            startIcon={'mdi:calendar-outline'}
            variant="outlined"
            title="Due date"
            onClick={() => setVisibleDatePicker(!visibleDatePicker)}
          />
          <ButtonPrimary
            startIcon={'mdi:flag'}
            variant="outlined"
            title="Priority"
            onClick={handleClickButtonPriority}
          />
          <Menu
            open={visiblePriority}
            id="priority"
            anchorEl={anchorEl}
            onClose={handleClosePriority}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => setVisiblePriority(false)}>
              <Typography variant="inherit">High</Typography>
            </MenuItem>
            <MenuItem onClick={() => setVisiblePriority(false)}>
              <Typography variant="inherit">Medium</Typography>
            </MenuItem>
            <MenuItem onClick={() => setVisiblePriority(false)}>
              <Typography variant="inherit">Low</Typography>
            </MenuItem>
          </Menu>
        </Box>
        {visibleDatePicker && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(value) => handleSelectDuedate(value)} />
          </LocalizationProvider>
        )}
        <Divider />

        <Box display={'flex'} flexDirection={'column'} gap={1}>
          <TitleAssign fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'}>
            SOI
          </TitleAssign>
          <BoxFlex onClick={handlePopupAssignSOI}>
            <img src="/src/static/icons/user-profile.svg" width={24} height={24} />
            <TitleAssign fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'}>
              Assign SOIs
            </TitleAssign>
          </BoxFlex>
          {visiblePopupAssignSOI && (
            <Autocomplete
              // multiple
              {...register('assignSoi')}
              onChange={(event, value) => handleGetValues(event, value, 'assignSoi')}
              disablePortal
              id="assign-soi"
              options={userActive}
              getOptionLabel={(option: UserModel) =>
                // <Box display={'flex'} alignItems={'center'} gap={1}>
                //   <img src="/src/static/icons/user-profile.svg" width={24} height={24} />
                //   <Typography fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'}>
                option.extFullName
                //   </Typography>
                // </Box>
              }
              renderInput={(params) => <TextField {...params} placeholder="Search SOI" label={'SOI'} />}
            />
          )}
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={1}>
          <Typography fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'}>
            Human Resources
          </Typography>
          <Typography fontSize={'11px'}>Responsible</Typography>
          <BoxFlex onClick={() => setVisiblePopupAssignResponsible(!visiblePopupAssignResponsible)}>
            <img src="/src/static/icons/user-profile.svg" width={24} height={24} />
            <TitleAssign fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'}>
              Assign responsible
            </TitleAssign>
          </BoxFlex>
          {visiblePopupAssignResponsible && (
            <Autocomplete
              multiple
              {...register('assignResponsible')}
              id="assign-responsible"
              options={userActive}
              getOptionLabel={(option: UserModel) => option.extFullName}
              renderInput={(params) => <TextField {...params} placeholder="Search Responsible" label='Responsible' />}
            />
          )}
          <Typography fontSize={'11px'}>Checkers</Typography>
          <BoxFlex onClick={() => setVisiblePopupAssignCheckers(!visiblePopupAssignCheckers)}>
            <img src="/src/static/icons/user-profile.svg" width={24} height={24} />
            <TitleAssign fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'}>
              Assign checkers
            </TitleAssign>
          </BoxFlex>

          {visiblePopupAssignCheckers && (
            <Autocomplete
              multiple
              {...register('assignCheckers')}
              id="assign-validator"
              options={userActive}
              getOptionLabel={(option: UserModel) => option.extFullName}
              renderInput={(params) => <TextField {...params} placeholder="Search Checker" label='Checker' />}
            />
          )}

          <Typography fontSize={'11px'}>Validator</Typography>
          <BoxFlex onClick={() => setVisiblePopupAssignValidator(!visiblePopupAssignValidator)}>
            <img src="/src/static/icons/user-profile.svg" width={24} height={24} />
            <TitleAssign fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'}>
              Assign validator
            </TitleAssign>
          </BoxFlex>
          {visiblePopupAssignValidator && (
            <Autocomplete
              multiple
              {...register('assignValidator')}
              id="assign-validator"
              options={userActive}
              getOptionLabel={(option: UserModel) => option.extFullName}
              renderInput={(params) => <TextField {...params} placeholder="Search Validator" label='Validator' />}
            />
          )}
        </Box>

        <Divider orientation="vertical" flexItem />
        <Typography fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'} color={'#101023'}>
          Sub-SA
        </Typography>
        <span>Break your SA down into smaller chunks of work</span>

        <CardSubStyled>
          <Typography fontSize={'16px'} fontWeight={'600'} lineHeight={'24px'}>
            Enter sub-SA #1
          </Typography>
          <BoxFlex>
            <Icon width={'16px'} height={'16px'} icon={'mdi:user'} />
            <Typography fontSize={'10px'} fontWeight={'600'} lineHeight={'12px'}>
              Assign human resources
            </Typography>
          </BoxFlex>

          <DividerStyled />

          <Typography fontSize={'16px'} fontWeight={'600'} lineHeight={'24px'}>
            Enter sub-SA #1
          </Typography>
          <BoxFlex>
            <Icon width={'16px'} height={'16px'} icon={'mdi:user'} />
            <Typography fontSize={'10px'} fontWeight={'600'} lineHeight={'12px'}>
              Assign human resources
            </Typography>
          </BoxFlex>
        </CardSubStyled>
        <ButtonAction
          startIcon={<Icon icon={'mdi:plus'} />}
          variant="outlined"
          color="primary"
          style={{
            width: 'max-content',
          }}
        >
          Add sub-SA
        </ButtonAction>

        <Divider />

        <Typography fontSize={'14px'} fontWeight={'800'} lineHeight={'16px'}>
          IPAM report
        </Typography>
        <ButtonAction
          startIcon={<Icon icon={'mdi:file'} />}
          variant="outlined"
          color="primary"
          style={{
            width: 'max-content',
          }}
        >
          Attach report
        </ButtonAction>
      </Box>
      <Box justifyContent={'flex-end'} display={'flex'} width={'100%'}>
        <ButtonPrimary title={'Create'} variant={'contained'} />
      </Box>
    </BoxCreateSA>
  );
};

export default CreateSaDrawer;
