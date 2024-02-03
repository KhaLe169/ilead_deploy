import colors from 'theme/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  headerText: {
    fontSize: '16px',
    fontWeight: 800,
    color: colors.black10,
    marginBottom: '12px',
  },
  text: {
    fontSize: '14px',
    fontWeight: 600,
    color: colors.black10,
    marginRight: '5px',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
}));
