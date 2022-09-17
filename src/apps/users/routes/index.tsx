import { getRandomNumber } from "../../../services";
import { RouteInterface } from "../../../types";
import CallLog from "../pages/CallLog";
import Dashboard from "../pages/Dashboard";
import Friends from "../pages/Friends";
import Groups from "../pages/Groups";
import Profile from "../pages/Profile";

const UserRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Dashboard />,
    path: "/dashboard",
  },
  {
    id: getRandomNumber(),
    element: <Profile />,
    path: "/profile",
  },
  {
    id: getRandomNumber(),
    element: <Groups />,
    path: "/groups",
  },
  {
    id: getRandomNumber(),
    element: <Friends />,
    path: "/friends",
  },
  {
    id: getRandomNumber(),
    element: <CallLog />,
    path: "/call-logs",
  },
];

export default UserRoutes;
