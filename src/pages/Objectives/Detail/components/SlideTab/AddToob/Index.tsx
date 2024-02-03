import { Box, Theme, Input, Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import Output from './Output/Index';
import { dispatch } from 'redux/store';
import { closeObjectivesRequest, getToobByObjectiveRequest, postCreateToobsRequest } from 'redux/objectives/action';

type Props = {
  data: any;
};
interface userItem {
  value: number;
  label: string;
  role: string;
}
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
  },
}));

function AddToob({ data }: Props) {
  const classes = useStyles();
  const [dataAccountable, setDataAccountable] = useState<any>();
  const handleSubmit = (value: any) => {
    dispatch(
      postCreateToobsRequest(
        value,
        (response) => {
          (async () => {
            const dataToob = {
              userType: 'A',
              actId: '',
              statep: 0,
              pageNumber: 1,
              rowsPerPage: 20,
            };
            await dispatch(getToobByObjectiveRequest(dataToob));
            await dispatch(closeObjectivesRequest());
          })();

          return <Alert severity="success">Tạo thành công</Alert>;
        },
        (error) => {
          console.log('error', error);
          return <Alert severity="error">{error.Message}</Alert>;
        },
      ),
    );
  };

  useEffect(() => {
    if (data?.actUsers) {
      const newData = data?.actUsers.filter((el) => el.userType == 'A');
      setDataAccountable(...newData);
    }
  }, [data]);

  return (
    <Box className={classes.container}>
      <Output data={dataAccountable} handleSubmit={handleSubmit} />
    </Box>
  );
}

export default AddToob;
