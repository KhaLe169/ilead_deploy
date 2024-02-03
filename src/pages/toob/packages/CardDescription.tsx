import { Button, Card, Typography } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import IpamReportInfo from '../toobInfo/IpamReportInfo';

type Props = {};
function CardDescription(props: Props) {
  const [loadMore, setLoadMore] = useState<boolean>(false);
  return (
    <>
      <Card sx={{ height: loadMore ? 'max-content' : '300px', paddingBottom: '30px' }}>
        <div style={{ padding: '10px', overflow: 'hidden' }}>
          <Typography fontSize="14px" fontWeight="400" lineHeight={'20px'} paddingBottom={'10px'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi commodi iste libero quae aliquid facere quo,
            a hic temporibus vel culpa deleniti, id illo rem molestias nemo consectetur molestiae error?
          </Typography>
          <IpamReportInfo />
          <Typography fontSize="14px" fontWeight="400" lineHeight={'20px'} paddingTop={'10px'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi commodi iste libero quae aliquid facere quo,
            a hic temporibus vel culpa deleniti, id illo rem molestias nemo consectetur molestiae error?
          </Typography>
          <Typography fontSize="14px" fontWeight="400" lineHeight={'20px'} paddingTop={'10px'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi commodi iste libero quae aliquid facere quo,
            a hic temporibus vel culpa deleniti, id illo rem molestias nemo consectetur molestiae error?
          </Typography>
          <Typography fontSize="14px" fontWeight="400" lineHeight={'20px'} paddingTop={'10px'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi commodi iste libero quae aliquid facere quo,
            a hic temporibus vel culpa deleniti, id illo rem molestias nemo consectetur molestiae error?
          </Typography>
          <Typography fontSize="14px" fontWeight="400" lineHeight={'20px'} paddingTop={'10px'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi commodi iste libero quae aliquid facere quo,
            a hic temporibus vel culpa deleniti, id illo rem molestias nemo consectetur molestiae error? Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Animi commodi iste libero quae aliquid facere quo, a hic
            temporibus vel culpa deleniti, id illo rem molestias nemo consectetur molestiae error? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Animi commodi iste libero quae aliquid facere quo, a hic temporibus vel
            culpa deleniti, id illo rem molestias nemo consectetur molestiae error? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Animi commodi iste libero quae aliquid facere quo, a hic temporibus vel culpa
            deleniti, id illo rem molestias nemo consectetur molestiae error?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Animi commodi iste libero quae aliquid facere quo, a hic temporibus vel culpa deleniti, id
            illo rem molestias nemo consectetur molestiae error? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Animi commodi iste libero quae aliquid facere quo, a hic temporibus vel culpa deleniti, id illo rem
            molestias nemo consectetur molestiae error?
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

export default CardDescription;
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
