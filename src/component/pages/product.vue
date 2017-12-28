<template>
    <div id="product">
        <the-hero-header
            img-source="https://www.pakutaso.com/shared/img/thumb/PAK85_coding15095904_TP_V.jpg"
            title="Product"
            description="">
        </the-hero-header>
        <div class="contents">
            <div>
                <p>私たちは人々が抱えるしがらみから解放する事をミッションとし、あらゆるしがらみから開放する術を提供します。</p>
            </div>
            <h2>製品一覧</h2>
            <card-link
                link="./product/vrc"
                title="<<名前未定>>"
                detail="<<名前未定>>は人間関係で起きるストレスから解放します。">
            </card-link>
            <card-link
                link="./product/miner"
                title="マイナー"
                detail="マイナーは貴方の自由な時間を蝕む労働から解放します。">
            </card-link>
        </div>
    </div>
</template>

<script>
    import TheHeroHeader from '../contents/TheHeroHeader.vue'
    import FullWidthIframe from '../contents/FullWidthIframe.vue'
    import CardLink from '../contents/CardLink.vue'

    export default {
        components: {
            TheHeroHeader,
            FullWidthIframe,
            CardLink
        }
    }
</script>