import { GetterTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";

export const getters: GetterTree<UserState, RootState> = {
  getUserName(state): string {
    return state.username;
  },
  getUserErrors(state) {
    return state.errors;
  },

  isLogin(state) {
    return state.isLogin;
  },
  getUserImage(state) {
    return state.image;
  },
};
