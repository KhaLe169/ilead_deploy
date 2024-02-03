import { Box, Card, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import React from 'react';

type Props = {};
function IpamReportInfo(props: Props) {
  return (
    <div>
      <Grid gap={2} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {Array.from(Array(1).keys()).map((item) => (
          <Grid xs={2}>
            <Card style={{ background: '#F8F8FC' }}>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} padding={'5px'}>
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
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default IpamReportInfo;
