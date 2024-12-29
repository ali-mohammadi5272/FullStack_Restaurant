import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouteRecordRaw,
} from "vue-router";
import AuthLayout from "./layouts/Auth/Auth.vue";
import LoginPage from "./pages/Login/index.vue";
import RegisterPage from "./pages/Register/index.vue";
import DefaultLayout from "./layouts/Default/Default.vue";

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
    component: DefaultLayout,
    children: [],
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
