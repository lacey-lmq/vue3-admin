import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia';
import { ConfigProvider } from 'ant-design-vue';

import "./assets/css/common.scss";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import i18n from './locale/index';
const pinia = createPinia();

const app = createApp(App);

app.use(router).use(Antd).use(ConfigProvider).use(i18n).use(pinia);

app.mount("#app");
