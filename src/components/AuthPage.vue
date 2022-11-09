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

          {{ errors }}
          <!-- <common-errors-list :errors="errors" /> -->

          <form @submit.prevent="authAction">
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
            <!-- <common-loader
              v-if="isLoading"
              :size="5"
              :margin="0"
              class="pull-xs-right"
            /> -->
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
import router from "@/router";
export default {
  name: "AuthPage",

  props: ["mode"],
  setup(props) {
    const username = ref();
    const email = ref();
    const password = ref();
    const errors = ref();
    const isRegisterMode = computed(() => {
      return props.mode === "Register" ? true : false;
    });

    function isArrayOf<T>(typeLike: T, arr: any): boolean {
      return (
        !!arr &&
        arr instanceof Array &&
        (arr.length === 0 || arr.every((v) => typeof v === typeof typeLike))
      );
    }

    function isArrayOfStrings(arr: any): boolean {
      return isArrayOf("string", arr);
    }

    const authAction = async () => {
      try {
        isRegisterMode
          ? await store.dispatch("userRegister", {
              username: username.value,
              email: email.value,
              password: password.value,
            })
          : await store.dispatch("userLogin", {
              email: email.value,
              password: password.value,
            });
        router.push("/");
      } catch (e) {
        if (isArrayOfStrings(e)) {
          errors.value = e;
        } else {
          throw e;
        }
      }
    };
    return {
      isRegisterMode,
      username,
      email,
      password,
      authAction,
      errors,
    };
  },
};
export enum AuthPageMode {
  Register = "Register",
  Login = "Login",
}
</script>
