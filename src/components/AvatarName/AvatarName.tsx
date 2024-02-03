import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const UserAvatar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));
interface IProps {
  name: string;
}

export default function AvatarName({ name }: IProps) {
  return (
    <UserAvatar>
      <Box
        component="img"
        sx={{ width: 20, height: 20, borderRadius: 99, marginRight: '5px' }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Typography sx={{ fontSize: 10 }} color="text.secondary">
        {name}
      </Typography>
    </UserAvatar>
  );
}
