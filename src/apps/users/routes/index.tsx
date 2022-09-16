import { getRandomNumber } from "../../../services";
import { RouteInterface } from "../../../types";
import Dashboard from "../pages/Dashboard";

const UserRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Dashboard />,
    path: "/dashboard",
  },
];

export default UserRoutes;
