import { Button } from 'components/CustomStyle/Button';
import Editor from 'components/CustomStyle/Editor';
import Modal from 'components/CustomStyle/Modal';
import Select from 'components/CustomStyle/Select';
import { SWITCH_TABS_REQUEST } from 'redux/toob/actionTypes';
import { Stack, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';

type Props = {
  open: boolean;
  onClose: () => void;
};
function ModalFinishResults({ open, onClose }: Props) {
  const dispatch = useDispatch();
  const handleSwitchTabs = () => {
    dispatch({ type: SWITCH_TABS_REQUEST });
    onClose();
  };
  return (
    <Modal title="Finish results" open={open} onClose={onClose}>
      <div>
        <Editor
          style={{ marginTop: '32px' }}
          label={<span>Description</span>}
          placeholder="Show your SOIs your results ..."
          minHeight={200}
        />
      </div>
      <Stack style={{ marginTop: '16px' }} direction="row" justifyContent="space-between">
        <Button>Previous sub-SA </Button>
        <Button type="primary" onClick={handleSwitchTabs}>
          Submit results
        </Button>
      </Stack>
    </Modal>
  );
}

export default ModalFinishResults;
