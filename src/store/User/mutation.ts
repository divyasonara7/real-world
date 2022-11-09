import { MutationTree } from "vuex";
import { UserState } from "./types";

export enum UserMutations {
  SET_USERNAME = "SET_USERNAME",
  SET_USER_ERROR = "SET_USER_ERROR",
}
export const mutations: MutationTree<UserState> = {
  [UserMutations.SET_USERNAME](state, payload: string) {
    state.username = payload;
  },
  [UserMutations.SET_USER_ERROR](state, payload) {
    state.errors = payload;
  },
};
