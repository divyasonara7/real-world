import { MutationTree } from "vuex";
import { ArticalState } from "./types";

export const mutations: MutationTree<ArticalState> = {
  SET_ARTICLES(state, payload) {
    // console.log("Articals", payload);
    state.articles = payload;
  },
  SET_ARTICLE(state, payload) {
    // console.log("Articals", payload);
    state.article = payload;
  },
  SET_ARTICLE_COMMENTS(state, payload) {
    state.articleComments = payload.comments;
  },
};
