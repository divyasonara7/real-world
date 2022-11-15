import { Module } from "vuex";
import { RootState } from "../types";
import { Artical, ArticalState } from "./types";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
// export const state: ArticalState = Array<Artical>;

export const state: ArticalState = {
  articles: [],
  article: [],
  articleComments: [],
  Errors: [],
};

export const artical: Module<ArticalState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};
