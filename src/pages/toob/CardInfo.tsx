import { BoxFlex } from 'components/Box/BoxFlex';
import { SliderCustom } from 'components/Slider/SliderCustom';
import colors from 'theme/colors';
import { Grid } from '@mui/material';
import { Box, Card, CardHeader, Divider, Slider, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';

const Container = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  justify-content: space-between;
`;

const ContentOutput = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  align-self: stretch;
`;

function CardInfo() {
  return (
    <Container>
      <Card className="w-full">
        <CardHeader title="Output tracker" />
        <Divider />
        <ContentOutput>
          {Array.from(Array(4).keys()).map((item) => (
            <Box>
              <Box padding="12px">
                <Grid container>
                  <Grid item xs={6}>
                    <Typography fontSize="16px" fontWeight={'600'} color={colors.primary}>
                      UX Design
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <SliderCustom bgSegment='#4F4EA6' min={0} max={100} value={90} />
                  </Grid>
                </Grid>
              </Box>
              <Divider />
            </Box>
          ))}
        </ContentOutput>
      </Card>
      <Card>
        <CardHeader title="Overdue SA" />
        <Divider />
        <ContentOutput>
          {Array.from(Array(4).keys()).map((item) => (
            <Box padding="12px">
              <Grid container>
                <Grid xs={10}>
                  <BoxFlex gap={1} alignItems="flex-start" justifyContent={'flex-start'}>
                    <Checkbox />
                    <Box>
                      <Typography fontSize="14px" color={colors.primary}>
                        Define business criteria{' '}
                      </Typography>
                      <Typography fontSize={'10px'} color={'#B5B3DB'}>
                        Homefood / Secretary job
                      </Typography>
                    </Box>
                  </BoxFlex>
                </Grid>
                <Grid xs={2}>
                  <span style={{ color: 'red' }}>1 day ago</span>
                </Grid>
              </Grid>
            </Box>
          ))}
        </ContentOutput>
      </Card>
    </Container>
  );
}

export default CardInfo;

const StytedSlider = styled(Slider)`
  color: #4f4ea6 !important;
  width: 100%;
  height: 7px;
`;
