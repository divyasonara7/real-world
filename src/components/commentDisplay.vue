<template>
  <div class="card" v-for="comment in comments" :key="comment.id">
    <div class="card-block">
      <p class="card-text">
        {{ comment.body }}
      </p>
    </div>
    <div class="card-footer">
      <a href="" class="comment-author">
        <img :src="comment?.author?.image" class="comment-author-img" />
      </a>
      &nbsp;
      <a href="" class="comment-author">{{ comment?.author?.username }} </a>
      <span class="date-posted"
        >{{ moment(comment?.createdAt).format("MMM Do YYYY") }}
      </span>
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
import { Artical } from "@/store/Articals/types";
import { computed, defineProps, onMounted, ref } from "vue";
import moment from "moment";
const props = defineProps<{
  article: Artical;
}>();
const slug = ref();
onMounted(() => {
  store.dispatch("getArticleComment", props.article.slug);
});

const comments = computed(() => store.getters.getArticleComments);
</script>
