<template>
    <div>
        <div id="the-hero-header-img" v-bind:style="backGroundImgStyle()">
            <div v-if="description"
                class="the-hero-header-description Semitransparent-background">
                {{ description }}
            </div>
        </div>
        <div id="the-hero-header-title" v-if="title">
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
        // 画像内に収まる説明文（任意）
        'description': String,
    },
    methods: {
        backGroundImgStyle() {
            // url関数の結果を入れようとされてしまうため
            const image = `url(${this.imgSource})`;
            return {
                'background-image': image
            };
        }
    }
}
</script>

<style scoped>
    #the-hero-header-img {
        background-position: 50% 50%;
        background-size: cover;
        background-repeat: no-repeat;
        height: 200px;
    }

    #the-hero-header-title {
        text-align: center;
    }

    .the-hero-header-description {
        position: relative;
        top: 70%;
        margin-left: auto;
        text-align: right;
        padding: 5px;
        width: 50%;
    }
</style>
