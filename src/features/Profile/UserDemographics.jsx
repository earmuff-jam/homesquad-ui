import { Avatar, IconButton, Stack, Typography } from '@mui/material';
import ItemCard from '../HomePage/MobileStepper/ItemCard';
import { EditRounded } from '@mui/icons-material';

export default function UserDemographics({ data = {}, handleEditMode }) {
  return (
    <ItemCard>
      <Stack alignItems={'center'}>
        <Avatar sx={{ width: 100, height: 100, marginBottom: '1rem' }} />
        <Stack direction={'row'} alignItems={'center'}>
          <IconButton size="small" onClick={handleEditMode}>
            <EditRounded fontSize="small" color="primary" />
          </IconButton>
          <Typography variant="h5" color="text.secondary">
            {data.firstname}, {data.surname}
          </Typography>
        </Stack>
        <Typography variant="subtitle2" color="text.secondary">
          {data.email}
        </Typography>
      </Stack>
    </ItemCard>
  );
}
