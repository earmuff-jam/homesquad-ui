import { Stack, Typography } from '@mui/material';
import ProfileStatsChart from './ProfileStatsChart';

export default function UserStatus() {
  const profileStats = [
    {
      id: 1,
      label: 'Total Groups',
      caption: 'The total number of active groups',
      value: 2,
      color: 'rgb(255, 99, 132)',
    },
    {
      id: 2,
      label: 'Templates Created',
      caption: 'The amount of templates created',
      value: 3,
      color: 'rgb(54, 162, 235)',
    },
    {
      id: 3,
      label: 'Total Collaborators',
      caption: 'The total number of active collaborators',
      value: 4,
      color: 'rgb(255, 205, 86)',
    },
  ];

  const total = profileStats.map(({ value }) => value).reduce((acc, el) => acc + el, 0);

  return (
    <>
      <Typography variant="h5" color="text.secondary" gutterBottom>
        Profile Stats
      </Typography>
      <Stack direction={'row'} justifyContent={'space-between'}>
        {profileStats.map((v) => (
          <Stack key={v.id} alignItems={'center'} spacing={1}>
            <Typography variant="subtitle2" color="text.secondary">
              {v.label}
            </Typography>
            <Typography variant="h5" color="text.secondary">
              {v.value}
            </Typography>
            <ProfileStatsChart label={v.label} value={v.value} color={v.color} total={total} />
          </Stack>
        ))}
      </Stack>
    </>
  );
}
