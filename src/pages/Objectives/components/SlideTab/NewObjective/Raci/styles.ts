import colors from 'theme/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  session: {
    marginBottom: '32px',
  },
  avatar: {
    width: '30px',
    height: '30px',
  },
  text: {
    fontSize: '14px',
    fontWeight: 700,
    color: colors.black10,
    marginBottom: '12px',
  },
}));
