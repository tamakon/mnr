<template>
    <input type="button" v-bind:value="value">
</template>

<script>
export default {
    props: {
        'value': String,
    }
}
</script>

<style scoped>
input {
    width: 100%;
    height: 40px;
    color: white;
    background-color: darkcyan;
    border: none;
}
</style>