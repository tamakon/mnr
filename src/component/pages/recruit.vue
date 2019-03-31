<template>
    <div id="recruit">
        <the-hero-header
            img-source="https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/hero-recruit.jpg?alt=media&token=43f173e0-f6d1-442d-8814-357d9f2d63de"
            title="採用情報"
            description="">
        </the-hero-header>
        <div class="contents">
            <h2>新人採用</h2>
            <p>現在募集していません。</p>
            <h2>中途採用</h2>
            <p>現在募集していません。</p>
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