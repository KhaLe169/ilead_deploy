import colors from 'theme/colors';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  text: {
    fontSize: '14px',
    fontWeight: 700,
    color: colors.black10,
    marginBottom: '12px',
  },
  divider: {
    margin: '32px 0px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));
