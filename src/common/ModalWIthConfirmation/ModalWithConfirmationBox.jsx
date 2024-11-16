import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide } from '@mui/material';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalWithConfirmationBox({
  open,
  maxWidth = 'md',
  title,
  children,
  handleClose,
  handleSubmit,
  primaryButton,
  secondaryButton,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{children}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {primaryButton ? (
          <Button onClick={handleClose} variant="outlined">
            {primaryButton}
          </Button>
        ) : null}
        <Button onClick={handleSubmit} variant="contained" autoFocus>
          {secondaryButton}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
