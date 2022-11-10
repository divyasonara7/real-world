<template>
  <Header :isLogin="isLogin" />
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Header from "./components/header.vue";
import Footer from "@/components/footer.vue";
export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup() {
    const isLogin = computed(() => {
      return localStorage.getItem("username") === null ? false : true;
    });

    return {
      isLogin,
    };
  },
});
</script>
