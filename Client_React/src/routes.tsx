import { RouteObject } from "react-router-dom";
import LoginPage from "./pages/Login";
import AuthLayout from "./layouts/Auth/Auth";
import RegisterPage from "./pages/Register";

const routes: RouteObject[] = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
];

export { routes };
