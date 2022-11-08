<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article?.title }}</h1>
        <ArticleActions :article="article" />
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article?.body"></div>
      </div>

      <hr />

      <div class="article-actions">
        <ArticleActions :article="article" />
      </div>

      <div class="row">
        <ArticleComments
          :article="article"
          class="col-xs-12 col-md-8 offset-md-2"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ArticleActions from "@/components/article-actions.vue";
import ArticleComments from "@/components/article-comments.vue";
import router from "@/router";
import { useRoute } from "vue-router";
import { computed, defineComponent, onMounted } from "vue";
import store from "@/store";
export default defineComponent({
  components: { ArticleComments },
  setup() {
    // const router = useRouter();
    const route = useRoute();
    onMounted(async () => {
      await store.dispatch("getArticleBySlug", route.params.slug);
    });

    const article = computed(() => store.getters?.getAllArticleBySlug?.article);

    return {
      article,
    };
  },
});
</script>
