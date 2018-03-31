<template>
    <div id="info">
        <the-hero-header
            img-source="https://www.pakutaso.com/shared/img/thumb/002kumakichi0327_TP_V.jpg"
            title="Info"
            description="">
        </the-hero-header>
        <div class="contents">
            <h2>会社情報</h2>
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
                    link: "./concept",
                    title: "企業理念",
                    detail: "「mind network revolution」 とは？"
                },
                {
                    link: "./member",
                    title: "メンバー紹介",
                    detail: "”MNR”を現実にする"
                },
                {
                    link: "./recruit",
                    title: "採用情報",
                    detail: "共に理想を目指しませんか？"
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
