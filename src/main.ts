import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia';
import { ConfigProvider } from 'ant-design-vue';

import "./assets/css/common.scss";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const pinia = createPinia();

const app = createApp(App);

app.use(router).use(Antd).use(ConfigProvider).use(pinia);

app.mount("#app");
