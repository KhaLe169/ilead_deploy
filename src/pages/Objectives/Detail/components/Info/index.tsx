import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import colors from 'theme/colors';
import CardCollapse from 'pages/chat/components/cardCollapse/CardCollapse';
import { DATE_FORMAT } from 'constants/index';
import dayjs from 'dayjs';
import { calculateRemainingTime } from 'utils/common';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IpamReportCard } from 'pages/toob/packages/IpamReportInfo';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';

type Props = {
  data: any;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '22px 14px',
    width: '33%',
    marginRight: '24px',
    height: '100%',
  },
  duration: { color: '#B5B3DB', marginBottom: '24px' },
  userName: { color: colors.black6, marginBottom: '24px', fontSize: '20px' },
  name: { fontWeight: '800', fontSize: '32px', marginBottom: '24px', color: colors.black6 },
}));

function Info({ data }: Props) {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState('');
  const listUser = useSelector((state: RootState) => state.human.listUserActive);
  console.log('data', data);
  useEffect(() => {
    const filterUser = listUser.filter((e) => e.id == data?.createdUserId);
    setUserInfo(...filterUser);
  }, [listUser]);

  return (
    <Box className={classes.root}>
      <Box marginTop={2}>
        <Typography className={classes.name}>{data && data?.name}</Typography>
        <Typography className={classes.userName}>{userInfo && userInfo?.extFullName}</Typography>
        Duration
        <Box className={classes.duration}>
          {dayjs(data?.createdDate).format(DATE_FORMAT)} - {dayjs(data?.toDate).format(DATE_FORMAT)} ({' '}
          {calculateRemainingTime(data?.toDate)} left){' '}
        </Box>
        <CardCollapse />
      </Box>
      <ButtonPrimary
        variant="contained"
        title={'Update'}
        styled={{
          backgroundColor: '#7259EE',
          marginRight: '10px',
          marginTop: '24px',
        }}
      />
    </Box>
  );
}

export default Info;
