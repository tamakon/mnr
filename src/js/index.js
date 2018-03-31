import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../component/app.vue'
import Root from '../component/pages/root.vue'
import NotFound from '../component/pages/notfound.vue'
import Index from '../component/pages/index.vue'
import Concept from "../component/pages/concept.vue"
import News from '../component/pages/news.vue'
import Detail from '../component/pages/news/detail.vue'
import Product from '../component/pages/product.vue'
import Miner from '../component/pages/product/miner.vue'
import Secretary from '../component/pages/product/secretary.vue'
import Vrc from '../component/pages/product/vrc.vue'
import Recruit from '../component/pages/recruit.vue'
import Contact from '../component/pages/contact.vue'
import Info from '../component/pages/info.vue'
import Member from '../component/pages/member.vue'

Vue.use(VueRouter);

new Vue({
    el: "#app",
    router: new VueRouter({
        routes: [
            { path: "/", component: Root,
                children: [
                    { path: "/", component: Index },
                    { path: "concept", component: Concept },
                    { path: "news", component: News },
                    { path: "news/:id", component: Detail },
                    { path: "product", component: Product },
                    { path: "product/miner", component: Miner },
                    { path: "product/vrc", component: Vrc },
                    { path: "product/secretary", component: Secretary },
                    { path: "contact", component: Contact },
                    { path: "recruit", component: Recruit },
                    { path: "member", component: Member },
                    { path: "info", component: Info },
                    { path: "404", component: NotFound },
                    { path: "*", redirect: "404" },
                ]
            },
        ],
        scrollBehavior (_to, _from, savedPosition) {
            if (savedPosition) {
              return savedPosition
            } else {
              return { x: 0, y: 0 }
            }
          }
    }),
    render: h => h(App)
});
