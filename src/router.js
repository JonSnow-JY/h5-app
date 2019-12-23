import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/inquiry",
      name: "inquiry",
      component: () => import("./views/Inquiry.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/Test.vue")
    }
  ]
});
