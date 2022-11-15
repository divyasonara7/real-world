<template>
  <ArticleMeta :article="article">
    <template v-if="!isMyArticle">
      <ProfileFollowButton
        :username="article.author.username"
        :following="article.author.following"
      />
      &nbsp;&nbsp;
      <ArticleFavoriteButton
        :favorited="article.favorited"
        :favorites-count="article.favoritesCount"
        :slug="article.slug"
        :is-with-description="true"
      />
    </template>
    <template v-else>
      <router-link to="/" class="btn btn-outline-secondary btn-sm">
        <i class="ion-edit"></i>
        Edit Article
      </router-link>
      &nbsp;&nbsp;
      <button class="btn btn-outline-danger btn-sm" @click="deleteArticle">
        <i class="ion-trash-a"></i>
        Delete Article
      </button>
    </template>
  </ArticleMeta>
</template>

<script lang="ts" setup>
import { Artical } from "@/store/Articals/types";
import { computed, defineProps } from "vue";
import ArticleMeta from "@/components/article-meta.vue";
import store from "@/store";
import { artical } from "@/store/Articals";
import ProfileFollowButton from "@/components/profile-follow-button.vue";
import ArticleFavoriteButton from "@/components/article-favorite-button.vue";

const props = defineProps<{
  article: Artical;
}>();

const currentUser = computed(() => JSON.parse(store.getters.getCurrentUser));
const isMyArticle = computed(() => {
  return props.article.author.username === currentUser.value.username
    ? true
    : false;
});
const deleteArticle = () => {
  console.log("Article deleted successfully");
};
</script>
