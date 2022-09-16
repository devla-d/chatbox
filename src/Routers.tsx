import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./apps/auth/AuthLayout";
import authRoutes from "./apps/auth/routes";
import Protected from "./apps/users/components/Protected";
import UserRoutes from "./apps/users/routes";
import UserLayout from "./apps/users/UserLayout";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          {authRoutes.map((route) => (
            <Route element={route.element} path={route.path} key={route.id} />
          ))}
        </Route>
        <Route element={<Protected />}>
          <Route element={<UserLayout />}>
            {UserRoutes.map((route) => (
              <Route element={route.element} path={route.path} key={route.id} />
            ))}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
