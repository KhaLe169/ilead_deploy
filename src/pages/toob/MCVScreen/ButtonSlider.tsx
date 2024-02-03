import { RootState } from 'redux/store';
import { CLOSE_CREATE_SA_REQUEST, SHOW_MASSAGE_SUBMIT_REQUEST } from 'redux/toob/actionTypes';
import { Box, Button, IconButton } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

function ButtonSlider() {
  const swiper = useSwiper();
  const dispatch = useDispatch();
  const disableRef = useRef(false);
  const { isCountSlide } = useSelector((state: RootState) => state.toob);
  const handlePrev = () => {
    swiper.slidePrev();
  };
  const handleApprove = () => {
    swiper.slideNext();
    disableRef.current = true;
    if (isCountSlide === 9) {
      dispatch({ type: CLOSE_CREATE_SA_REQUEST });
    }
  };

  // useEffect(() => {
  //   if (isCountSlide === 9) {
  //     console.log('object');
  //   }
  // }, [isCountSlide]);
  const handleNext = () => {
    disableRef.current = false;
    swiper.slideNext();
  };
  return (
    <div>
      <Box display={'flex'} justifyContent={'space-between'} padding={'15px'} width={'100%'}>
        <IconButton color="primary" onClick={handlePrev} disabled={disableRef.current}>
          <img src="/info-icon/next-left.svg" alt="" />
        </IconButton>

        <Box display={'flex'} justifyContent={'center'} padding={'15px'}>
          <ButtonReject
            variant="outlined"
            color="primary"
            startIcon={<img src="/info-icon/rejectMCV.svg" alt="" />}
            disabled
            onClick={() => {
              dispatch({ type: SHOW_MASSAGE_SUBMIT_REQUEST });
            }}
          >
            Reject SA
          </ButtonReject>
          <ButtonApprove
            variant="outlined"
            color="primary"
            startIcon={<img src="/info-icon/appove.svg" alt="" />}
            onClick={handleApprove}
          >
            Approve
          </ButtonApprove>
        </Box>
        <IconButton color="primary" onClick={handleNext}>
          <img src="/info-icon/next-right.svg" alt="" />
        </IconButton>
      </Box>
    </div>
  );
}

export default ButtonSlider;
const ButtonReject = styled(Button)`
  width: max-content;
  color: red;
  background: #ffedeb;
  border: 1px solid red;
  border-radius: 30px;
  padding: 7px;
  font-size: 12px;
`;
const ButtonApprove = styled(Button)`
  width: max-content;
  color: #7259ee;
  background: #f1eefd;
  border: 1px solid #7259ee;
  border-radius: 30px;
  padding: 7px;
  font-size: 12px;
  margin-left: 10px;
`;
