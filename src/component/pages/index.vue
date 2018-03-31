<template>
    <div id="index">
        <the-hero-header
            img-source="https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/hero-top.jpg?alt=media&token=9b988cbb-1e8f-4bba-b064-0f3b188d7d5d"
            title=""
            description="最高の価値をあなたに">
        </the-hero-header>
        <router-link :to="'./product/vrc'">
            <div class="index-content-root">
                <div class="index-content-text">
                    <div class="index-content-title">FaceLook</div>
                    <div class="index-content-desc">人間関係によるストレスから<br>あなたを解放させます。</div>
                </div>
                <figure id="index-content-image-vrc" class="index-content-image"></figure>
            </div>
        </router-link>
        <router-link :to="'./product/secretary'">
            <div class="index-content-root">
                <div class="index-content-text">
                    <div class="index-content-title">MNecho</div>
                    <div class="index-content-desc">あなたの生活を最適化させる<br>パートナーです。</div>
                </div>
                <figure id="index-content-image-secretary" class="index-content-image"></figure>
            </div>
        </router-link>
        <router-link :to="'./product/miner'">
            <div class="index-content-root">
                <div class="index-content-text">
                    <div class="index-content-title">Miner</div>
                    <div class="index-content-desc">不労所得によって労働から<br>あなたを解放させます。</div>
                </div>
                <figure id="index-content-image-miner" class="index-content-image"></figure>
            </div>
        </router-link>
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

<style>
    .index-content-root {
        position: relative;
        margin: 5px 0;
    }
    .index-content-text {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 2;
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }
    .index-content-title {
        font-size: 30px;
        color: white;
    }
    .index-content-desc {
        color: white;
    }
    .index-content-image {
        margin: 0;
    }
    .index-content-image:before{
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        content: ' ';
        z-index: 1;
    }
    #index-content-image-vrc {
        background: url(https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/top-facelook.jpg?alt=media&token=089cebfd-4235-4e24-8cf5-8a8f8d4dc826) no-repeat center;
        background-size: cover;
        padding-bottom: 67.625%;
    }
    #index-content-image-secretary {
        background: url(https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/top-mnecho.jpg?alt=media&token=9e3b7dac-a40a-4358-9acc-d9f2bf6875a5) no-repeat center;
        background-size: cover;
        padding-bottom: 67.625%;
    }
    #index-content-image-miner {
        background: url(https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/top-miner.jpg?alt=media&token=7204ab69-16fa-4d58-a52a-f31515364e20) no-repeat center;
        background-size: cover;
        padding-bottom: 67.625%;
    }
</style>