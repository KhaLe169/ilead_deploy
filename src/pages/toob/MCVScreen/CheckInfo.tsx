import { Button, Typography } from '@mui/material';
import styled from 'styled-components';
import CardDescription from '../packages/CardDescription';
import CardSubSA from '../packages/CardSubSA';
import IpamReportInfo from '../toobInfo/IpamReportInfo';

const ButtonReject = styled(Button)`
  width: max-content;
  margin-top: 20px;
  color: red;
  background: #ffedeb;
  border: 1px solid red;
  border-radius: 30px;
`;

function CheckInfo() {
  return (
    <div style={{ height: '100%' }}>
      <Typography fontSize="14px" fontWeight="600" lineHeight={'34px'}>
        Description
      </Typography>
      <CardDescription />
      <Typography fontSize="14px" fontWeight="600" paddingTop={'10px'} paddingBottom={'10px'}>
        IPAM report
      </Typography>
      <IpamReportInfo />
      <Button
        variant="outlined"
        color="primary"
        startIcon={<img src="/info-icon/attach.svg" alt="" />}
        style={{
          width: 'max-content',
          marginTop: '20px',
        }}
      >
        Attach report
      </Button>
      <Typography fontSize="14px" fontWeight="600" paddingTop={'10px'} paddingBottom={'10px'}>
        Sub-SA
      </Typography>
      <CardSubSA />
      <ButtonReject variant="outlined" color="primary" startIcon={<img src="/info-icon/delete.svg" alt="" />}>
        Delete this SA
      </ButtonReject>
    </div>
  );
}

export default CheckInfo;