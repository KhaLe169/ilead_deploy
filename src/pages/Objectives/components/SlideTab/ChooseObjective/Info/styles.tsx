import { makeStyles } from '@mui/styles';
import colors from 'theme/colors';

export const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 600,
    fontSize: '14px',
    color: '#101023',
  },
  textCollapse: {
    color: '#101023',
    fontWeight: 800,
    fontSize: '14px',
  },
  border: {
    margin: '32px 0',
  },
  formItem: {
    border: `1px solid ${colors.black6_10}`,
    borderTop: 0,
    padding: '10px',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  detailItem: {
    backgroundColor: colors.black6_5,
    border: `1px solid ${colors.black6_10}`,
    borderRadius: '8px',
    padding: '10px',
  },
  mainText: {
    color: colors.black10,
    fontWeight: 600,
    marginBottom: '12px',
  },
  textDetail: {
    color: colors.black6,
    fontSize: '14px',
    fontWeight: 600,
  },
  report: {
    padding: '12px',
    backgroundColor: colors.black6_10,
    borderRadius: '12px',
    display: 'flex',
    marginTop: '12px',
    justifyContent: 'space-between',
  },
  textReport: {
    fontSize: '14px',
    fontWeight: 600,
    color: colors.black10,
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
  },
  icon: {
    padding: '8px',
    borderRadius: '10px',
    backgroundColor: colors.white,
    display: 'flex',
    alignSelf: 'center',
  },
}));
