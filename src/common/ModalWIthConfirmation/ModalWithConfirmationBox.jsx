import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Slide } from '@mui/material';

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
  primaryButton = '',
  secondaryButton = '',
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
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {primaryButton ? (
          <Button onClick={handleClose} variant="outlined">
            {primaryButton}
          </Button>
        ) : null}
        {secondaryButton ? (
          <Button onClick={handleSubmit} variant="contained" autoFocus>
            {secondaryButton}
          </Button>
        ) : null}
      </DialogActions>
    </Dialog>
  );
}
