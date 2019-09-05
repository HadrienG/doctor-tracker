import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Timer from "./components/Timer.vue";
import Settings from "./components/Settings.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    { path: "/", name: "timer", component: Timer },
    { path: "/settings", name: "settings", component: Settings }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: "#app",
    router,
    template: "<App/>",
    components: { App }
});
