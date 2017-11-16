<template>
    <div id="index">
        <the-global-header />
        <the-hero-header
            img-source="https://www.pakutaso.com/shared/img/thumb/ransomwareIMGL1908_TP_V.jpg"
            title="Index"
            description="最高の価値をあなたに">
        </the-hero-header>
    </div>
</template>

<script>
    import TheGlobalHeader from '../contents/TheGlobalHeader.vue'
    import TheHeroHeader from '../contents/TheHeroHeader.vue'

    export default {
        components: {
            TheGlobalHeader,
            TheHeroHeader
        }
    }
</script>