import { Typography } from '@mui/material';
import { useStyles } from './styles';
import { Avatar, AvatarGroup, Box } from '@mui/material';

export default function Raci() {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.session}>
        <Typography className={styles.text}>Biz Sponsor (Responsible)</Typography>
        <Avatar className={styles.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
      <Box className={styles.session}>
        <Typography className={styles.text}>Biz Owner (Accountable)</Typography>
        <Avatar className={styles.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
      <Box className={styles.session}>
        <Typography className={styles.text}>Consultant</Typography>
        <Avatar className={styles.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </Box>
      <Box className={styles.session}>
        <Typography className={styles.text}>SOI</Typography>
        <AvatarGroup sx={{ justifyContent: 'flex-end' }} max={3}>
          <Avatar className={styles.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar className={styles.avatar} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar className={styles.avatar} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar className={styles.avatar} alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar className={styles.avatar} alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
    </>
  );
}
