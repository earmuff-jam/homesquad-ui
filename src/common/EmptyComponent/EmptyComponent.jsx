import { Stack, Typography } from '@mui/material';

export default function EmptyComponent({ emptyText = 'Sorry, no matching records found' }) {
  return (
    <Stack textAlign={'center'}>
      <Typography variant="subtitle2" color="text.secondary">
        {emptyText}
      </Typography>
    </Stack>
  );
}
