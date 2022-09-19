import { useAppSelector } from "@/hooks/useStore";

import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedin);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
