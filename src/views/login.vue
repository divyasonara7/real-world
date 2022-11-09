<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <AuthPage :mode="mode" />
</template>

<script lang="ts">
import AuthPage, { AuthPageMode } from "@/components/AuthPage.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    AuthPage,
  },
  setup() {
    const mode = "Login";
    return {
      mode,
    };
  },
});
</script>
