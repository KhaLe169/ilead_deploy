import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, CardActions, Collapse, Divider, Typography } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Report from 'components/FileReport/Report';
import Tag from 'components/Tag/Tag';
import { useState } from 'react';
import colors from 'theme/colors';
import OutCome from './Outcome';
import ButtonPrimary from 'components/Button/ButtonPrimary/ButtonPrimary';
import { useStyles } from '../styles';

const dataOutCome = [
  {
    id: 1,
    mainText: 'FCPL',
    text: 'It is believed that people wanted to have side auto-generated income stream. It is important for us to seize this chance to create new relationships with customers',
  },
  {
    id: 2,
    mainText: 'FCPL',
    text: 'It is believed that people wanted to have side auto-generated income stream. It is important for us to seize this chance to create new relationships with customers',
  },
  {
    id: 3,
    mainText: 'FCPL',
    text: 'It is believed that people wanted to have side auto-generated income stream. It is important for us to seize this chance to create new relationships with customers',
  },
];
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

type Props = {
  handleNext: () => void;
};

export default function Info({ handleNext }: Props) {
  const styles = useStyles();
  return (
    <>
      <div className={styles.flex}>
        <div>
          <Typography className={styles.text}>Company</Typography>
          <Tag logo="logoCom.png" title="VNDIRECT" />
        </div>
        <div>
          <Typography className={styles.text}>Map</Typography>
          <Tag title="Make" />
        </div>
      </div>
      <CardCollapse />
      <Divider className={styles.border} />
      <Box className={styles.IpamReport}>
        <Typography className={styles.IpamText}>IPAM report</Typography>
        <Report mainText="1st revision" text="Adding new TOOB into the objective" datetime="Dec 13, 2023" />
      </Box>
      <input style={{ display: 'none' }} id="raised-button-file" multiple type="file" />
      <label htmlFor="raised-button-file">
        <ButtonPrimary
          component="span"
          startIcon="ep:video-play"
          variant="outlined"
          title="attach report"
          styled={{ backgroundColor: 'primary.lighter', marginTop: 3, marginBottom: 5 }}
        />
      </label>
      <ButtonPrimary
        variant="contained"
        title="Next"
        styled={{
          backgroundColor: '#7259EE',
          display: 'block',
          position: 'absolute',
          bottom: 24,
          right: 24,
        }}
        onClick={handleNext}
      />
    </>
  );
}

const CardCollapse = () => {
  return (
    <div>
      <OutCome tabText="Outcome" data={dataOutCome} />
      <OutCome tabText="Business impact" data={dataOutCome} />
      <HumanResourceText />
    </div>
  );
};

const HumanResourceText = () => {
  const styles = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
        <Typography className={styles.textCollapse}>Human resource</Typography>
        <ExpandMore expand={expanded} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box className={[styles.formItem, styles.humanResource].join(' ')}>
          <Box>
            <Typography className={styles.key}>Budget</Typography>
            <Typography className={styles.value}>đ 13,000B</Typography>
          </Box>
          <Box>
            <Typography className={styles.key}>Workforce</Typography>
            <Typography className={styles.value}>200</Typography>
          </Box>
        </Box>
      </Collapse>
    </>
  );
};
