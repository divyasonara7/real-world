import { GetterTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";

export const getters: GetterTree<UserState, RootState> = {
  getUserName(): string | null {
    return localStorage.getItem("username");
  },
  getUserErrors(state) {
    return state.errors;
  },

  isLogin() {
    return localStorage.getItem("username") === null ? false : true;
  },
  getUserImage() {
    return localStorage.getItem("image");
  },
};
