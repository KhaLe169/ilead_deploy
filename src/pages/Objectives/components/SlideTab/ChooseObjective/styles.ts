import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: '16px',
    top: '24px',
  },
  headerText: {
    paddingLeft: '24px',
    fontSize: '14px',
    fontWeight: 600,
    position: 'absolute',
    top: '35px',
  },
}));
