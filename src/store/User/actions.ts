import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UserMutations } from "./mutation";
import { UserState } from "./types";

export const actions: ActionTree<UserState, RootState> = {
  getArticles(context): any {
    console.log("Hello call from actions");
    return fetch("https://api.realworld.io/api/articals")
      .then((data) => data.json())
      .then((data) => {
        // context.commit(UserMutations.SET_USERNAME )
        console.log("Data", data);
        return data;
      });
  },
};
