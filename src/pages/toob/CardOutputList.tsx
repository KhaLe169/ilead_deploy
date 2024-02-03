import { Icon } from '@iconify/react';
import { Avatar, Box, Button, Card, Divider, Paper, Typography } from '@mui/material';
import { BoxFlex } from 'components/Box/BoxFlex';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import styled from 'styled-components';

const CardWrapper = styled(Card)`
  border-radius: 16px;
  border: 1px solid #d5d5eb;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PaperWrapper = styled(Paper)`
  padding: 0.75rem;
`;

const ButtonEditList = styled(Button)`
  border-radius: 100px;
  padding: 10px 16px;
`;

type Props = {};

const CardOutputList = (props: Props) => {
  return (
    <Box gap={3} display="flex" flexDirection="column">
      {Array.from(Array(2).keys()).map((item) => (
        <Box display={'flex'} flexDirection={'column'} gap={1}>
          <Typography fontWeight={'600'} paddingLeft={'1rem'} paddingRight={'1rem'}>
            Priority
          </Typography>
          <CardWrapper>
            {Array.from(Array(3).keys()).map((item) => (
              <>
                <PaperWrapper elevation={0} sx={{ backgroundColor: '#fff' }}>
                  <Typography color="#4F4EA6" fontSize={'16px'} fontWeight={'600'} lineHeight={'24px'}>
                    UX Design
                  </Typography>
                  <Box display={'flex'} gap={1} alignItems={'center'}>
                    <Avatar alt="avatar" src="https://material-ui.com/static/images/avatar/1.jpg" sizes="32px" />
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum.
                    </Typography>
                  </Box>
                </PaperWrapper>
                <Divider />
              </>
            ))}
          </CardWrapper>
        </Box>
      ))}
      <BoxFlex justifyContent={'space-between'}>
        <ButtonPrimary variant="contained" startIcon="tabler:plus" key="new output" title="New output" />
        <ButtonEditList
          variant="outlined"
          startIcon={<Icon icon="material-symbols-light:edit-outline" />}
          key="edit list"
        >
          Edit list
        </ButtonEditList>
      </BoxFlex>
    </Box>
  );
};

export default CardOutputList;
