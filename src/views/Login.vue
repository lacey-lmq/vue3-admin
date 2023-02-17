<template>
  <div class="login">
    <div class="login_main">
      <div class="login-title">第一个Vue3项目</div>
      <div class="login-box">
        <a-form
            class="login-form"
            :model="formState"
            @finish="handleFinish"
            @finishFailed="handleFinishFailed"
        >
          <a-form-item>
            <a-input v-model:value="formState.user" placeholder="请输入用户名">
              <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input v-model:value="formState.password" type="password" placeholder="请输入密码">
              <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-button
                class="login-btn"
                type="primary"
                html-type="submit"
                :disabled="formState.user === '' || formState.password === ''"
            >登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive } from 'vue';
import type { UnwrapRef } from 'vue';
import type { FormProps } from 'ant-design-vue';
import { useRouter } from 'vue-router';
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
  },
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });

    const router = useRouter();
    const handleFinish: FormProps['onFinish'] = values => {
      if (formState.user === "admin" && formState.password === "123") {
        router.push('/');
      }
    };
    const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background: #99CCCC;
  position: relative;

  &_main {
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.2);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .login-title {
      line-height: 60px;
      text-align: center;
      font-size: 20px;
      color: #fff;
      border-bottom: 1px solid #ddd;
    }

    .login-box {
      padding: 42px 45px 32px 45px;
      .login-form {
        width: 350px;
        .ant-input-affix-wrapper {
          height: 42px;
          margin-bottom: 3px;
        }
      }
    }

    .login-btn {
      width: 100%;
      height: 45px;
      font-size: 16px;
    }
  }
}
</style>
