import { BoxFlex } from 'components/Box/BoxFlex';
import colors from 'theme/colors';
import { Avatar, Box, Divider, Grid, Slider, Typography } from '@mui/material';
import styled from 'styled-components';

type Props = {}

const StytedSlider = styled(Slider)`
  color: #4f4ea6 !important;
  width: 100%;
`;

const AvatarStyled = styled(Avatar)`
  width: 24px;
  height: 24px;
`;

const MemberList = (props: Props) => {
  return (
    <>
      {
        Array.from(Array(4).keys()).map((item) => (
          <Box>
            <Box padding="12px">
              <Grid container>
                <Grid item xs={6}>
                  <BoxFlex>
                    <AvatarStyled alt="avatar" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Typography fontSize="16px" fontWeight={'600'} color={colors.primary}>
                      UX Design
                    </Typography>
                  </BoxFlex>
                </Grid>
                <Grid item xs={6}>
                  <StytedSlider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                </Grid>
              </Grid>
            </Box>
            <Divider />
          </Box>
        ))
      }
    </>

  )
}

export default MemberList