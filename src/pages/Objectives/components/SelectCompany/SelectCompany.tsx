import { CardContent, Card, Divider, Typography, Button, Box } from '@mui/material';

import { styled } from '@mui/material/styles';
import ListCompany from './ListCompany/ListCompany';
import { useEffect, useState } from 'react';
import SearchInput from 'components/Search/SearchInput';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import { useDispatch } from 'react-redux';
import { openObjectivesRequest } from 'redux/objectives/action';
import colors from 'theme/colors';

const BorderStyle = styled('div')(({ theme }) => ({
  border: `1px solid #D5D5EB`,
  borderRadius: '12px',
  marginTop: '24px',
  overflow: 'hidden',
}));

const ListComStyle = styled('div')(({ theme }) => ({
  '&:last-child .MuiDivider-root': {
    display: 'none',
  },
}));

const HeaderTopStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
}));

type IProps = {
  handleSelectCompany: (value: any) => void;
  handleChangeView: (value: string) => void;
  count: number;
};

const VIEW = {
  PENDING_OBJ: 'PENDING_OBJ',
  STARTED_OBJ: 'STARTED_OBJ',
};

export default function SelectCompany({ handleSelectCompany, handleChangeView, count }: IProps) {
  const [dataCom, setDataCom] = useState();
  const dispatch = useDispatch();
  const dataListCom = useSelector((state: RootState) => state.objectives.listCompany);

  useEffect(() => {
    setDataCom(dataListCom);
  }, [dataListCom]);

  const handleSelect = (value: any) => {
    handleSelectCompany(value);
    const newArr = dataListCom.map((e) => (e.id === value ? { ...e, active: true } : { ...e, active: false }));
    setDataCom(newArr);
  };
  const handleClick = () => {
    dispatch(openObjectivesRequest('create'));
  };
  console.log('count', count);
  return (
    <Card
      sx={{
        marginRight: '24px',
        width: '33%',
        height: '100%',
      }}
    >
      <CardContent>
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
          <Button
            variant="outlined"
            disabled={count < 1}
            title="Pending objectives"
            sx={{ borderRadius: 100, textWrap: 'nowrap', height: '40px' }}
            onClick={() => handleChangeView(VIEW.PENDING_OBJ)}
          >
            Pending objectives{' '}
            <Box
              sx={{
                width: '25px',
                height: '25px',
                flex: 1,
                marginLeft: '5px',
                padding: '3px 3px',
                borderRadius: '100%',
                backgroundColor: colors.red,
                color: colors.white,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {count}
            </Box>
          </Button>
        </HeaderTopStyle>
        <SearchInput />
        <BorderStyle>
          {dataCom &&
            dataCom?.map((e, i) => (
              <ListComStyle key={i.toString()}>
                <ListCompany data={e} handleSelect={handleSelect} />
                <Divider />
              </ListComStyle>
            ))}
        </BorderStyle>
      </CardContent>
    </Card>
  );
}
