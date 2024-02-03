import { BorderColor, Margin } from '@mui/icons-material';
import { Box, Theme, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import mailbox from 'static/img/mailbox.svg';
import CardCollapse from './components/cardCollapse/CardCollapse';
import colors from 'theme/colors';
type Props = {};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: '22px 14px',
  },
  titleMailBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  numberMail: {
    backgroundColor: colors.red,
    marginLeft: theme.spacing(1),
    borderRadius: 30,
    padding: theme.spacing(0.2, 1),
    fontSize: 13,
    color: theme.palette.common.white,
  },
}));

function ChatBox({ }: Props) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <img src={mailbox} alt="mailbox" />
        <Box className={classes.titleMailBox}>
          <Typography variant="h5">YOUR INBOX</Typography>
          <Typography className={classes.numberMail}>20</Typography>
        </Box>
        <Typography marginTop={1}>Let’s catch up</Typography>
        <ButtonPrimary
          variant="contained"
          title="Clear all"
          styled={{ backgroundColor: 'primary.lighter', BorderColor: 'red', marginTop: 2 }}
        />
      </Box>
      <Box marginTop={2}>
        <CardCollapse />
      </Box>
    </Box>
  );
}

export default ChatBox;
