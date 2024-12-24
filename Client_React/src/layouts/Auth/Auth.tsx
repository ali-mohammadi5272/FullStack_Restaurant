import { Outlet } from "react-router-dom";

const AuthLayout = (): React.ReactNode => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
