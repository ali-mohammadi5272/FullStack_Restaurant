import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouteRecordRaw,
} from "vue-router";
import AuthLayout from "./layouts/Auth/Auth.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    component: AuthLayout,
    children: [],
  },
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
