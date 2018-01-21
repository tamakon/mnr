<template>
    <div id="root">
        <the-global-header />
        <router-view></router-view>
        <the-global-footer />
    </div>
</template>

<script>
    import TheGlobalHeader from '../contents/TheGlobalHeader.vue'
    import TheGlobalFooter from '../contents/TheGlobalFooter.vue'

    export default {
        components: {
            TheGlobalHeader,
            TheGlobalFooter,
        }
    }
</script>