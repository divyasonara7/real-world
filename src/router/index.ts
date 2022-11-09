import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Article from "@/views/article.vue";
import Signin from "@/views/login.vue";
import SignUp from "@/views/register.vue";

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
  {
    path: "/signin",
    name: "signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
