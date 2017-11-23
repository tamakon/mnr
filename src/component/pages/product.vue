<template>
    <div id="product">
        <the-global-header />
        <the-hero-header
            img-source="https://www.pakutaso.com/shared/img/thumb/PAK85_coding15095904_TP_V.jpg"
            title="Product"
            description="">
        </the-hero-header>
        <div>
            <p>いい感じの製品説明を書く予定</p>
        </div>
        <full-width-iframe
            style="width:100%"
            src="https://www.youtube.com/embed/G0jg422FM6M?rel=0&amp;controls=0">
        </full-width-iframe>
        <p>いい感じの説明</p>
        <p>いい感じの説明</p>
        <p>いい感じの説明</p>
    </div>
</template>

<script>
    import TheGlobalHeader from '../contents/TheGlobalHeader.vue'
    import TheHeroHeader from '../contents/TheHeroHeader.vue'
    import FullWidthIframe from '../contents/FullWidthIframe.vue'

    export default {
        components: {
            TheGlobalHeader,
            TheHeroHeader,
            FullWidthIframe
        }
    }
</script>