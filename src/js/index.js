import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../component/app.vue'
import Index from '../component/pages/index.vue'
import PreRelease from '../component/pages/news.vue'
import Product from '../component/pages/product.vue'
import Miner from '../component/pages/product/miner.vue'

Vue.use(VueRouter);

new Vue({
    el: "#app",
    router: new VueRouter({
        routes: [
            {path: "/", component: Index},
            {path: "/news", component: PreRelease},
            {path: "/product", component: Product},
            {path: "/product/miner", component: Miner},
        ]
    }),
    render: h => h(App)
});