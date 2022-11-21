<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center" v-if="isRegisterMode">Sign up</h1>
          <h1 class="text-xs-center" v-else>Sign in</h1>
          <p class="text-xs-center">
            <router-link v-if="isRegisterMode" to="/signin">
              Have an account?
            </router-link>
            <router-link v-else to="/signup"> Need an account? </router-link>
          </p>
          <CommonErrors :errors="errors" />
          <Loader v-if="isLoading" />

          <form @submit.prevent="authAction" v-else>
            <fieldset>
              <fieldset v-if="isRegisterMode" class="form-group">
                <input
                  v-model="username"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  required="true"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="email"
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  required="true"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="password"
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  required="true"
                />
              </fieldset>
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isRegisterMode ? "Sign up" : "Sign in" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "@vue/runtime-core";
import { ref } from "vue";
import store from "@/store";
import CommonErrors from "@/components/common-errors.vue";
import Loader from "./Loader.vue";
export default {
  name: "AuthPage",
  components: {
    CommonErrors,
    Loader,
  },
  props: ["mode"],
  setup(props: any) {
    const username = ref();
    const email = ref();
    const password = ref();
    const isLoading = ref(false);
    const isRegisterMode = computed(() => {
      return props.mode === "Register" ? true : false;
    });

    const errors = computed(() => {
      return store.getters.getUserErrors.errors;
    });

    const authAction = async () => {
      isLoading.value = true;
      isRegisterMode.value
        ? await store.dispatch("userRegister", {
            username: username.value,
            email: email.value,
            password: password.value,
          })
        : await store.dispatch("userLogin", {
            email: email.value,
            password: password.value,
          });
      isLoading.value = false;
    };
    return {
      isRegisterMode,
      username,
      email,
      password,
      authAction,
      errors,
      isLoading,
    };
  },
};

export enum AuthPageMode {
  Register = "Register",
  Login = "Login",
}
</script>
