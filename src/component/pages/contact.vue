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
            <span>名前</span>
            <form-input />
            <span>メールアドレス</span>
            <form-input />
            <span>内容</span>
            <form-input :rows="4" />
            <rectangle-button style="margin-top:20px" value="送信"/>
        </div>
    </div>
</template>

<script>
    import TheGlobalHeader from '../contents/TheGlobalHeader.vue'
    import TheHeroHeader from '../contents/TheHeroHeader.vue'
    import FormInput from '../contents/FormInput.vue'
    import RectangleButton from '../contents/RectangleButton.vue'

    export default {
        components: {
            TheGlobalHeader,
            TheHeroHeader,
            FormInput,
            RectangleButton,
        }
    }
</script>