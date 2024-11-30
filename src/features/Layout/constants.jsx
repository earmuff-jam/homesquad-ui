import { Groups2Rounded, HomeRounded, Person2Rounded } from '@mui/icons-material';

export const NAVIGATION_LIST = [
  {
    id: 1,
    icon: <HomeRounded fontSize="small" />,
    label: 'Home',
    to: '/dashboard',
  },
  {
    id: 2,
    icon: <Person2Rounded fontSize="small" />,
    label: 'Profile Details',
    to: '/dashboard/profile',
  },
  {
    id: 3,
    icon: <Groups2Rounded fontSize="small" />,
    label: 'Groups',
    to: '/dashboard/groups',
  },
];
