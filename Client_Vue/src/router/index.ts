import { createRouter, createWebHashHistory, type Router } from "vue-router";
import { routes } from "./routes.ts";

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
