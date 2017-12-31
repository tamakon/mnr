<template>
    <div id="contact">
        <the-global-header />
        <the-hero-header
            img-source="https://www.pakutaso.com/shared/img/thumb/ss76_bbwosousasurute14172508_TP_V.jpg"
            title="Contact"
            description="">
        </the-hero-header>
        <div class="contents">
            <div>
                <p>弊社について、ご質問や採用希望等がございましたら下記フォームよりお問い合わせください。</p>
            </div>
            <rectangle-button value="送信"/>
        </div>
    </div>
</template>

<script>
    import TheGlobalHeader from '../contents/TheGlobalHeader.vue'
    import TheHeroHeader from '../contents/TheHeroHeader.vue'
    import RectangleButton from '../contents/RectangleButton.vue'

    export default {
        components: {
            TheGlobalHeader,
            TheHeroHeader,
            RectangleButton,
        }
    }
</script>