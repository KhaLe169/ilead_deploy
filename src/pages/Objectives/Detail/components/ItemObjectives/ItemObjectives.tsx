import Card from '@mui/material/Card';
import { CardContent, Divider, Typography } from '@mui/material';
import { useStyles } from './styles';
import AvatarName from 'components/AvatarName/AvatarName';
import LinearProcess from 'components/LinearProcess/LinearProcess';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { getDetailToobRequest, getInfoOutputRequest } from 'redux/objectives/action';
import ItemToobs from '../ItemToobs/ItemToobs';

interface IProps {
  data: any;
}

export default function ItemObjectives({ data }: IProps) {
  const styles = useStyles();
  const dispatch = useDispatch();
  const [dataOutput, setDataOutput] = useState<any>([]);
  console.log('data', data);

  useEffect(() => {
    const payload = { id: data.id };
    dispatch(
      getInfoOutputRequest(
        payload,
        (response) => {
          console.log('response', response);
          setDataOutput(response);
        },
        (error) => {
          console.log('err', error);
        },
      ),
    );
  }, [data.id]);

  return (
    <Card sx={{ borderRadius: '6px' }}>
      <CardContent sx={{ p: '12px' }}>
        <Typography sx={{ fontSize: 11 }} color="text.secondary">
          {data?.ipamName}
        </Typography>

        <div className={styles.mainText}>
          <Typography sx={{ width: '80%' }} variant="h4" color="primary.main">
            {data?.name}
          </Typography>
          <Typography sx={{ fontSize: 13 }} color="primary.main">
            2d Left
          </Typography>
        </div>
        <AvatarName name={data.accountable} />
      </CardContent>

      <LinearProcess />

      <CardContent sx={{ p: '12px' }}>
        <Typography className={styles.toobs}>{dataOutput?.actUsers && dataOutput?.actUsers.length} Outputs</Typography>
      </CardContent>

      {dataOutput?.actUsers &&
        dataOutput.actUsers.map((e, i) => (
          <>
            <Divider />
            <CardContent key={i.toString()} sx={{ p: '12px' }}>
              <ItemToobs data={e} />
            </CardContent>
          </>
        ))}
    </Card>
  );
}
