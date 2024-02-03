import colors from 'theme/colors';
import { Box, Card, Typography } from '@mui/material';
import styled from 'styled-components';
type status = 'done' | 'create' | 'overdue' | 'due';

type Props = {
  type: status;
  count: number;
};

const cardType: {
  [key in status]: {
    iconPath: string;
    color: string;
    name: string;
  };
} = {
  done: {
    iconPath: '/src/static/icons/check-contained.svg',
    color: '#17A852',
    name: 'done',
  },

  create: {
    iconPath: '/src/static/icons/add-square.svg',
    color: '#614CCA',
    name: 'created',
  },
  overdue: {
    iconPath: '/src/static/icons/alert-triangle.svg',
    color: '#D93C2D',
    name: 'overdue',
  },
  due: {
    iconPath: '/src/static/icons/check-broken.svg',
    color: '#D08D30',
    name: 'due',
  },
};

const CardStyled = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  height: 72px;
`;

const CardBoard = ({ type, count }: Props) => {
  return (
    <CardStyled>
      <Box>
        <Typography fontSize="18px" fontWeight="800" lineHeight="20px" color={cardType[type].color}>
          {count} {cardType[type].name}
        </Typography>
        <Typography fontSize={'10px'} color={colors.primary}>
          in the last week
        </Typography>
      </Box>
      <img src={cardType[type].iconPath} alt="" />
    </CardStyled>
  );
};

export default CardBoard;
