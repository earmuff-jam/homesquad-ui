import { Avatar, Skeleton, Stack, Typography } from '@mui/material';
import IconButtonWithTooltip from '../IconButtonWithTooltip/IconButtonWithTooltip';

export default function AvatarWithText({ isLoading, salutation, handleAdd }) {
  if (isLoading) {
    return <Skeleton height={'5rem'} />;
  }
  return (
    <Stack direction={'row'} justifyContent={'space-between'}>
      <Stack spacing={2}>
        <Avatar sx={{ width: 78, height: 78 }} />
        <Typography variant="h5">{salutation}</Typography>
      </Stack>
      <IconButtonWithTooltip tooltipTitle={'Add new chore'} handleAdd={handleAdd} />
    </Stack>
  );
}
