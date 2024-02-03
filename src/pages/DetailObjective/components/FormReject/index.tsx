import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import colors from 'theme/colors';
type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function FormReject({ open, setOpen }: Props) {
  //   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: any) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const reason = formJson.reason;
            console.log(reason);
            // handleClose();
          },
        }}
      >
        <DialogContent>
          <TextField
            placeholder="Explain why you reject being a part of this objective"
            multiline
            sx={{
              backgroundColor: '#F8F8FC',
              border: `1px solid ${colors.black2}`,
              borderRadius: '10px',
              width: '300px',
            }}
            name="reason"
            maxRows={4}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit and reject</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
