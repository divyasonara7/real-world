<template>
  <div class="article-meta">
    <router-link
      :to="{
        params: { username: article.author.username },
      }"
    >
      <img :src="article.author.image" />
    </router-link>
    <div class="info">
      <router-link
        :to="{
          params: { username: article.author.username },
        }"
        class="author"
      >
        {{ article.author.username }}
      </router-link>
      <span class="date">{{ article.createdAt }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: "ArticleMeta",
};
</script>
<script lang="ts" setup>
import { ref } from "vue";
import { Artical } from "@/store/Articals/types";
import { defineProps } from "vue";

const props = defineProps<{
  article: Artical;
}>();
</script>
