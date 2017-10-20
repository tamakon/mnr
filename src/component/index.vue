<template>
    <div id="index">
        <global-header></global-header>
        <hero-header
            img-source="https://www.pakutaso.com/shared/img/thumb/ransomwareIMGL1908_TP_V.jpg"
            title="Index"
            description="最高の価値をあなたに">
        </hero-header>
    </div>
</template>

<script>
    import GlobalHeader from './global-header.vue'
    import HeroHeader from './hero-header.vue'

    export default {
        components: {
            GlobalHeader,
            HeroHeader
        }
    }
</script>