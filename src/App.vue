<script lang="ts">
import {defineComponent} from "vue";

import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";

import {useGlobe} from "./store/globe";
import {storeToRefs} from "pinia";

export default defineComponent({
  setup() {
    const store = useGlobe();
    const {locale} = storeToRefs(store);

    return {
      locale,
      enUS,
      zhCN,
    };
  },
});
</script>

<template>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <router-view/>
  </a-config-provider>
</template>

<style lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: space-between;

  .app_main {
    flex: 1;

    .app_page {
      width: 100%;
      height: calc(100vh - 88px);
      overflow: auto;
      padding: 0 30px;
    }

    .app_page_dark {
      background: #1F2128;
    }

    .app_page_light {
      background: #F0F3FA;
    }
  }
}
</style>
