import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateView from "../views/CreateView.vue";
import RestaurantView from "../views/RestaurantView.vue";
import DetailView from "../views/DetailView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: RestaurantView,
  },
  {
    path: "/restaurant/:restaurant_id?",
    name: "restaurant_detail",
    component: DetailView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
