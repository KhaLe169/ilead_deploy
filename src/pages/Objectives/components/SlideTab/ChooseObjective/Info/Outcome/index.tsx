import { useState } from 'react';
import { useStyles } from './styles';
import colors from 'theme/colors';
import { Box, CardActions, Collapse, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Report from 'components/FileReport/Report';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface IProps {
  tabText: string;
  data: any;
}

export default function OutCome({ tabText, data }: IProps) {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const styles = useStyles();
  return (
    <>
      <CardActions
        onClick={handleExpandClick}
        sx={{
          border: `1px solid ${colors.black6_10}`,
          borderRadius: '10px',
          marginTop: '32px',
        }}
        disableSpacing
      >
        <Typography className={styles.textCollapse}>{tabText}</Typography>
        <ExpandMore expand={expanded} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box className={styles.formItem}>
          {data?.map((e: any, i: any) => (
            <Box key={e.id.toString()}>
              <Typography className={styles.mainText}>{e.mainText}</Typography>
              <Box className={styles.detailItem}>
                <Typography className={styles.textDetail}>{e.text}</Typography>
                <Report mainText="Report" link="https://docs.google.com/files/dwj19-29kvn-cakw2" />
              </Box>
            </Box>
          ))}
        </Box>
      </Collapse>
    </>
  );
}
