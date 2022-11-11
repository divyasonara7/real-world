<template>
  <Header />
  <router-view :key="$route.fullPath" />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/header.vue";
import Footer from "@/components/footer.vue";
export default defineComponent({
  components: {
    Header,
    Footer,
  },
});
</script>
