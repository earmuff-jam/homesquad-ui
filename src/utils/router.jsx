import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../features/HomePage/HomePage';
import Layout from '../features/Layout/Layout';
import ChoreDetails from '../features/ChoreDetails/ChoreDetails';
import ViewGroups from '../features/Groups/ViewGroups';
import Profile from '../features/Profile/Profile';

export const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <HomePage />,
      },
      {
        path: '/dashboard/chore/:id',
        element: <ChoreDetails />,
      },
      {
        path: '/dashboard/profile',
        element: <Profile />,
      },
      {
        path: '/dashboard/groups',
        element: <ViewGroups />,
      },
    ],
  },
]);
