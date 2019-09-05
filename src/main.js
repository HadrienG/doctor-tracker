import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Settings from "./components/Settings.vue";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    { path: "/", name: "timer", component: App },
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
