import { BoxFlex } from 'components/Box/BoxFlex';
import { ButtonApprove, ButtonReject } from 'components/ButtonIcon/styles';
import { Avatar, Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

type Props = {}

const CardWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  border-radius: '16px';
`;

const CardAssignAccountable = (props: Props) => {
  return (
    <CardWrapper>
      <CardContent>
        <BoxFlex>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Box>
            <Typography fontSize="14px" fontWeight="500" lineHeight="20px">  </Typography>
            <span>assigned you to as accountable for output</span>
          </Box>
        </BoxFlex>
        <Typography fontSize={18} fontWeight="700" lineHeight="28px" color="#7259EE" marginLeft="3rem">Bussiness Analytis</Typography>
      </CardContent>
      <CardActions sx={{
        backgroundColor: '#F8F8FC',
        borderTop: '1px solid #EAEAF5',
      }}>
        <BoxFlex justifyContent={'center'} width={'100%'} gap="8px">
          <ButtonReject variant="outlined" color="primary" startIcon={<img src="/info-icon/reject.svg" alt="" />}>
            Reject
          </ButtonReject >
          <ButtonApprove variant="outlined" color="primary" startIcon={<img src="/info-icon/appove.svg" alt="" />}>
            Approve
          </ButtonApprove>
        </BoxFlex>
      </CardActions>

    </CardWrapper>
  )
}

export default CardAssignAccountable