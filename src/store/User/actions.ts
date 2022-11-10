import router from "@/router";
import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UserMutations } from "./mutation";
import { UserState } from "./types";

axios.defaults.baseURL = process.env.VUE_APP_REAL_WORLD_API_URL;

export const actions: ActionTree<UserState, RootState> = {
  async userLogin(context, params) {
    await axios
      .post("/users/login", { user: params })
      .then((res) => {
        res?.data?.user ? router.push("/") : false;
      })
      .catch((e) => {
        context.commit("SET_USER_ERROR", e?.response?.data);
      });
  },
  userRegister(context, params) {
    console.log("Inside Register");
    axios
      .post("/users", { user: params })
      .then((res) => {
        res?.data?.user ? router.push("/") : false;
      })
      .catch((e) => {
        context.commit("SET_USER_ERROR", e?.response?.data);
      });
  },
};
