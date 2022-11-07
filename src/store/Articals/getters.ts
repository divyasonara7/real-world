import { GetterTree } from "vuex";
import { RootState } from "../types";
import { ArticalState } from "./types";

export const getters: GetterTree<ArticalState, RootState> = {
  getAllArticles(state) {
    return state.articles;
  },
};
