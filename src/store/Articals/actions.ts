import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { ArticalState } from "./types";

axios.defaults.baseURL = process.env.VUE_APP_REAL_WORLD_API_URL;

export const actions: ActionTree<ArticalState, RootState> = {
  getAllArticles(context) {
    console.log("axios", axios.defaults);
    axios.get("/articles").then((res) => {
      context.commit("SET_ARTICLES", res.data);
    });
  },
};
