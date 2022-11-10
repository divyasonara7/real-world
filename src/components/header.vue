<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <a class="nav-link active" href="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="">
            <i class="ion-gear-a"></i>&nbsp;Settings
          </a>
        </li>
        <li class="nav-item" v-if="isLogin" @click="auth.logout()">
          <router-link to="/signin" class="nav-link">Sign Out</router-link>
        </li>
        <li class="nav-item" v-else>
          <router-link to="/signin" class="nav-link">Sign in </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import auth from "@/utils/auth";
import { watch } from "@vue/runtime-core";
import { defineProps } from "vue";
const props = defineProps<{
  isLogin: boolean;
}>();
// watch(
//   () => props.isLogin,
//   (first, second) => {
//     console.log(
//       "Watch props.selected function called with args:",
//       first,
//       second
//     );
//   }
// );
</script>
<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>
