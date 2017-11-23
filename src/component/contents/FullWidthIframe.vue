<template>
    <div class="full-width-iframe-wrapper" v-bind:style="paddingTop()">
        <iframe
            class="full-width-iframe-content"
            v-bind:src="src"
            frameborder="0"
            allowfullscreen>
        </iframe>
    </div>
</template>

<script>
    export default {
        props: {
            'ratio': { width: Number, height: Number },
            'src': String,
        },
        methods: {
            // HACK スタイルは出来ることならclassで決めたい
            paddingTop() {
                // default ratio 16:9
                const ratio = this.ratio || { width: 16, height: 9};
                const parsent = this.heightParsent(
                    ratio.width, ratio.height);
                return {
                    'padding-top': `${parsent}%`
                };
            },
            heightParsent(width, height) {
                return (height * 100) / width;
            }
        }

    }
</script>

<style scoped>
.full-width-iframe-wrapper {
    position: relative;
    display: block;
    width: 100%;
}
.full-width-iframe-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>