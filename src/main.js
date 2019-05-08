import Vue from "vue";
import App from "./App.vue";
// import VueRouter from "vue-router";

// Vue.use(VueRouter);
Vue.config.productionTip = false;

// const router = new VueRouter({
//   routes: [
//     { path: "/", component: Timer },
//     { path: "/settings", component: Settings }
//   ]
// });

new Vue({
  // router
  render: h => h(App)
}).$mount("#app");
