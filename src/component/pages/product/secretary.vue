<template>
    <div id="secretary">
        <div class="contents">
            <h1>MNecho</h1>
            <div>
                <p>MNechoはあなたの生活を最適化させるパートナーとなる存在です。</p>
            </div>
            <h2>製品について</h2>
            <div>
                <p>多種多様と言われるこの時代、選択の幅も広がっています。これからの時代では私たちは本当にやるべきこと、やりたいことを見極めて行動を起こす必要があります。</p>
                <p>このMNechoでは一人一人のやるべきこと、やりたいことを見極めあなたがやりたくないこと、やる必要ことがないことを肩代わりし、やるべきことを寄り添って示してくれます。</p>
                <p>まるで本物の人間の秘書であるかのような、最愛のパートナーかのようなそんなシステムがMNechoです。</p>
            </div>
            <h2>個性あるキャラクター「卑弥呼」</h2>
            <div>
                <p>貴方のパートナーとなる卑弥呼について紹介します。</p>
                <h3>特徴</h3>
                <div>
                    <p>卑弥呼は貴方を好機へ導きます。</p>
                </div>
            </div>
            <h2>導入手順</h2>
            <div>
                <h4>人間と同じように最大2週間の試用期間をいただきます。</h4>
                <p>ここでの目的はあなたの普段の大変忙しい生活をこれから共に働く秘書に理解してもらう時間となります。</p>
                <h4>ようこそ、最適化された最高に価値のある生活</h4>
                <p>あなたのことを十分に理解した秘書はあなたの為に働きます。</p>
                <p>あなたが今まで行ってきていたやるストレスが掛かる事象、やる必要がない事柄、それらを全て秘書が肩代わりしてくれます。</p>
                <p>一方で、あなたにワクワクする生産性ある事象を提示してくれます。</p>
                <p>あなたは価値のあることだけを楽しみを持って行い続ければよくなります。</p>
                <p>そうした時、あなたはもう、この秘書がいない生活は想像できなくなっていることでしょう。</p>
            </div>
            <h2>はじめよう、秘書と共に過ごす生活</h2>
            <div>
                <p>まずはお気軽にお問い合わせください。</p>
                <rectangle-button value="お問い合わせ" v-on:onClick="toContact" />
            </div>
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
        },
        methods: {
            toContact() {
                this.$router.push({ path: '/contact' })
            }
        }
    }
</script>
<style scoped>
h4::before {
  content: '\002713';
  color: #00ADB5;
}
</style>
