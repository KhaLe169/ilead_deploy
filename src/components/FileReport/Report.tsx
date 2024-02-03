import { Icon } from '@iconify/react';
import { Box, Link, Typography } from '@mui/material';
import { useStyles } from './styles';

interface IProps {
  mainText: string;
  text?: string;
  link?: string;
  datetime?: string;
}

export default function Report({ mainText, text, datetime, link }: IProps) {
  const styles = useStyles();
  return (
    <Box className={styles.report}>
      <Box className={styles.reportLeft}>
        <Typography className={styles.textReport}>{mainText}</Typography>
        <Typography className={styles.link}>{text}</Typography>
        <Link href={link} underline="none" className={styles.link}>
          {link}
        </Link>
        <Typography className={styles.link}>{datetime}</Typography>
      </Box>
      <Box className={styles.icon}>
        <Icon color="#000" fontSize={24} icon="mynaui:file" />
      </Box>
    </Box>
  );
}
