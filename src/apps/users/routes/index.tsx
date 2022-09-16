import { getRandomNumber } from "../../../services";
import { RouteInterface } from "../../../types";
import Dashboard from "../pages/Dashboard";
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
];

export default UserRoutes;
