import { useAppSelector } from "@/hooks/useStore";
// import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  // const isLoggedIn = useAppSelector((state) => state.auth.isLoggedin);
  const isLoggedIn = true;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
