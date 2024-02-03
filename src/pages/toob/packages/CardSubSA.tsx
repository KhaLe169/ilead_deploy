import { Avatar, Box, Card, Checkbox, Typography } from '@mui/material';

type Props = {};
function CardSubSA(props: Props) {
  return (
    <Card>
      {Array.from(Array(2).keys()).map((item) => (
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'} gap={5} padding={2.5}>
          <span>
            <Checkbox style={{ padding: 0 }} />
            <span style={{ fontSize: '14px', color: '#B5B3DB' }}>Define business criteria </span>
            <Box display={'flex'} gap={1} alignItems={'center'}>
              <Avatar
                alt="avatar"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                sx={{ width: 20, height: 20, marginLeft: '25px' }}
              />
              <Typography fontSize="10px" fontWeight="600" color={'#B5B3DB'}>
                Nguyen Pham Hong (Brandcare-IPA-Group)
              </Typography>
            </Box>
          </span>
          <Typography color={'#D08D30'} fontSize={'11px'}>
            Today
          </Typography>
        </Box>
      ))}
    </Card>
  );
}

export default CardSubSA;
