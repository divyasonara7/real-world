import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UserMutations } from "./mutation";
import { UserState } from "./types";

axios.defaults.baseURL = process.env.VUE_APP_REAL_WORLD_API_URL;

export const actions: ActionTree<UserState, RootState> = {
  userLogin(context, params) {
    console.log("Reach Here.........", params);
    axios.post("/users/login", { user: params }).then((res) => {
      return res?.data?.user;
    });
  },
  userRegister(context, params) {
    axios.post("/users", { user: params }).then((res) => {
      console.log("Response", res);
      return res?.data?.user;
    });
  },
};
