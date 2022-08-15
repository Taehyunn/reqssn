import Vue from "vue";
import VueRouter from "vue-router";
import Req_SSN from "@/pages/Req_SSN";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    component: Req_SSN,
    name: "reqSSN",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
