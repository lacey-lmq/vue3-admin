<script lang="ts">
import {defineComponent, ref, watch} from 'vue';

import { useGlobe } from "../store/globe";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const store = useGlobe();
    const { theme } = storeToRefs(store);


    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['1']);

    watch(
        () => openKeys,
        val => {
          console.log('openKeys', val);
        },
    );
    return {
      selectedKeys,
      openKeys,

      theme
    };
  },
});
</script>

<template>
  <div class="slideLeft" :class="'slideLeft_' + theme">
    <a href="/" class="logo">
      <img src="../assets/img/dark-logo.png"  v-if="theme == 'dark'">
      <img src="../assets/img/light-logo.png" v-else>
    </a>


    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        :theme="theme"
    >
      <a-menu-item key="1">
        首页
      </a-menu-item>
      <a-menu-item key="2">
        {{$t('menu.首页')}}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<style lang="scss">
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
  }

  &_light {
    background: #fff;
  }
}
</style>
