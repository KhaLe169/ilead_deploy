import { BoxFlex } from 'components/Box/BoxFlex';
import { IconCustom } from 'components/ButtonIcon/Icon';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
// import Icon from '@iconify/react'
type Props = {}

const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;;
`;

const BoxHeader = styled(Box)`
padding: 24px;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
`;

const MemberComponent = (props: Props) => {
  const handleClick = () => {
    console.log('click')
  }


  return (
    <BoxContainer>
      <BoxHeader>
        <Typography fontSize="22px" fontWeight="800" lineHeight="24px" >
          Members
        </Typography>
        <BoxFlex gap={1}>
          <ButtonPrimary startIcon='mdi:user-add-outline' variant='contained' title='Add' />
          <IconCustom onClick={handleClick} icon='ion:search' />
          <IconCustom onClick={handleClick} icon='ion:filter' />
        </BoxFlex>
      </BoxHeader>
    </BoxContainer>
  )
}

export default MemberComponent