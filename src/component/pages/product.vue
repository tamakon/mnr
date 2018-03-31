<template>
    <div id="product">
        <the-hero-header
            img-source="https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/top-product.jpg?alt=media&token=b6239a45-5b67-4d8c-832f-c7f95d87cfb7"
            title="Product"
            description="">
        </the-hero-header>
        <div class="contents">
            <div>
                <p>私たちは人々が抱えるしがらみから解放する事をミッションとし、あらゆるしがらみから開放する術を提供します。</p>
            </div>
            <h2>製品一覧</h2>
            <card-link v-for="link in links" :key="link.link"
                :link="link.link"
                :title="link.title"
                :detail="link.detail"
            />
        </div>
    </div>
</template>

<script>
    import TheHeroHeader from '../contents/TheHeroHeader.vue'
    import FullWidthIframe from '../contents/FullWidthIframe.vue'
    import CardLink from '../contents/CardLink.vue'

    export default {
        data() {
            const links = [
                {
                link: "./product/vrc",
                title: "<<名前未定>>",
                detail: "<<名前未定>>は人間関係で起きるストレスから解放します。"
                },
                {
                    link: "./product/secretary",
                    title: "AI秘書",
                    detail: "AI秘書はあなたの生活を最適化させるパートナーとなる存在です"
                },
                {
                    link: "./product/miner",
                    title: "マイナー",
                    detail: "マイナーは貴方の自由な時間を蝕む労働から解放します。"
                },
            ];
            return {
                links
            }
        },
        components: {
            TheHeroHeader,
            FullWidthIframe,
            CardLink,
        }
    }
</script>
