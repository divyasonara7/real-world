import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutation";
import { actions } from "./actions";

export const state: UserState = {
  username: "",
  email: "",
  password: "",
  errors: [],
  image: "",
  isLogin: false,
};

export const user: Module<UserState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
