import { Card, Typography, styled } from '@mui/material';

const CardStyled = styled(Card)`
  border-radius: 8px;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  display: flex;
  padding: 12px;
`;

export const IpamReportCard = () => {
  return (
    <CardStyled style={{ background: '#F8F8FC' }}>
      <div>
        <Typography fontSize="16px" fontWeight="600">
          1st revision
        </Typography>
        <Typography fontSize="14px" fontWeight="600" color={'#B5B3DB'}>
          Adding new TOOB into the objective
        </Typography>
        <Typography fontSize="14px" fontWeight="600" color={'#B5B3DB'}>
          Dec 13, 2023
        </Typography>
      </div>
      <img src="/info-icon/document.svg" alt="" />
    </CardStyled>
  );
};
