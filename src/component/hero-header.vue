<template>
    <div class="hero-header">
        <div id="hero-img" v-bind:style="backGroundImgStyle()">
            <div class="hero-description">{{ description }}</div>
        </div>
        <div id="hero-title">
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // backgroundのimageUrl
        'imgSource': String,
        // ページタイトル
        'title': String,
        // 画像内に収まる説明文. HACK:任意へ
        'description': String,
    },
    methods: {
        backGroundImgStyle() {
            // HACK:imgSourceは必須にするかどうしよう
            const imgUrl = (this.imgSource) ? this.imgSource :
                 "https://www.pakutaso.com/shared/img/thumb/ransomwareIMGL1908_TP_V.jpg";
            // url関数の結果を入れようとされてしまうため
            const image = `url(${imgUrl})`;
            return {
                'background-image': image
            };
        }
    }
}
</script>

<style>
    #hero-img {
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        height: 350px;
    }

    #hero-title {
        text-align: center;
    }

    .hero-description {
        background: rgba(255,255,255,0.5);
        position: relative;
        top: 70%;
        margin-left: auto;
        text-align: right;
        padding: 5px;
        width: 50%;
    }
</style>
