import router from "@/router";
import axios, { AxiosRequestConfig } from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { UserState } from "./types";
import auth from "@/utils/auth";
axios.defaults.baseURL = process.env.VUE_APP_REAL_WORLD_API_URL;
axios.defaults.headers.get.Accepts = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

const AuthInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const accessToken = localStorage.getItem("token");
  if (accessToken && config && config.headers) {
    config.headers.Authorization = `Token ${accessToken}`;
  }
  return config;
};

axios.interceptors.request.use(AuthInterceptor);

export const actions: ActionTree<UserState, RootState> = {
  async userLogin(context, params) {
    await axios
      .post("/users/login", { user: params })
      .then((res) => {
        if (res?.data?.user) {
          auth.setLocalStorage(res.data.user);
          router.push("/");
        }
      })
      .catch((e) => {
        context.commit("SET_USER_ERROR", e?.response?.data);
      });
  },
  async userRegister(context, params) {
    await axios
      .post("/users", { user: params })
      .then((res) => {
        if (res?.data?.user) {
          auth.setLocalStorage(res.data.user);
          router.push("/");
        }
      })
      .catch((e) => {
        context.commit("SET_USER_ERROR", e?.response?.data);
      });
  },
  userLogout(context) {
    auth.clearLocalStorage();
  },
};
