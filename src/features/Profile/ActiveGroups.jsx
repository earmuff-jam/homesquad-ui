import { Stack, Typography } from '@mui/material';
import ItemList from '../HomePage/ItemList/ItemList';

export default function ActiveGroups() {
  return (
    <Stack>
      <Typography variant="h5" color="text.secondary">
        Active Groups
      </Typography>
      <ItemList dense="true" data={[]} />
    </Stack>
  );
}
