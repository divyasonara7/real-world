<template>
  <Loader v-if="!getAllArticles" />
  <div
    class="article-preview"
    v-for="article in getAllArticles"
    :key="article.slug"
    v-else
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
    <div
      @click="router.push({ name: 'article', params: { slug: article.slug } })"
      class="preview-link"
    >
      <h1>{{ article.slug }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
    </div>
    <div class="pull-xs-right">
      <span
        v-for="tag in article.tagList"
        :key="tag"
        class="tag-pill tag-default tag-outline"
      >
        {{ tag }}
      </span>
      <span v-if="nonVisibleTagsNumber(article) > 0">
        ... and {{ nonVisibleTagsNumber(article) }} more.
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import store from "@/store";
import { UserMutations } from "@/store/User/mutation";
import { computed, defineComponent, onMounted } from "vue";
import moment from "moment";
import router from "@/router";
import Loader from "@/components/Loader.vue";
const MAX_VISIBLE_TAGS = 5;
export default defineComponent({
  components: {
    Loader,
  },
  setup() {
    onMounted(() => {
      store.dispatch("getAllArticles");
    });

    const getAllArticles = computed({
      // getter
      get() {
        return store.getters.getAllArticles.articles;
      },
      // setter
      set(newValue) {
        store.commit(UserMutations.SET_USERNAME, newValue);
      },
    });

    const visibleTags = (article: { tagList: string }) => {
      return article.tagList.slice(0, MAX_VISIBLE_TAGS);
    };

    const nonVisibleTagsNumber = (article: { tagList: string }) => {
      return article.tagList.length - MAX_VISIBLE_TAGS;
    };

    return {
      getAllArticles,
      moment,
      visibleTags,
      nonVisibleTagsNumber,
      router,
    };
  },
});
</script>
