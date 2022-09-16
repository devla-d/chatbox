import { getRandomNumber } from "../../../services";
import { RouteInterface } from "../../../types";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const authRoutes: RouteInterface[] = [
  {
    id: getRandomNumber(),
    element: <Home />,
    path: "/",
  },
  {
    id: getRandomNumber(),
    element: <Register />,
    path: "/new-account",
  },
  {
    id: getRandomNumber(),
    element: <Login />,
    path: "/login",
  },
];
export default authRoutes;
