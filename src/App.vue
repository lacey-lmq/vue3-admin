<template>
  <div class="app">
    <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
      <div class="slideLeft" :class="'slideLeft_' + theme">
        <a href="/" class="logo">
          <img src="./assets/img/dark-logo.png" v-if="theme == 'dark'">
          <img src="./assets/img/light-logo.png" v-else>
        </a>

        <a-menu
            v-model:openKeys="openKeys"
            v-model:selectedKeys="selectedKeys"
            :theme="theme"
        >
          <a-menu-item :key="item.key" v-for="item in menus">
            <template #icon>
              <MailOutlined/>
            </template>
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>

      <div class="app_main" :class="'app_main_' + theme">
        <div class="app_nav">
          <div class="myplace"><span><switcher-outlined/></span> 我的空间</div>
          <div class="operate">
            <span class="setting"><setting-outlined/></span>
            <a-dropdown :trigger="['click']">
              <span class="operate-dropdown" @click.prevent>
                {{ currentLang }}
                <i><CaretDownOutlined/></i>
              </span>
              <template #overlay>
                <a-menu @click="choseLang">
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
              <img src="./assets/img/img.jpg" alt="">
            </div>
          </div>

        </div>

        <div class="app_page">
          <router-view/>
        </div>

        <!--        <div class="locale-components">-->
        <!--          <div class="example">-->
        <!--            <a-date-picker/>-->
        <!--            <a-time-picker/>-->
        <!--            <a-range-picker style="width: 200px"/>-->
        <!--          </div>-->
        <!--        </div>-->

        <!--        <a-switch-->
        <!--            :checked="theme === 'dark'"-->
        <!--            checked-children="Dark"-->
        <!--            un-checked-children="Light"-->
        <!--            @change="changeTheme"-->
        <!--        />-->

      </div>
    </a-config-provider>
  </div>
</template>

<script lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import {defineComponent, ref, reactive, toRefs, watch} from 'vue';
import {
  MailOutlined, SettingOutlined, SwitcherOutlined, CaretDownOutlined
} from '@ant-design/icons-vue';
import type {MenuTheme, MenuProps} from 'ant-design-vue';

dayjs.locale('en');

export default defineComponent({
  name: "App",
  components: {
    MailOutlined, SettingOutlined, SwitcherOutlined, CaretDownOutlined
  },
  setup() {
    const menus = ref([{
      name: "首页",
      key: 1
    }, {
      name: "tab选项卡",
      key: 2
    }])

    // region 选择语言
    const locale = ref(zhCN.locale);
    const currentLang = ref("选择语言");
    const choseLang: MenuProps['onClick'] = e => {
      locale.value = e.key == 1 ? zhCN.locale : enUS.locale;
      currentLang.value = e.key == 1 ? "中文" : "English";
    };
    watch(locale, val => {
      dayjs.locale(val);
    });
    // endregion 选择语言


    const state = reactive({
      theme: 'dark' as MenuTheme,
      selectedKeys: ['1']
    });
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };

    return {
      menus,
      ...toRefs(state),
      locale,
      currentLang,
      dayjs,
      enUS,
      zhCN,
      changeTheme,
      choseLang
    };
  },
});
</script>

<style lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: space-between;

  .slideLeft {
    width: 230px;
    height: 100vh;
    transition: all .3s;

    .logo {
      width: 100%;
      height: 88px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 152px;
        height: 50px;
        display: block;
      }
    }

    .ant-menu {
      border: none;

      .ant-menu-item {
        text-align: center;
      }
    }

    .ant-menu-dark {
      color: #fff;
      background: #242731;

      .ant-menu-item-selected {
        background-color: #292E3D !important;

        .ant-menu-title-content {
          color: #9222E1 !important;
        }
      }
    }

    .ant-menu-light {
      .ant-menu-item-selected {
        background-color: #FAF0F7 !important;

        .ant-menu-title-content {
          color: #9222E1 !important;
        }
      }

      .ant-menu-item:hover, .ant-menu-item-active {
        color: #9222E1 !important;
      }
    }


    &_dark {
      background: #242731;
      border-right: 1px solid #242731;
    }

    &_light {
      background: #fff;
      border-right: 1px solid #f0f0f0;
    }
  }

  .app_main {
    flex: 1;

    .app_nav {
      width: 100%;
      height: 88px;
      line-height: 88px;
      transition: all .3s;
      display: flex;
      justify-content: space-between;
      padding: 0 30px;

      .myplace {
        font-size: 16px;
        color: rgba(255, 255, 255, .8);

        span {
          font-size: 22px !important;
          vertical-align: -3px;
          margin-right: 2px;
        }
      }

      .operate {
        color: #fff;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .setting {
          font-size: 22px;
        }

        &-dropdown {
          background: #549CFD;
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
    }

    .app_page {
      padding: 0 30px;
    }

    &_dark {
      background: #1F2128;
    }

    &_light {
      background: linear-gradient(225deg, #E773FF 0%, #9222E1 100%);
    }
  }
}
</style>
