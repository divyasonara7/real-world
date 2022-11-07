import { Module } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutation";
import { actions } from "./actions";

export const state: UserState = {
  name: "divya",
  email: "divyasonara@gmail.com",
  lastLogin: new Date(),
};

export const user: Module<UserState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
