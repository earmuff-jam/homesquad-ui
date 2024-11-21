import { Typography, Stack, Divider } from '@mui/material';
import { CheckCircleOutlineRounded } from '@mui/icons-material';
import dayjs from 'dayjs';

export default function UserDetails({ data = {} }) {
  return (
    <Stack>
      <Typography variant="h5" color="text.secondary">
        User details
      </Typography>
      <Divider sx={{ marginTop: '1rem', marginBottom: '1rem' }} />
      <Typography variant="caption" color="text.secondary">
        This section is more reserved for user information such as bio or if the user has anything that they would like
        to share with other people.
      </Typography>
      <Stack marginTop={'1rem'} spacing={1}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <CheckCircleOutlineRounded color="primary" />
          <Typography variant="subtitle2" color="text.secondary">
            Email Address : {data.email}
          </Typography>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <CheckCircleOutlineRounded color="primary" />
          <Typography variant="subtitle2" color="text.secondary">
            Last login : {dayjs(data.updated_at).fromNow()}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
