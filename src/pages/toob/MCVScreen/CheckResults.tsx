import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import FeedbackCpn from '../packages/FeedbackCpn';
import SliderReuslt from '../packages/SliderReuslt';
import SendCaMake from '../SendCaMake';

function CheckResults() {
  const { isCountSlide } = useSelector((state: RootState) => state.toob);
  return (
    <>
      <Typography fontSize="16px" fontWeight="600" paddingBottom={'10px'} paddingTop={'20px'}>
        Results({isCountSlide}/2 revirewed)
      </Typography>
      <SliderReuslt />
      <SendCaMake />

      <Typography fontSize="16px" fontWeight="600" paddingBottom={'10px'} paddingTop={'20px'}>
        Review(5/5)
      </Typography>
      <FeedbackCpn />
    </>
  );
}

export default CheckResults;
