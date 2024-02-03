import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Button, MenuItem, Typography } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import styled from 'styled-components';

import BoxAvatar from '../packages/BoxAvatar';
import CardDescriptionMake from '../packages/CardDescriptionMake';
import CardSubSA from '../packages/CardSubSA';
import ModalFinishResults from '../packages/ModalFinishResults';
import IpamReportInfo from '../toobInfo/IpamReportInfo';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


function MakeScreen() {
  const classes = useStyles();
  const { dataSA } = useSelector((state: RootState) => state.toob);

  const [open, setOpen] = useState(false);

  const handleChange = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    if (value === 'Submited') {
      setOpen(true);
    }
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        flexDirection={'column'}
        width="100%"
      >
        <Typography fontSize="20px" fontWeight="800">
          {dataSA?.actViews?.[0]?.name}
        </Typography>
        <BoxAvatar dataSA={dataSA} />
        <Typography fontSize="14px" fontWeight="600" lineHeight={'34px'}>
          Status
        </Typography>
        <Select style={{ width: '50%' }} defaultValue={'10'} className={classes.root} onChange={handleChange}>
          <MenuItem value={10}>
            <Box display={'flex'}>
              <img src="/info-icon/todo.svg" alt="" style={{ paddingRight: '15px' }} />
              <span>To do </span>
            </Box>
          </MenuItem>
          <MenuItem value={11}>
            <Box display={'flex'}>
              <img src="/info-icon/doing.svg" alt="" style={{ paddingRight: '15px' }} />
              <span>Doing</span>
            </Box>
          </MenuItem>
          <MenuItem value={'Submited'}>
            <Box display={'flex'}>
              <VisibilityIcon style={{ color: '#754ea6', marginRight: '10px' }} />
              <span>Submited</span>
            </Box>
          </MenuItem>
        </Select>
        <ModalFinishResults open={open} onClose={onClose} />

        {dataSA?.actViews?.[0]?.note && <CardDescriptionMake note={dataSA.actViews?.[0]?.note} />}
        <Typography fontSize="14px" fontWeight="600" paddingTop={'10px'} paddingBottom={'10px'}>
          IPAM report
        </Typography>

        <IpamReportInfo />
        <Button
          variant="outlined"
          color="primary"
          startIcon={<img src="/info-icon/attach.svg" alt="" />}
          style={{
            width: 'max-content',
            marginTop: '20px',
          }}
          component="label"
        >
          Attach report
          <VisuallyHiddenInput type="file" />
        </Button>

        <Typography fontSize="14px" fontWeight="600" paddingTop={'10px'} paddingBottom={'10px'}>
          Sub-SA
        </Typography>

        <CardSubSA />

        <Box display={'flex'} gap={2}>
          <ButtonReject
            disabled
            variant="outlined"
            color="primary"
            startIcon={<img src="/info-icon/reject.svg" alt="" />}
          >
            Reject SA
          </ButtonReject>
          <ButtonSubmit
            variant="outlined"
            color="primary"
            onClick={() => {
              setOpen(true);
            }}
          >
            Submit SA
          </ButtonSubmit>
        </Box>
      </Box>
    </>
  );
}

export default MakeScreen;


const useStyles = makeStyles({
  root: {
    backgroundColor: '#F1EEFD',
    // color: (props) => props.color,
    borderRadius: '35px',
    height: '35px',
  },
});

const ButtonReject = styled(Button)`
  width: max-content;
  margin-top: 20px;
  color: red;
  background: #ffedeb;
  border: 1px solid red;
  border-radius: 30px;
`;
const ButtonSubmit = styled(Button)`
  width: max-content;
  margin-top: 20px;
  color: #4ea34e;
  background: #faf9f9;
  border: 1px solid #4ea34e;
  border-radius: 30px;
`;
