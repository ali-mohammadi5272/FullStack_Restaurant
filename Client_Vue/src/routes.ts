import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouteRecordRaw,
} from "vue-router";
import AuthLayout from "./layouts/Auth/AuthLayout.vue";
import LoginPage from "./pages/Login/index.vue";
import RegisterPage from "./pages/Register/index.vue";
import MainLayout from "./layouts/Main/MainLayout.vue";

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
    children: [],
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
