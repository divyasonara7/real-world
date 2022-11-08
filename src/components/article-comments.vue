<template>
  <div>
    <commentAdd />
    <commentDisplay :article="article" />
  </div>
</template>
<script lang="ts">
export default {
  name: "ArticleComments",
};
</script>
<script lang="ts" setup>
import { Artical } from "@/store/Articals/types";
import { defineComponent, defineProps } from "vue";
import CommentDisplay from "@/components/commentDisplay.vue";
import commentAdd from "./comment-add.vue";
const props = defineProps<{
  article: Artical;
}>();
</script>
