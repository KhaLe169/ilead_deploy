import { Button } from "components/CustomStyle/Button";
import Editor from "components/CustomStyle/Editor";
import Modal from "components/CustomStyle/Modal";
import Select from "components/CustomStyle/Select";
import { Stack } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
};
function ModalFinishResults({ open, onClose }: Props) {
  return (
    <Modal title="mạnh nhanh ras" open={open} onClose={onClose}>
      <div>
        <Select options={[]} label="asdsd" />
        <Editor
          style={{ marginTop: "32px" }}
          label={<span>Description</span>}
          placeholder="Show your SOIs your results ..."
          minHeight={200}
        />
      </div>
      <Stack
        style={{ marginTop: "16px" }}
        direction="row"
        justifyContent="space-between"
      >
        <Button>Previous sub-SA </Button>
        <Button type="primary">Submit results</Button>
      </Stack>
    </Modal>
  );
}

export default ModalFinishResults;
