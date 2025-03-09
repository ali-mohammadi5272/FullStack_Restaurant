import { useEffect } from "react";
import { authLayoutRoutePattern } from "../../utils/patterns";
import { getCookie } from "../../utils/helperFuncs/helperFuncs";
import { CookieEnum } from "../../utils/helperFuncs/helperFuncs.type";
import {
  Location,
  NavigateFunction,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

const AuthLayout = (): React.ReactNode => {
  const navigate: NavigateFunction = useNavigate();
  const location: Location = useLocation();

  useEffect(() => {
    const refreshToken: boolean = !!getCookie(CookieEnum.REFRESH_TOKEN);
    if (refreshToken) {
      navigate("/", { replace: true });
    }

    const isOnlyAuthLayoutRoute: boolean = authLayoutRoutePattern.test(
      location.pathname
    );
    if (isOnlyAuthLayoutRoute) {
      navigate("/auth/login", { replace: true });
    }
  }, [location]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
