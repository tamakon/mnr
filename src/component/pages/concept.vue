<template>
    <div id="concept">
        <the-hero-header
                img-source="https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/hero-concept.jpg?alt=media&token=e42fb053-39d6-46e7-a166-e9a3cae4638a"
                title="Concept"
                description="">
        </the-hero-header>
        <div class="contents">
            <section>
                <h2>企業理念</h2>
                <p>心のネットワーク革命を実現する</p>
                <p>コミュニケーションにおける苦しさを排除し、人と社会に平穏をもたらす</p>
            </section >
            <section>
                <h2>社長の言葉</h2>
                <p>
                    近年、iPhoneを始めとしたスマートフォンの普及とともに多くのイノベーションと人々の消費行動の変化が起きました。
                    また、スマートフォンでSNSを利用することで多くの人が情報の受信者であるだけでなく情報の発信者となりました。
                    そして現在は、スタンプや画像といった文章ではない方法でのコミュニケーションの形が発達しています。
                </p>
                <p>
                    このような総発信者化によって弊害もまた顕在化しました。
                    炎上やポリティカルコネクトレスへの配慮、ヘイトスピーチなど課題は山積みです。
                    しかし一方で、スタンプや画像といった記号化されたコミュニケーションでは
                    このような問題は発生していないように私は思うのです。
                    私たちは総発信者化によって発信する場を得たことで、
                    言葉でのコミュニケーションが不可能であることに気づいてきているのでは無いでしょうか。
                </p>
                <p>
                    私はこの傾向の先に、言葉や記号ではなく思念によって行われるコミュニケーションがあるのではないかと考えています。
                    そして、インターネットが普及した時代にネットワーク革命が起こったのと同じように、
                    思念によって行われるコミュニケーションを通して「心のネットワーク革命」が起こると考えています。
                    私たちはこの「心のネットワーク革命」によって苦しみのない世界が訪れることを確信しています。
                </p>
                <p>
                    思念によってコミュニケーションが行われるためには一人ひとりの心身の余裕が地盤として必要になります。
                    私たちは「心のネットワーク革命」を目指し、その革命の第一歩としてvrc、AI秘書、マイナーといった製品を作成しています。
                    私達の製品が少しでもより良い社会に貢献できればと考えております。
                </p>
                <div id="concept-ceo-message-author">
                    <img src="https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/face-haraguchi.png?alt=media&token=bc78d0f4-bcb8-4895-a788-aa4f229e373c" width="150" height="150">
                    <div id="concept-ceo-message-author-role">MNR 代表取締役社長</div>
                    <div id="concept-ceo-message-author-name">原口 広樹</div>
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