<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { computed, defineComponent, handleError, onMounted } from "vue";
import Header from "./components/header.vue";
import Footer from "@/components/footer.vue";
import store from "./store";
import { UserMutations } from "./store/User/mutation";
export default defineComponent({
  components: {
    Header,
    Footer,
  },

  setup() {
    const getMessage = computed({
      // getter
      get() {
        return store.getters.getAllArticles;
      },
      // setter
      set(newValue) {
        store.commit(UserMutations.SET_USERNAME, newValue);
      },
    });
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
