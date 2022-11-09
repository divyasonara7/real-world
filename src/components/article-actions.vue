<template>
  <div class="article-meta" v-if="article">
    <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
    <div class="info">
      <a href="" class="author">{{ article?.author?.username }}</a>
      <span class="date">{{
        moment(article?.createdAt).format("MMM Do YYYY")
      }}</span>
    </div>
    <button class="btn btn-sm btn-outline-secondary">
      <i class="ion-plus-round"></i>
      &nbsp; Follow {{ article?.author?.username }}
      <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <button class="btn btn-sm btn-outline-primary">
      <i class="ion-heart"></i>
      &nbsp; Favorite Post <span class="counter">(29)</span>
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: "ArticleActions",
};
</script>
<script lang="ts" setup="props">
// eslint-disable-next-line vue/no-export-in-script-setup
import { Artical } from "@/store/Articals/types";
import { defineProps } from "vue";
import moment from "moment";
// eslint-disable-next-line vue/no-export-in-script-setup
const props = defineProps<{
  article: Artical;
}>();
</script>
