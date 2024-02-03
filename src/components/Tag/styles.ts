import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
  imgTag: {
    height: 20,
    width: 20,
    borderRadius: 99,
    marginRight: 5,
  },

  textTag: {
    fontSize: 12,
    fontWeight: 600,
  },

  tag: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '16px',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#EAEAF5',
    width: 'max-content',
    borderRadius: 99,
    padding: '4px 8px',
    marginRight: '8px',
  },
});
