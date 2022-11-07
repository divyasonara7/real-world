<template>
  <div
    class="article-preview"
    v-for="article in getAllArticles"
    :key="article.slug"
  >
    <div class="article-meta">
      <a href="#"><img :src="article.author.image" /></a>
      <div class="info">
        <a href="" class="author">{{ article.author.username }}</a>
        <span class="date">
          {{ moment(article.createdAt).format("MMMM Do") }}
        </span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>{{ article.slug }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </a>
  </div>
</template>
<script lang="ts">
import store from "@/store";
import { getters } from "@/store/User/getters";
import { UserMutations } from "@/store/User/mutation";
import { computed, defineComponent, onMounted } from "vue";
import moment from "moment";

export default defineComponent({
  setup() {
    onMounted(() => {
      store.dispatch("getAllArticles");
    });

    const getAllArticles = computed({
      // getter
      get() {
        console.log("getters", store.getters.getAllArticles.articles);
        return store.getters.getAllArticles.articles;
      },
      // setter
      set(newValue) {
        store.commit(UserMutations.SET_USERNAME, newValue);
      },
    });
    return {
      getAllArticles,
      moment,
    };
  },
});
</script>
