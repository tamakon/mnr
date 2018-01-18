<template>
    <div id="concept">
        <the-hero-header
                img-source="https://www.pakutaso.com/shared/img/thumb/mizuho17810DSC_0264_TP_V.jpg"
                title="Concept"
                description="">
        </the-hero-header>
        <section>
            <h2>企業理念</h2>
            <p>TODO</p>
        </section>
        <section>
            <h2>社長の言葉</h2>
            <h3>アウトライン</h3>
            <ul>
                <li>
                    <div>近年の情勢</div>
                    <ul>
                        <li>自分の身近な体験(オプション)</li>
                        <li>iPhoneの普及とイノベーション、消費形態の変化(多くの企業はリーマンショック系だがウチラの世代アレンジにする)</li>
                        <li>傾向による未来予測</li>
                    </ul>
                </li>
                <li>
                    <div>対応としてのビジョンと哲学</div>
                    <ul>
                        <li>未来予測に対する感情・欲望とそれらが合成されたビジョン</li>
                        <li>ビジョンとしての「心のネットワーク革命」に対する論理付け</li>
                        <li>ビジョン実装を落とし込んだ商品案の説明</li>
                    </ul>
                </li>
                <li>信念と呼びかけ</li>
            </ul>
            <h3>廃棄パターン</h3>
            <ul>
                <li>業績自慢</li>
                <li>成功してることに対する分析と考察</li>
                <li>年度/中期目標の説明</li>
                <li>体制の説明</li>
            </ul>
        </section>
    </div>
</template>

<script>
    import TheHeroHeader from '../contents/TheHeroHeader.vue'

    export default {
        components: {
            TheHeroHeader
        }
    }
</script>