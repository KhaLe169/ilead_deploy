import colors from 'theme/colors';
import { AccountCircle } from '@mui/icons-material';
import { Box, Chip, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

// type Props = {};

const useStyles = makeStyles(() => ({
  avatar: {
    width: 35,
    height: 35,
  },
  container: {
    display: 'flex',
    width: '100%',
  },
  checking: {
    padding: 2,
    backgroundColor: colors.blue2,
    borderRadius: 10,
  },
  checkingText: {
    color: colors.blue7,
    fontWeight: 600,
  },
  colorPrimary: {
    color: colors.primary,
    fontWeight: 700,
  },
  requestChange: {
    padding: 2,
    backgroundColor: colors.orange2,
    borderRadius: 10,
  },
  requestChangeText: {
    color: colors['--orange-7'],
    fontWeight: 600,
  },
  checked: {
    padding: 2,
    backgroundColor: colors.green2,
    borderRadius: 10,
  },
  checkedText: {
    color: colors.green7,
    fontWeight: 600,
  },
  rejected: {
    padding: 2,
    backgroundColor: colors.red2,
    borderRadius: 10,
  },
  rejectedText: {
    color: colors.red7,
    fontWeight: 600,
  },
}));

function Checkers() {
  const styles = useStyles();
  return (
    <Box padding={0}>
      {/* CHECKING */}
      <Grid container>
        <Grid item xs={2} display={'flex'} alignItems={'center'}>
          <AccountCircle className={styles.avatar} />
        </Grid>
        <Grid item xs={10} display={'flex'} alignItems={'center'}>
          <Typography variant="subtitle1" className={styles.colorPrimary}>
            {'Nguyen Pham Dinh OPTIK'}
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Chip
            className={styles.checking}
            label={<Typography className={styles.checkingText}>{'CHECKING'}</Typography>}
          />
        </Grid>
      </Grid>
      {/* REQUESTCHANGE */}
      <Grid container>
        <Grid item xs={2} display={'flex'} alignItems={'center'}>
          <AccountCircle className={styles.avatar} />
        </Grid>
        <Grid item xs={10} display={'flex'} alignItems={'center'}>
          <Typography variant="subtitle1" className={styles.colorPrimary}>
            {'Phạm Nguyên Hùng'}
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Chip
            className={styles.requestChange}
            label={<Typography className={styles.requestChangeText}>{'REQUEST CHANGE'}</Typography>}
          />
        </Grid>
      </Grid>
      {/* CHECKED */}
      <Grid container>
        <Grid item xs={2} display={'flex'} alignItems={'center'}>
          <AccountCircle className={styles.avatar} />
        </Grid>
        <Grid item xs={10} display={'flex'} alignItems={'center'}>
          <Typography variant="subtitle1" className={styles.colorPrimary}>
            {'Động Đình Chi Thanh Phương Dlink'}
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Chip
            className={styles.checked}
            label={<Typography className={styles.checkedText}>{'CHECKED'}</Typography>}
          />
        </Grid>
      </Grid>
      {/* REJECTED */}
      <Grid container>
        <Grid item xs={2} display={'flex'} alignItems={'center'}>
          <AccountCircle className={styles.avatar} />
        </Grid>
        <Grid item xs={10} display={'flex'} alignItems={'center'}>
          <Typography variant="subtitle1" className={styles.colorPrimary}>
            {'You'}
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Chip
            className={styles.rejected}
            label={<Typography className={styles.rejectedText}>{'REJECTED'}</Typography>}
          />
        </Grid>
      </Grid>
      {/* REJECTED */}
      <Grid container sx={{ opacity: 0.4 }}>
        <Grid item xs={2} display={'flex'} alignItems={'center'}>
          <AccountCircle className={styles.avatar} />
        </Grid>
        <Grid item xs={10} display={'flex'} alignItems={'center'}>
          <Typography variant="subtitle1" className={styles.colorPrimary}>
            {'You'}
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Chip
            className={styles.rejected}
            label={<Typography className={styles.rejectedText}>{'REJECTED'}</Typography>}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Checkers;
