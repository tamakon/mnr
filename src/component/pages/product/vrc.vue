<template>
    <div id="miner">
        <the-global-header />
        <div class="contents">
            <h1>〜名称考え中〜</h1>
            <div>
                <p>労働からの解放</p>
            </div>
            <h2>製品について</h2>
            <div>以下の３つの効果を保証します</div>
            <full-width-iframe
                style="width:100%"
                src="https://www.youtube.com/embed/G0jg422FM6M?rel=0&amp;controls=0">
            </full-width-iframe>
            <div>
                <h3>ああああああああああああ</h3>
                <p>contentsの説明</p>
                <p>contentsの説明</p>
                <p>contentsの説明</p>
                <h3>いいいいいいいいいいいい</h3>
                <p>contentsの説明</p>
                <h3>うえお</h3>
                <p>contentsの説明</p>
            </div>
        </div>
    </div>
</template>

<script>
    import TheGlobalHeader from '../../contents/TheGlobalHeader.vue'
    import FullWidthIframe from '../../contents/FullWidthIframe.vue'

    export default {
        components: {
            TheGlobalHeader,
            FullWidthIframe,
        }
    }
</script>
<style scoped>
h3::before {
  content: '\002713';
  color: darkcyan;
}

</style>