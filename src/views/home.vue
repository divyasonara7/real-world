<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="home-page">
    <Banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div>
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link disabled" href="">Your Feed</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="">Global Feed</a>
                </li>
              </ul>
            </div>
            <ArticlePreview />
          </div>
        </div>
        <div class="col-md-3">
          <PopularTags />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import PopularTags from "@/components/popular-tags.vue";
import ArticlePreview from "@/components/article-preview.vue";
import Banner from "@/components/banner.vue";
export default defineComponent({
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PopularTags,
    // eslint-disable-next-line vue/no-unused-components
    ArticlePreview,
    Banner,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onMounted(() => {});
  },
});
</script>
