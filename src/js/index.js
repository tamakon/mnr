import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../component/app.vue'
import Index from '../component/index.vue'
import PreRelease from '../component/pre-release.vue'

Vue.use(VueRouter);

new Vue({
    el: "#app",
    router: new VueRouter({
        routes: [
            {path: "/", component: Index},
            {path: "/pre-release", component: PreRelease}
        ]
    }),
    render: h => h(App)
});