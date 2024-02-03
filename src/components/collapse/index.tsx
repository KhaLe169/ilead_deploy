import { Box, Divider, IconButton, IconButtonProps, Typography, styled, Collapse } from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

type Props = {
  children?: React.ReactNode;
  title?: string;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles(() => ({
  title: {
    padding: '10px 0px',
  },
  boxTitle: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #D5D5EB',
    padding: '10px 4px',
  },
  collapseContent: {
    padding: '10px 4px',
  },
}));

function CollapseNoCard({ children, title }: Props) {
  const styles = useStyles();
  const [expanded, setExpanded] = useState<boolean>(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Box className={styles.boxTitle}>
        <Typography className={styles.title}>{title}</Typography>
        <ExpandMore expand={expanded} aria-expanded={expanded} aria-label="show more" onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore>
      </Box>
      <Divider />
      <Collapse in={expanded} timeout="auto" unmountOnExit className={styles.collapseContent}>
        {children}
      </Collapse>
    </>
  );
}

export default CollapseNoCard;
