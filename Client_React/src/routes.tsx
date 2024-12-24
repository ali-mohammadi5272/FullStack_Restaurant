import { RouteObject } from "react-router-dom";
import LoginPage from "./pages/Login";

const routes: RouteObject[] = [
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export { routes };
