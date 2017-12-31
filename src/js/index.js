import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../component/app.vue'
import Index from '../component/pages/index.vue'
import News from '../component/pages/news.vue'
import Product from '../component/pages/product.vue'
import Miner from '../component/pages/product/miner.vue'
import Vrc from '../component/pages/product/vrc.vue'
import Contact from '../component/pages/contact.vue'

Vue.use(VueRouter);

new Vue({
    el: "#app",
    router: new VueRouter({
        routes: [
            {path: "/", component: Index},
            {path: "/news", component: News},
            {path: "/product", component: Product},
            {path: "/product/miner", component: Miner},
            {path: "/product/vrc", component: Vrc},
            {path: "/contact", component: Contact},
        ]
    }),
    render: h => h(App)
});