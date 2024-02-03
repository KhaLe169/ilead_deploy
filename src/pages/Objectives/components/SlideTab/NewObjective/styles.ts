import colors from 'theme/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: '16px',
    top: '24px',
  },
  headerText: {
    fontSize: '28px',
    fontWeight: '800',
    color: colors.black5,
    paddingBottom: '30px',
    marginBottom: '16px',
    width: '100%',
  },
}));
