import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

import TabsValidate from 'components/TabsMCV/TabsValidate';
import SendCaMake from '../SendCaMake';
import FeedbackCpn from '../packages/FeedbackCpn';
import SliderResult from '../packages/SliderReuslt';

function ValidateResults() {
  const { isOpenShowMessageSubmit } = useSelector((state: RootState) => state.toob);
  const { isCountSlide } = useSelector((state: RootState) => state.toob);
  const [value, setValue] = React.useState(0);
  return (
    <>
      <Typography fontSize="16px" fontWeight="600" paddingBottom={'10px'} paddingTop={'20px'}>
        Results({isCountSlide}/2 revirewed)
      </Typography>
      <SliderResult />
      {isOpenShowMessageSubmit && <SendCaMake />}
      <Box display={'flex'} justifyContent={'center'}>
        <TabsValidate value={value} setValue={setValue} />
      </Box>
      {
        {
          Validator: 0,
          Checker: <FeedbackCpn />,
        }[value]
      }
    </>
  );
}

export default ValidateResults;
