<template>
    <div id="news">
        <the-hero-header
            img-source="https://www.pakutaso.com/shared/img/thumb/PAK86_codeing20140517.jpg"
            title="News"
            description="">
        </the-hero-header>
        <div class="contents">
            <h2>お知らせ一覧</h2>
            <card-link v-for="(link, idx) in links"
                :key="`${link.link}-${idx}`"
                :link="link.link"
                :title="link.title"
                :detail="link.detail"
            />
        </div>
    </div>
</template>

<script>
    import TheHeroHeader from '../contents/TheHeroHeader.vue'
    import CardLink from '../contents/CardLink.vue'

    export default {
        data() {
            const links = [
                {
                    link: "./product/secretary",
                    title: "MNechoを発表",
                    detail: "2018年1月29日"
                },
                {
                    link: "./product/vrc",
                    title: "FaceLookを発表",
                    detail: "2017年3月18日"
                },
                {
                    link: "./news/20170116",
                    title: "代表取締役社長 原口の取材記事が掲載されました！",
                    detail: "2017年1月16日"
                },
                {
                    link: "./news/20161227",
                    title: "年末年始営業日のお知らせ",
                    detail: "2016年12月27日"
                },
                {
                    link: "./product/miner",
                    title: "労働から開放するMiNeRを発表",
                    detail: "2016年11月24日"
                },
            ];
            return {
                links
            }
        },
        components: {
            TheHeroHeader,
            CardLink,
        }
    }
</script>
