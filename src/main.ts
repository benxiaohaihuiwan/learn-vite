import "unocss"; // 引入 unocss 原子化
import "ant-design-vue/dist/reset.css"; // 引入ant-design
import Antd from "ant-design-vue"; // 先全局引入ant-design-vue
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

async function bootstrap() {
  const app = createApp(App);
  // 引用 ant-design-vue
  app.use(Antd);

  app.mount("#app");
}

bootstrap();
