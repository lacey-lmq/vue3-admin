import {createI18n} from "vue-i18n";

import antEnUS from "ant-design-vue/es/locale/en_US";
import antZhCN from "ant-design-vue/es/locale/zh_CN";

import localeEn from './en';
import localeZh from './zh';

// 语言配置整合
const messages = {
    "en": {
        ...localeEn,
        ...antEnUS,
    },
    "zh-cn": {
        ...localeZh,
        ...antZhCN,
    }
}

// 默认读取本地存储语言设置
let locale = localStorage.getItem('locale');
const defaultLocale = locale && JSON.parse(locale) || 'zh-cn';
console.log(defaultLocale)

const i18n = createI18n({
    legacy: false,
    globalInjection: true,  // 全局模式，可以直接使用 $t
    locale: defaultLocale,
    messages
})

export default i18n;
