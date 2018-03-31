<template>
    <div id="contact">
        <the-hero-header
            img-source="https://firebasestorage.googleapis.com/v0/b/mind-network-revolution.appspot.com/o/hero-contact.jpg?alt=media&token=2a348fc2-7467-4a5f-9238-3c4cbee21173"
            title="Contact"
            description="">
        </the-hero-header>
        <div class="contents">
            <div>
                <p>弊社について、ご質問や採用希望等がございましたら下記フォームよりお問い合わせください。</p>
            </div>
            <div class="contact-input-label">
                <span >名前</span>
                <span class="contact-validation-err" v-show="store.name.errMsg.length > 0">※{{ store.name.errMsg }}</span>
            </div>
            <form-input v-model="store.name.value" />
            <div class="contact-input-label">
                <span>メールアドレス</span>
                <span class="contact-validation-err" v-show="store.email.errMsg.length > 0">※{{ store.email.errMsg }}</span>
            </div>
            <form-input v-model="store.email.value" />
            <div class="contact-input-label">
                <span>内容</span>
                <span class="contact-validation-err" v-show="store.text.errMsg.length > 0">※{{ store.text.errMsg }}</span>
            </div>
            <form-input v-model="store.text.value" :rows="8" />
            <rectangle-button style="margin-top:20px" v-on:onClick="submit" value="送信"/>
        </div>
    </div>
</template>

<script>
    import TheHeroHeader from '../contents/TheHeroHeader.vue'
    import FormInput from '../contents/FormInput.vue'
    import RectangleButton from '../contents/RectangleButton.vue'

    export default {
        components: {
            TheHeroHeader,
            FormInput,
            RectangleButton,
        },
        data() {
            const makeModel = (name, validation) => {
                let errMsg = "";
                return {
                    value: "",
                    naem: name,
                    validation: validation,
                    errMsg: errMsg,
                }
            };
            return {
                store: {
                    name: makeModel("氏名", 'empty'),
                    email: makeModel("メールアドレス", 'email'),
                    text: makeModel("内容", 'empty'),
                },
            }
        },
        methods: {
            submit() {
                let isValid = true
                for (const key in this.store) {
                    const model = this.store[key];
                    this.validation(model);
                    if (model.errMsg.length > 0) {
                        isValid = false;
                    }
                }
                if (isValid) {
                    // 正常系処理
                    setTimeout(() => {
                        console.log("なんもしてないやでw");
                        alert("送信しました");
                    }, 1000);
                }
            },

            validation(model) {
                if (model == null) return;
                switch (model.validation) {
                    case 'empty':
                        const emptyMsg = `${model.naem}は入力必須です。`;
                        model.errMsg = model.value.length === 0 ? emptyMsg : "";
                        break;
                    case 'email':
                        const emailReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        const emailMsg = "メールアドレスの形式を入力してください。"
                        model.errMsg = !emailReg.test(model.value) ? emailMsg : "";
                        break;
                }
            }
        }
    }
</script>

<style scoped>
.contact-validation-err {
    color: red;
}

.contact-input-label {
    margin-top: 15px;
}
</style>