import Card from '@mui/material/Card';
import { CardContent, Divider, Typography } from '@mui/material';
import { useStyles } from './styles';
import ItemToobs from '../ItemToobs/ItemToobs';
import AvatarName from 'components/AvatarName/AvatarName';
import LinearProcess from 'components/LinearProcess/LinearProcess';

import { useDispatch } from 'react-redux';
import { getToobByObjectiveRequest } from 'redux/objectives/action';
import { useEffect } from 'react';

interface IProps {
  data: any;
}

const dataItemToob = {
  acts: [
    {
      accountable: 'Binh Nguyen',
      actId: '5400d0d2-5a61-4945-9362-0f95fdd37764',
      createdDate: '2024-01-24T02:06:00.000+00:00',
      createdUserId: '1f63824e-a9f6-11ee-98ce-544810e80f4b',
      createdUserName: 'Binh Nguyen',
      id: 'c20cb3af-ac5c-4af1-8303-59dbca30f7b7',
      name: 'Toob test',
      onum: 1,
      sentDate: null,
      sosSoi: 'sa.test1 null',
      statep: '0',
      statepName: 'Chưa gửi',
      stateuName: null,
      toDate: '2024-01-15T17:00:00.000+00:00',
      toDateString: '2024/01/16',
      validator: 'objective.test1 null',
    },
  ],
  totalPage: 1,
};
export default function ItemObjectives({ data }: IProps) {
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const payload = { userType: '', actId: data.id, statep: data.statep, pageNumber: 1, rowsPerPage: 1 };
    dispatch(
      getToobByObjectiveRequest(
        payload,
        (response) => {
          console.log('response', response);
        },
        (error) => {
          console.log('err', error);
        },
      ),
    );
  }, [data]);

  return (
    <Card sx={{ borderRadius: '6px' }}>
      <CardContent sx={{ p: '12px' }}>
        <Typography sx={{ fontSize: 11 }} color="text.secondary">
          {data.ipamName}
        </Typography>

        <div className={styles.mainText}>
          <Typography sx={{ width: '80%' }} variant="h4" color="primary.main">
            {data.name}
          </Typography>
          <Typography sx={{ fontSize: 13 }} color="primary.main">
            2d Left
          </Typography>
        </div>
        <AvatarName />
      </CardContent>

      <LinearProcess />

      <CardContent sx={{ p: '12px' }}>
        <Typography className={styles.toobs}>4 TOOBs</Typography>
      </CardContent>

      {dataItemToob.acts.map((e, i) => (
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
