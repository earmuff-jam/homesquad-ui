import { Stack, Typography } from '@mui/material';
import ItemList from '../HomePage/ItemList/ItemList';

export default function ActiveChores() {
  return (
    <Stack>
      <Typography variant="h5" color="text.secondary">
        Active Chores
      </Typography>
      <ItemList dense="true" data={[]} />
    </Stack>
  );
}
