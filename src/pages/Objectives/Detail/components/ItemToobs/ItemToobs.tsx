import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './styles';

import CusCircularProgress from 'components/CircularProcess/CircularProcess';
import AvatarName from 'components/AvatarName/AvatarName';

interface IProps {
  data: any;
}

export default function ItemToobs({ data }: IProps) {
  const [circularProgress, setCircularProgress] = useState(30);
  const styles = useStyles();
  return (
    <>
      <div className={[styles.toobs, styles.flex].join(' ')}>
        <div className={styles.flex}>
          <CusCircularProgress value={circularProgress} />
          <Typography color="primary.main" className={styles.mainText}>
            {data.name}
          </Typography>
        </div>
        <Typography sx={{ fontSize: 13 }} color="primary.main">
          2d Left
        </Typography>
      </div>
      <div className={styles.flex}>
        <Typography color="primary.main" className={styles.circularProgressText}>
          {circularProgress}%
        </Typography>
        <AvatarName name="" />
      </div>
    </>
  );
}
