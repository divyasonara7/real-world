<template>
  <ul class="error-messages">
    <li v-for="(key, value) in errors" :key="key">
      {{ value.toString() }} {{ key.toString() }}
    </li>
  </ul>
</template>
<script lang="ts">
export default {
  name: "CommonErrors",
  props: ["errors"],
  setup(props) {
    const entries = props.errors ? Object.entries(props.errors) : [];
    const data = entries.map((key, val) => {
      return key;
    });

    return {
      data,
    };
  },
};
</script>
