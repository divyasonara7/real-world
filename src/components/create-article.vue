<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <CommonErrors :errors="errors" />
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  required="true"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  required="true"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  required="true"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="tagList"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  required="true"
                />
                <div class="tag-list">
                  <span
                    v-for="tag in existingTagList"
                    :key="tag"
                    class="tag-default tag-pill ng-binding ng-scope"
                  >
                    <i class="ion-close-round"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="publish"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import router from "@/router";
import store from "@/store";
import Vue, { computed, ref } from "vue";
import CommonErrors from "./common-errors.vue";

const title = ref("");
const description = ref("");
const body = ref("");
const tagList = ref();
const existingTagList = ref();
const publish = () => {
  const article = {
    title: title.value,
    body: body.value,
    tagList: tagList.value,
    description: description.value,
  };
  store.dispatch("AddArticle", article);
};

const errors = computed(() => store.getters.getArticleErrors);
</script>
