<template>
    <div id="news">
        <the-hero-header
            img-source="https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/hero-news.jpg?alt=media&token=26e25c21-4f6f-4aaf-9cf9-57e1da489bb4"
            title="News"
            description="">
        </the-hero-header>
        <div class="contents">
            <h2>お知らせ一覧</h2>
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
    import CardLink from '../contents/CardLink.vue'

    export default {
        data() {
            const links = [
                {
                    link: "./product/vrc",
                    title: "<<製品名>>を発表",
                    detail: "2018年4月15日"
                },
                {
                    link: "",
                    title: "<<製品名>>の紹介記事が掲載されました！",
                    detail: "2018年3月18日"
                },
                {
                    link: "",
                    title: "代表取締役社長 原口の取材記事が掲載されました！",
                    detail: "2018年2月5日"
                },
                {
                    link: "",
                    title: "年末年始営業日のお知らせ",
                    detail: "2017年12月27日"
                },
                {
                    link: "./product/miner",
                    title: "労働から開放する<<製品名>>を発表",
                    detail: "2017年11月24日"
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
