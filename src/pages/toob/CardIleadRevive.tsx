import { ToobDetalModel } from 'types/toob.interface';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import { DATE_FORMAT } from 'constants';
import colors from 'theme/colors';
import { calculateRemainingTime } from 'utils/common';
import { Avatar, Box, Button, Slider, Typography } from '@mui/material';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { IpamReportCard } from './packages/IpamReportInfo';


const IpamReportInfoWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
`;

type Props = {
  data: ToobDetalModel;
}

function CardIleadRevive({ data }: Props) {
  const { actIpams, acts } = data;
  return (
    <CardWrapper>
      <Box display={'flex'} gap={1} alignItems={'center'}>
        <Avatar alt="avatar" src="https://material-ui.com/static/images/avatar/1.jpg" sizes="32px" />
        <Typography fontSize="14px" fontWeight="600" color={'#B5B3DB'}>
          Nguyen Pham Hong (Brandcare-IPA-Group)
        </Typography>
      </Box>
      {/* <div style={{ paddingTop: '20px' }}>
        Duration
        <div style={{ color: '#B5B3DB' }}>{dayjs(createdDate).format(DATE_FORMAT)} - {dayjs(toDate).format(DATE_FORMAT)} ( {calculateRemainingTime(toDate)} left) </div>
      </div> */}
      <div>
        Progress
        <StytedSlider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" disabled />
      </div>
      <ButtonPrimary variant="outlined" startIcon="material-symbols-light:edit-outline" title="Edit Toob" />
      <div>IPAM Reports</div>

      <IpamReportInfoWrapper>
        {actIpams.map((_, index) => (
          <IpamReportCard key={index} />
        ))}
      </IpamReportInfoWrapper>

      <Box display={'flex'} justifyContent={'space-between'}>
        <Button variant="contained">Update</Button>
        <Button variant="outlined">View all versions</Button>
      </Box>
    </CardWrapper>
  );
}

export default CardIleadRevive;

const StytedSlider = styled(Slider)`
  color: ${colors.primary} !important;
  height: 7px;
`;

const CardWrapper = styled(Box)`
  display: flex;
  gap: 24px;
  padding: 12px;
  flex-direction: column;
  width: 100%;
`;
