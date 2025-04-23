import { RouteObject } from "react-router-dom";
import LoginPage from "./pages/Login";
import AuthLayout from "./layouts/Auth/AuthLayout";
import RegisterPage from "./pages/Register";
import MainLayout from "./layouts/Main/MainLayout";
import HomePage from "./pages/Home";
import MenuPage from "./pages/Menu";
import AboutUsPage from "./pages/About_Us";
import ReservationPage from "./pages/Reservation";
import ContactUsPage from "./pages/Contact_Us";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";

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
  {
    path: "/",
    element: (
      <AuthProvider>
        <MainLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/menus",
        element: <MenuPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/reservation",
        element: <ReservationPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
];

export { routes };
