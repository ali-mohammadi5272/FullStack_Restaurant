import { useEffect } from "react";
import { NavigateFunction, Outlet, useNavigate } from "react-router-dom";

const AuthLayout = (): React.ReactNode => {
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    navigate("/auth/login", { replace: true });
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
