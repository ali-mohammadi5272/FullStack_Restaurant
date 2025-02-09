import type { RouteRecordRaw } from "vue-router";
import AuthLayout from "../layouts/Auth/AuthLayout.vue";
import LoginPage from "../pages/Login/index.vue";
import RegisterPage from "../pages/Register/index.vue";
import MainLayout from "../layouts/Main/MainLayout.vue";
import HomePage from "../pages/Home/index.vue";
import MenuPage from "../pages/Menu/index.vue";
import AboutUsPage from "../pages/About_Us/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    component: AuthLayout,
    redirect: "/auth/login",
    children: [
      {
        path: "login",
        component: LoginPage,
      },
      {
        path: "register",
        component: RegisterPage,
      },
    ],
  },
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        component: HomePage,
      },
      {
        path: "menus",
        component: MenuPage,
      },
      {
        path: "about-us",
        component: AboutUsPage,
      },
    ],
  },
];

export { routes };
