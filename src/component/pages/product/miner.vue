<template>
    <div id="miner">
        <div class="contents">
            <h1>マイナー</h1>
            <div>
                <p>労働からの解放</p>
            </div>
            <h2>製品について</h2>
            <full-width-iframe
                style="width:100%"
                src="https://www.youtube.com/embed/G0jg422FM6M?rel=0&amp;controls=0">
            </full-width-iframe>
            <div>
                <p>contentsの説明</p>
                <p>contentsの説明</p>
                <p>contentsの説明</p>
            </div>
        </div>
        <the-global-footer />
    </div>
</template>

<script>
    import FullWidthIframe from '../../contents/FullWidthIframe.vue'
    import TheGlobalFooter from '../../contents/TheGlobalFooter.vue'

    export default {
        components: {
            FullWidthIframe,
            TheGlobalFooter
        }
    }
</script>
<style scoped>
.contents {
    padding-top: 40px;
}
</style>
