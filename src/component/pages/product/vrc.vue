<template>
    <div id="vrc">
        <div class="contents">
            <h1>〜名称考え中〜</h1>
            <div>
                <p>この製品は、貴方が抱える日頃の人間関係で発生するストレスから解放させます。</p>
            </div>
            <p>〜名称考え中〜について知る</p>
            <full-width-iframe
                style="width:100%"
                src="https://www.youtube.com/embed/G0jg422FM6M?rel=0&amp;controls=0">
            </full-width-iframe>
            <h2>製品について</h2>
            <div>以下の2つの効果を保証します</div>
            <div>
                <h3>常に最高のポテンシャルを保てます</h3>
                <p>好きなあの人が見ている場だとやる気が出ることはありませんか。私たちはその感覚を大事にしています。これをつけることでいい感じになります。</p>
                <h3>外面に囚われることから解放されます</h3>
                <p>第一印象がその人の評価の殆どを決めると言われています。一度定まった第一印象はその人に対しての対応という形で多くの影響を与えます。これを装着することでこう言ったつまらない思考から解放されるのです。</p>
            </div>
            <rectangle-button value="製品購入"/>
            <span class="vrc-comments">※当製品は現在製造中止しております。</span>
        </div>
    </div>
</template>

<script>
    import FullWidthIframe from '../../contents/FullWidthIframe.vue'
    import RectangleButton from '../../contents/RectangleButton.vue'

    export default {
        components: {
            FullWidthIframe,
            RectangleButton,
        }
    }
</script>
<style scoped>
h3::before {
  content: '\002713';
  color: #00ADB5;
}

.vrc-comments {
    color: gray;
}
</style>
