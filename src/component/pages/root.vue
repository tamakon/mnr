<template>
    <div id="root">
        <the-global-header />
        <router-view></router-view>
        <!-- the-global-footerのイメージです。完成品ができたら差し替えてください。 -->
        <div style="background-color: darkcyan; heigth:30px; color:white">Copyright ©Mind network revolution.</div>
    </div>
</template>

<script>
    import TheGlobalHeader from '../contents/TheGlobalHeader.vue'

    export default {
        components: {
            TheGlobalHeader,
        }
    }
</script>