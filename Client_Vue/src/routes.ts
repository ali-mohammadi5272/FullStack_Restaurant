import {
  createRouter,
  createWebHashHistory,
  type Router,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
