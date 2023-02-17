<template>
  <div class="app_nav" :class="'app_nav_' + theme">
    <div class="myplace">
      <span><switcher-outlined /></span> 我的空间
    </div>
    <div class="operate">
      <span
        class="setting setting_dark"
        @click="changeTheme(true)"
        v-if="theme == 'dark'"
        ><setting-outlined
      /></span>
      <span class="setting setting_light" @click="changeTheme(false)" v-else
        ><setting-outlined
      /></span>

      <a-dropdown :trigger="['click']">
        <span class="operate-dropdown" @click.prevent>
          {{ language }}
          <i><CaretDownOutlined /></i>
        </span>
        <template #overlay>
          <a-menu @click="changeLang">
            <a-menu-item key="1">
              <a href="javascript:;">中文</a>
            </a-menu-item>
            <a-menu-item key="2">
              <a href="javascript:;">English</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>

      <div class="headImg">
        <img src="../assets/img/img.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

import {
  SettingOutlined,
  SwitcherOutlined,
  CaretDownOutlined,
} from "@ant-design/icons-vue";
import type { MenuProps } from "ant-design-vue";

import { useGlobe } from "../store/globe";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "Header",
  components: { SettingOutlined, SwitcherOutlined, CaretDownOutlined },

  setup() {
    const store = useGlobe();
    const { theme, language, locale } = storeToRefs(store);
    dayjs.locale(locale);

    const changeLang: MenuProps["onClick"] = (e) => {
      let curLocale = e.key == 1 ? zhCN.locale : enUS.locale;
      store.changeLocale(curLocale);
      dayjs.locale(curLocale);
      localStorage.setItem('locale', JSON.stringify(curLocale));

      let curLang = e.key == 1 ? "中文" : "English";
      store.changeLang(curLang);
      localStorage.setItem('language', JSON.stringify(curLang));

      location.reload()
    };

    const changeTheme = (isDark: boolean) => {
      let curTheme = isDark ? "light" : "dark";
      store.changeTheme(curTheme);
      localStorage.setItem('theme', JSON.stringify(curTheme));
    };

    return {
      changeLang,
      language,

      changeTheme,
      theme,
    };
  },
});
</script>

<style scoped lang="scss">
.app_nav {
  width: 100%;
  height: 88px;
  line-height: 88px;
  transition: all .5s;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;

  .myplace {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);

    span {
      font-size: 22px !important;
      vertical-align: -3px;
      margin-right: 2px;
    }
  }

  .operate {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .setting {
      color: #fff;
      font-size: 22px;
      cursor: pointer;
    }

    &-dropdown {
      width: 155px;
      height: 40px;
      line-height: 40px;
      font-size: 15px !important;
      border-radius: 30px;
      padding: 0 20px 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 34px;

      i {
        font-size: 14px !important;
      }
    }

    .headImg {
      width: 42px;
      height: 42px;

      img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 50%;
        border: 1px solid #fff;
      }
    }
  }


  &_dark {
    background: #1f2128;
    .operate {
      color: #fff;
      &-dropdown {
        background: #549cfd;
      }
    }
  }

  &_light {
    background: linear-gradient(225deg, #e773ff 0%, #9222e1 100%);
    .operate {
      color: #29314F;
      &-dropdown {
        background: #fff;
      }
    }
  }
}
</style>
