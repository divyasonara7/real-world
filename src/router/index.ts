import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/home.vue";
import Article from "@/views/article.vue";
import Signin from "@/views/login.vue";
import SignUp from "@/views/register.vue";
import auth from "@/utils/auth";
import CreateArticle from "@/components/create-article.vue";

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
  {
    path: "/add",
    name: "CreateArticle",
    component: CreateArticle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  if (!auth.isLogin() && to.name !== "signin") {
    return { name: "signin" };
  }
});

export default router;
