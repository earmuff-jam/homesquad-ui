import { createBrowserRouter } from "react-router-dom";
import HomePage from "../features/HomePage/HomePage";
import Layout from "../features/Layout/Layout";
import ChoreDetails from "../features/ChoreDetails/ChoreDetails";
import ViewGroups from "../features/Groups/ViewGroups";
import Profile from "../features/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/chore/:id",
        element: <ChoreDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/groups",
        element: <ViewGroups />,
      },
    ],
  },
]);
