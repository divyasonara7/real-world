import { MutationTree } from "vuex";
import { ArticalState } from "./types";

export const mutations: MutationTree<ArticalState> = {
  SET_ARTICLES(state, payload) {
    // console.log("Articals", payload);
    state.articles = payload;
  },
};
