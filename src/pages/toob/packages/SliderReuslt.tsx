import { useDispatch } from 'react-redux';
import { COUNT_SLIDE_REQUEST } from 'redux/toob/actionTypes';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardView from '../CardView';
import ButtonSlider from '../MCVScreen/ButtonSlider';

const CustomSlide = styled(SwiperSlide)`
  text-align: center;
`;
const CustomSwiper = styled(Swiper)`
  .swiper-wrapper {
    width: 10px;
  }
  --swiper-navigation-size: 20px;
  --swiper-theme-color: black;
`;

function SliderResult() {
  const dispatch = useDispatch();

  return (
    <div>
      <CustomSwiper
        modules={[Navigation]}
        className="mySwiper"
        onSlideChange={(e) => dispatch({ type: COUNT_SLIDE_REQUEST, payload: e?.realIndex + 1 })}
      >
        <CustomSlide>
          <CardView />
        </CustomSlide>
        <CustomSlide>Slide 2</CustomSlide>
        <CustomSlide>Slide 3</CustomSlide>
        <CustomSlide>Slide 4</CustomSlide>
        <CustomSlide>Slide 5</CustomSlide>
        <CustomSlide>Slide 6</CustomSlide>
        <CustomSlide>Slide 7</CustomSlide>
        <CustomSlide>Slide 8</CustomSlide>
        <CustomSlide>Slide 9</CustomSlide>
        <ButtonSlider />
      </CustomSwiper>
    </div>
  );
}

export default SliderResult;
