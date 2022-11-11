<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">conduit</router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link to="/" class="navbar-brand">Home</router-link>
        </li>
        <li class="nav-item" v-if="store.getters.isLogin">
          <router-link to="/add" class="nav-link">
            <i class="ion-compose">New Article</i>
          </router-link>
        </li>
        <li class="nav-item" v-if="store.getters.isLogin" @click="logout">
          <router-link to="/signin" class="nav-link">Sign Out</router-link>
        </li>
        <li class="nav-item" v-if="!store.getters.isLogin">
          <router-link to="/signin" class="nav-link">Sign in </router-link>
        </li>
        <li class="nav-item" v-if="store.getters.getUserName != ''">
          <p class="nav-link">
            <img
              v-if="store.getters.getUserImage"
              :src="store.getters.getUserImage"
              class="user-pic"
            />
            {{ store.getters.getUserName }}
          </p>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import store from "@/store";
function logout() {
  store.dispatch("userLogout");
}
</script>
<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
};
</script>
