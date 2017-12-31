
<template>
    <div class="form-input">
        <template v-if="isTextArea()">
            <textarea v-bind:rows="rows"></textarea>
        </template>
        <template v-else>
            <input>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        // 指定なしの場合inputになる
        'rows': Number,
    },
    methods: {
        isTextArea() {
            return this.rows != undefined && this.rows > 1; 
        }
    }
}
</script>

<style scoped>
input {
    width: 100%;
    height: 40px;
    background-color: whitesmoke;
    border: none;
}
textarea {
    width: 100%;
    background-color: whitesmoke;
    border: none;
}
</style>