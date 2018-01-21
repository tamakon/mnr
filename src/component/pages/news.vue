<template>
    <div id="news">
        <the-global-header />
        <div>ニュース</div>
        <the-global-footer />
    </div>
</template>

<script>
    import TheGlobalHeader from '../contents/TheGlobalHeader.vue'
    import TheGlobalFooter from '../contents/TheGlobalFooter.vue'

    export default {
        components: {
            TheGlobalHeader,
            TheGlobalFooter
        }
    }
</script>
