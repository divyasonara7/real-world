<template>
  <div class="card">
    <div class="card-block">
      c: {{ comments }}
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
    </div>
    <div class="card-footer">
      <a href="" class="comment-author">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
      </a>
      &nbsp;
      <a href="" class="comment-author">Jacob Schmidt</a>
      <span class="date-posted">Dec 29th</span>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "CommentDisplay",
};
</script>
<script lang="ts" setup>
import store from "@/store";
import { artical } from "@/store/Articals";
import { Artical } from "@/store/Articals/types";
import { computed, defineProps, onMounted, ref, watch } from "vue";
const props = defineProps<{
  article: Artical;
}>();
const slug = ref();
watch(
  () => props.article,
  async (value) => {
    await store.dispatch("getArticleComment", value.slug);
    console.log("comments", store.getters.getArticleComment);
  }
);
onMounted(() => {
  store.dispatch("getArticleComment", slug.value);
});
const comments = computed(() => store.getters.getArticleComment);
</script>
