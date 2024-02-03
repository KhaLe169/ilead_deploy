import { makeStyles } from '@mui/styles';
import colors from 'theme/colors';

export const useStyles = makeStyles(() => ({
  report: {
    padding: '12px',
    backgroundColor: colors.black6_10,
    borderRadius: '12px',
    display: 'flex',
    marginTop: '12px',
    justifyContent: 'space-between',
    border: `1px solid ${colors.black6_10}`,
    width: '100%',
  },
  textReport: {
    fontSize: '14px',
    fontWeight: 600,
    color: colors.black10,
    marginTop: '4px',
  },
  reportLeft: {
    width: '75%',
  },
  link: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: '100%',
    display: 'block',
    marginRight: '0px',
    fontSize: '11px',
    color: colors.black5,
    fontWeight: 600,
    marginTop: '4px',
  },
  icon: {
    padding: '8px',
    borderRadius: '10px',
    backgroundColor: colors.white,
    display: 'flex',
    alignSelf: 'center',
  },
}));
