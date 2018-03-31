<template>
    <div id="miner">
        <div class="contents">
            <h1>MiNeR</h1>
            <div>
                <p>この製品は、人生の多くを占めるであろう労働から貴方を解放させます。</p>
            </div>
            <h2>製品について</h2>
            <div>
                <h3>MiNeRを使う理由</h3>
                <p>
                    基本的に、労働というのは普段の生活において一日の約三割を占めています。
                    そのため、労働というのは人間の生活においてあなたが生きる意味につながっています。
                    あなたが労働をするのは何のためでしょうか。お金のため？
                    それであれば、その解決はMiNeRのほうが適していることでしょう。
                    MiNeRは労働を行わなくてもお金を得ることができる仕組みを提供します。
                </p>
                <h3>歩くだけでお金が溜まります</h3>
                <p>
                    MiNeRでお金を得る手段は様々ですが、簡単なのは歩くことです。
                    あなたが歩くと腕につけているMiNeRが反応し、歩いた分だけ仮想通貨のマイニングを行います。
                </p>
                <h3>生きる意味を変えよう！</h3>
                <p>
                    貴方はお金のためではなくもっと別のために生きることができるのです。
                    「労働」と言う名の柵から開放され、新しい人生の可能性を手に入れましょう!
                </p>
            </div>
            <rectangle-button value="製品購入"/>
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
</style>
