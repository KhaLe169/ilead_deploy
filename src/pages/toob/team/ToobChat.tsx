import SearchInput from 'components/Search/SearchInput';
import { Box, Card, Typography } from '@mui/material';
import styled from 'styled-components';

type Props = {};

const CardWrapper = styled(Card)`
  border-radius: 16px;
  height: 100vh;
`;

const BoxHeader = styled(Box)`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  box-shadow:
    0px 0px 0px 1px #d5d5eb,
    0px 2px 4px 0px var(--black-65, rgba(79, 78, 166, 0.05)),
    0px 8px 8px -4px var(--black-65, rgba(79, 78, 166, 0.05));
`;

const BoxFooter = styled(Box)`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  box-shadow:
    0px 0px 0px 1px #d5d5eb,
    0px 2px 4px 0px var(--black-65, rgba(79, 78, 166, 0.05)),
    0px 8px 8px -4px var(--black-65, rgba(79, 78, 166, 0.05));
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ToobChat = (props: Props) => {
  return (
    <CardWrapper>
      {/* <CardHeaderStyled title="Toob Chat" /> */}
      <BoxHeader>
        <Box sx={{ flexGrow: 1 }}>
          <Typography fontSize="22px" fontWeight="800" lineHeight="24px">
            {' '}
            TOOB Chat{' '}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <SearchInput />
        </Box>
        <img src="/src/static/icons/attatchment.svg" />
      </BoxHeader>
      <BoxFooter>
        <img src="/src/static/icons/microphone.svg" />
        <Box sx={{ flexGrow: 1 }}>
          <SearchInput />
        </Box>
        <img src="/src/static/icons/microphone.svg" />
      </BoxFooter>
    </CardWrapper>
  );
};

export default ToobChat;
