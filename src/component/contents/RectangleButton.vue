<template>
    <input type="button" v-bind:value="value" v-on:click="onClick">
</template>

<script>
export default {
    props: {
        'value': String,
    },
    methods: {
        onClick() {
            this.$emit('onClick');
        }
    }
}
</script>

<style scoped>
input {
    width: 100%;
    height: 40px;
    color: white;
    background-color: #00ADB5;
    border: none;
}
</style>