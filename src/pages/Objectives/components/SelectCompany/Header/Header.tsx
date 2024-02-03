import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { openObjectivesRequest } from 'redux/objectives/action';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';

const HeaderTopStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
}));

export default function Header() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openObjectivesRequest('create'));
  };
  return (
    <HeaderTopStyle>
      <ButtonPrimary
        onClick={handleClick}
        variant="contained"
        startIcon="material-symbols-light:add"
        title="Create objective"
        styled={{
          backgroundColor: '#7259EE',
        }}
      />
      <ButtonPrimary variant="outlined" title="Pending objectives" />
    </HeaderTopStyle>
  );
}
