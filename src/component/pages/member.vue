<template>
    <div id="member">
        <the-hero-header
                img-source="https://www.pakutaso.com/shared/img/thumb/PAK93_toukyoueki20150112184649_TP_V.jpg"
                title="Staf"
                description="">
        </the-hero-header>
        <div class="contents">
            <section>
                <h2>メンバー</h2>
                    <h3>村山 隆</h3>
                    <p>
                        MiNeRの企画・立案から販売までをメインで担当しました。
                    </p>
                    <p>
                        ”歩いているだけでお金を稼ぐ”を実際に体現した本商品は、様々な人々に関わっていただきなんとか完成した「我が子」のような商品です。
                        ぜひ手にとってお試しください！
                    </p>
                    <div id="concept-ceo-message-author">
                        <img src="/img/face-haraguchi.png" width="150" height="150">
                        <div id="concept-ceo-message-author-role">MNR コンサルタント・コーダー</div>
                        <div id="concept-ceo-message-author-name">村山 隆</div>
                    </div>
                    <h3>master branch</h3>
                    <p>
                        test
                    </p>
                    <div id="concept-ceo-message-author">
                        <img src="/img/face-haraguchi.png" width="150" height="150">
                        <div id="concept-ceo-message-author-role">MNR システムディレクター</div>
                        <div id="concept-ceo-message-author-name">master branch</div>
                    </div>
            </section>
        </div>
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

<style scoped>
    h3::before {
        content: '\002713';
        color: #00ADB5;
    }
    #concept-ceo-message-author {
        margin: 16px auto;
        text-align: center;
    }
    #concept-ceo-message-author-role {
        margin: 6px;
        font-size: 12px;
    }
    #concept-ceo-message-author-name {
        margin: 6px;
        font-size: 12px;
    }
</style>
