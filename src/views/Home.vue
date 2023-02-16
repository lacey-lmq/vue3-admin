<template>
  <div class="home">
    <div class="home_left">
      <div class="home_left_title">
        <div class="title">今日数据</div>
        <a-dropdown :trigger="['click']">
              <span class="home_left_title-dropdown" @click.prevent>
                {{ partner }}
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
      </div>

      <div class="home_left_main">
        <div class="main_item" v-for="v in 6" :key="v">
          <div class="main_item_title">
            <img src="../assets/img/img.jpg" alt="">
            代收订单数
          </div>
          <span>437</span>
        </div>
      </div>

      <div class="home_left_title">
        <div class="title">今日数据</div>
        <a-dropdown :trigger="['click']">
              <span class="home_left_title-dropdown" @click.prevent>
                {{ partner }}
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
      </div>

      <div class="home_left_main">
        <div class="main_item" v-for="v in 6" :key="v">
          <div class="main_item_title">
            <img src="../assets/img/img.jpg" alt="">
            代收订单数
          </div>
          <span>437</span>
        </div>
      </div>
    </div>

    <div class="home_right">
      <div class="home_right_title">
        <div class="title">累计数据</div>
        <a-dropdown :trigger="['click']">
              <span class="home_right_title-dropdown" @click.prevent>
                {{ total }}
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
      </div>

      <div class="home_right_main">
        <div class="main_item" v-for="v in 2" :key="v">
          <div class="main_item_title">代收订单数</div>
          <span>99999999999999</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {CaretDownOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  components: {CaretDownOutlined},
  setup() {
    const partner = ref("全部合作商");
    const total = ref("全部时间");
    return {
      partner,
      total
    }
  }
})
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: space-between;

  &_left {
    flex: 1;
    margin-right: 15px;
    background: #242731;
    border-radius: 20px;
    padding: 0 30px;

    &_title {
      width: 100%;
      height: 40px;
      color: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 20px;

      .title {
        font-size: 17px;
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
        margin-left: 15px;

        i {
          font-size: 14px !important;
        }
      }
    }

    &_main {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main_item {
        width: 31%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #292E3D;
        border-radius: 15px;
        margin-top: 20px;
        padding: 0 25px;

        &_title {
          color: rgba(255, 255, 255, .7);
          font-size: 14px;

          img {
            width: 34px;
            height: 34px;
            border-radius: 4px;
            margin-right: 10px;
          }
        }

        span {
          font-size: 22px;
          color: #fff;
        }
      }
    }
  }

  &_right {
    width: 300px;
    background: #242731;
    border-radius: 20px;
    padding: 0 20px;

    &_title {
      width: 100%;
      height: 40px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;

      .title {
        font-size: 17px;
      }

      &-dropdown {
        background: #549CFD;
        width: 120px;
        height: 40px;
        line-height: 40px;
        font-size: 15px !important;
        border-radius: 30px;
        padding: 0 15px 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-left: 15px;

        i {
          font-size: 14px !important;
        }
      }
    }

    &_main {
      width: 100%;

      .main_item {
        width: 100%;
        background: #292E3D;
        border-radius: 15px;
        margin-top: 20px;
        padding: 10px 15px;
        font-size: 20px;
        color: #fff;

        &_title {
          color: rgba(255, 255, 255, .7);
          font-size: 13px;
          margin-bottom: 5px;
        }
      }
    }
  }

}
</style>
