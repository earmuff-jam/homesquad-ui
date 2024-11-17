import { Button, Skeleton, Stack } from '@mui/material';
import AddTemplate from '../HomePage/MobileStepper/AddTemplate';
import { AddRounded } from '@mui/icons-material';
import { useGetGroupsQuery } from '../../services/dashboard';

export default function ViewGroups() {
  const { data: groups = [], isLoading: isGroupsLoading } = useGetGroupsQuery();

  if (isGroupsLoading) {
    return <Skeleton height={'10rem'} />;
  }

  return (
    <Stack>
      <Button sx={{ alignSelf: 'flex-end' }} startIcon={<AddRounded />} variant="contained">
        Add group
      </Button>
      <AddTemplate emptyText="Create groups to begin" titleText="Select Groups" items={groups} />
    </Stack>
  );
}
