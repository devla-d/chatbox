import "./style/auth.scss";
import "./style/auth-responsive.scss";

import "react-toastify/dist/ReactToastify.css";

import { Outlet } from "react-router-dom";
import ToastDialog from "../../components/ToastDialog";

const AuthLayout = () => {
  return (
    <main className="wrapper" id="auth-wrapper">
      <Outlet />
      <ToastDialog />
    </main>
  );
};

export default AuthLayout;
