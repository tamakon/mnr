<template>
    <div id="index">
        <the-hero-header
            img-source="https://www.pakutaso.com/shared/img/thumb/ransomwareIMGL1908_TP_V.jpg"
            title="Index"
            description="最高の価値をあなたに">
        </the-hero-header>
        <the-global-footer />
    </div>
</template>

<script>
    import TheHeroHeader from '../contents/TheHeroHeader.vue'
    import TheGlobalFooter from '../contents/TheGlobalFooter.vue'

    export default {
        components: {
            TheHeroHeader
        }
    }
</script>