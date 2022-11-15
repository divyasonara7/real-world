import { MutationTree } from "vuex";
import { UserState } from "./types";

export enum UserMutations {
  SET_USERNAME = "SET_USERNAME",
  SET_USER_ERROR = "SET_USER_ERROR",
  SET_USER_IMAGE = "SET_USER_IMAGE",
  SET_TOKEN = "SET_TOKEN",
}
export const mutations: MutationTree<UserState> = {
  [UserMutations.SET_USERNAME](state, payload: string) {
    state.username = payload;
  },
  [UserMutations.SET_USER_ERROR](state, payload) {
    state.errors = payload;
  },
  [UserMutations.SET_USER_IMAGE](state, payload) {
    state.image = payload;
  },
  [UserMutations.SET_TOKEN](state, payload) {
    state.token = payload;
  },
};
