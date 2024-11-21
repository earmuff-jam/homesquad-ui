import { Divider, IconButton, Stack, Typography } from '@mui/material';
import ItemCard from '../../../common/ItemCard/ItemCard';
import { EditRounded } from '@mui/icons-material';
import dayjs from 'dayjs';

export default function ViewTemplate({ titleText = '', emptyText = '', handleSelectedValue, items = [] }) {
  if (items.length <= 0) {
    return <Typography textAlign="center">{emptyText}</Typography>;
  }
  return (
    <Stack alignItems="center">
      <Stack>
        <Typography variant="h5" gutterBottom>
          {titleText}
        </Typography>
      </Stack>
      <Stack direction={'row'} spacing={1}>
        {items.map((group, index) => (
          <ItemCard key={index} userCount={group.users_count}>
            <Stack sx={{ minWidth: '25rem' }} onClick={() => handleSelectedValue(group.id)}>
              <Stack direction={'row'}>
                <IconButton size="small" color="primary">
                  <EditRounded fontSize="small" />
                </IconButton>
                <Typography variant="h6">{group.name}</Typography>
              </Stack>
              <Stack>
                <Typography variant="subtitle2" color="text.secondary">
                  Code : {group.invitation_code}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {group.group_type.name} Group
                </Typography>
              </Stack>
              <Typography color="text.secondary" variant="caption">
                {group.caption}
              </Typography>
              <Divider sx={{ marginTop: '1rem', marginBottom: '1rem' }} />
              <Stack alignItems={'flex-end'}>
                <Typography variant="caption" fontStyle={'italic'}>
                  Last updated {dayjs(group.updated_at).fromNow()}
                </Typography>
              </Stack>
            </Stack>
          </ItemCard>
        ))}
      </Stack>
    </Stack>
  );
}
