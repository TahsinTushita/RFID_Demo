import { createRouter, createWebHistory } from "vue-router";
import DCTags from "../views/DCTags.vue";

const routes = [
  {
    path: "/",
    name: "DCTags",
    component: DCTags,
  },
  {
    path: "/dcStyles",
    name: "DCStyles",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DCStyles.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
