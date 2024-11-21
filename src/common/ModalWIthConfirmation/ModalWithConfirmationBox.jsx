import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slide,
  Stack,
  IconButton,
  Divider,
} from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

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
      <DialogTitle id="alert-dialog-title">
        {title ? (
          <>
            <Stack direction="row" justifyContent={'space-between'} alignItems={'center'}>
              {title}
              <IconButton onClick={handleClose} color="error">
                <CloseRounded />
              </IconButton>
            </Stack>
            <Divider sx={{ marginTop: '1rem', marginBottom: '1rem' }} />
          </>
        ) : null}
      </DialogTitle>
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
