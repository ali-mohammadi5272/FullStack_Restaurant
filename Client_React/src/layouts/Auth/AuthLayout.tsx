import { useEffect } from "react";
import { authLayoutRoutePattern } from "../../utils/patterns";
import OuterContainer from "../../components/OuterContainer/OuterContainer";
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
    const isOnlyAuthLayoutRoute: boolean = authLayoutRoutePattern.test(
      location.pathname
    );
    if (isOnlyAuthLayoutRoute) {
      navigate("/auth/login", { replace: true });
    }
  }, []);

  return (
    <OuterContainer>
      <Outlet />
    </OuterContainer>
  );
};

export default AuthLayout;
