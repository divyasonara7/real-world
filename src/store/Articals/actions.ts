import router from "@/router";
import { notifyErrors, notifySuccess } from "@/utils/notification";
import axios from "axios";
import { ActionTree } from "vuex";
import { RootState } from "../types";
import { ArticalState } from "./types";
axios.defaults.baseURL = process.env.VUE_APP_REAL_WORLD_API_URL;

export const actions: ActionTree<ArticalState, RootState> = {
  getAllArticles(context) {
    axios.get("/articles").then((res) => {
      context.commit("SET_ARTICLES", res.data);
    });
  },
  getArticleBySlug(context, slug) {
    axios.get(`/articles/${slug}`).then((res) => {
      context.commit("SET_ARTICLE", res.data);
    });
  },
  getArticleComment(context, slug) {
    axios.get(`/articles/${slug}/comments`).then((res) => {
      context.commit("SET_ARTICLE_COMMENTS", res.data);
    });
  },
  async AddArticle(context, payload) {
    await axios
      .post(`/articles`, {
        article: payload,
      })
      .then((res) => {
        if (res.data.article) {
          notifySuccess("Article created successfully, redirecting...");
          router.push({
            name: "article",
            params: { slug: res.data.article.slug },
          });
        } else {
          notifyErrors(["Something went to wrong"]);
        }
      })
      .catch((e) => {
        context.commit("SET_ARTICLE_ERRORS", e?.response?.data);
      });
  },
};
