
<template>
    <div class="form-input">
        <template v-if="isTextArea()">
            <textarea v-model="localVal" v-bind:rows="rows"></textarea>
        </template>
        <template v-else>
            <input v-model="localVal">
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            localVal: ""
        }
    },
    props: {
        // 指定なしの場合inputになる
        'rows': Number,
        'value': String,
    },
    methods: {
        isTextArea() {
            return this.rows != undefined && this.rows > 1; 
        }
    },
    mounted() {
        // 一回ローカルメンバ変数に退避させないと、
        // この後アップデートさせる際に親からくるはずのpropに対して子供から変更させることになるためエラーを吐かれる。
        // https://laracasts.com/discuss/channels/vue/20-error-avoid-mutating-a-prop-directly
        this.localVal = this.value;
    },
    updated() {
        // これを呼ばないとv-modelの双方向のバインディングがされない。
        this.$emit('input', this.localVal);
    }
}
</script>

<style scoped>
input {
    width: 100%;
    height: 40px;
    background-color: whitesmoke;
    border: none;
    padding: 1px;
}
textarea {
    width: 100%;
    background-color: whitesmoke;
    border: none;
}
</style>