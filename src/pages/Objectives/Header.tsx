import React from 'react';
import ButtonPrimary from '../../components/Button/ButtonPrimary/ButtonPrimary';
import ButtonIcon from '../../components/ButtonIcon/ButtonIcon';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { openObjectivesRequest } from 'redux/objectives/action';

const HeaderTopStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
interface IProps {
  titleButton: string;
}

export default function Header({ titleButton }: IProps) {
  const dispatch = useDispatch();
  const handleOpen = () => {
    dispatch(openObjectivesRequest('start'));
  };

  return (
    <>
      <HeaderTopStyle>
        <ButtonPrimary
          onClick={handleOpen}
          variant="contained"
          startIcon="ep:video-play"
          title={titleButton}
          styled={{
            backgroundColor: '#7259EE',
            marginRight: '10px',
          }}
        />
        {/* <ButtonIcon
          icon="ep:more"
          styled={{
            backgroundColor: '#fff',
            padding: '10px',
            minWidth: 'max-content',
            fontSize: '22px',
          }}
        /> */}
      </HeaderTopStyle>
    </>
  );
}
