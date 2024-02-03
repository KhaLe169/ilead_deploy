import { Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import IpamReportInfo from '../toobInfo/IpamReportInfo';

type Props = {
  note: string | null;
};
function CardDescriptionMake({ note }: Props) {
  const [loadMore, setLoadMore] = useState<boolean>(false);
  return (
    <>
      <Typography fontSize="14px" fontWeight="600" lineHeight={'34px'}>
        Description
      </Typography>
      <Card sx={{ height: loadMore ? 'max-content' : '300px', paddingBottom: '30px' }}>
        <div style={{ padding: '10px', overflow: 'hidden' }}>
          <Typography fontSize="14px" fontWeight="400" lineHeight={'20px'} paddingBottom={'10px'}>
            {note}
          </Typography>
        </div>
      </Card>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <ButtonRead
          // sx={{ position: 'absolute' }}
          variant="outlined"
          color="primary"
          onClick={() => {
            setLoadMore(!loadMore);
          }}
        >
          {loadMore ? ' Read less' : ' Read more'}
        </ButtonRead>
      </div>
    </>
  );
}

export default CardDescriptionMake;
// const CustomCard=styled(Card)`
// position:relative;
// `
const ButtonRead = styled(Button)`
  position: absolute;
  // transform: translateX(-50%)
  top: -20px;
  &:hover: {
    background-color: white;
  }
  width: max-content;
  background: white;
  border-radius: 30px;
`;
