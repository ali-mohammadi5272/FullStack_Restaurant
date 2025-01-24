import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/index.ts";
import Antd from "ant-design-vue";
import "./assets/styles/main.scss";
import "ant-design-vue/dist/reset.css";

const app = createApp(App);

app.use(router).use(Antd).mount("#app");
