import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Article from "@/views/article.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/article/:slug",
    name: "article",
    component: Article,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
