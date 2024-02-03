import { Avatar, AvatarGroup, Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { DataSAType } from '../MCVScreen/TypeMCV';

type Props = {
  dataSA: DataSAType;
};

function BoxAvatar({ dataSA }: Props) {
  return (
    <Box display={'flex'} justifyContent={'space-around'} width="100%">
      <span>
        <Typography fontSize="14px" fontWeight="600">
          Human Resources
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography fontSize="14px" fontWeight="600" lineHeight={'34px'} paddingTop={'5px'}>
          Due date
        </Typography>
        <Typography fontSize="14px" fontWeight="600" lineHeight={'34px'} color={'#D08D30'}>
          {dayjs(dataSA?.actViews?.[0]?.toDateString).format('DD/MM/YYYY')}
        </Typography>
      </span>
      <span>
        <Typography fontSize="14px" fontWeight="600">
          SOI
        </Typography>
        {dataSA?.actViews?.[0]?.sosSoi}
        {/* <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </AvatarGroup> */}
        <Typography fontSize="14px" fontWeight="600" lineHeight={'34px'} paddingTop={'5px'}>
          Priority
        </Typography>
        <Typography fontSize="14px" fontWeight="600" lineHeight={'34px'} color={'#4F4EA6'}>
          {dataSA?.actViews?.[0]?.priorityName}
        </Typography>
      </span>
    </Box>
  );
}

export default BoxAvatar;
