<template>
    <div id="the-global-header">
        <div id="the-global-header-root">
            <div id="the-global-header-main-bar">
                <router-link id="the-global-header-logo-link" to="/">
                    <div id="the-global-header-logo-area" v-on:click="closeToggleMenu">
                        <img src="./img/logo.png">
                        <span>MNR</span>
                    </div>
                </router-link>
                <div id="the-global-header-menu-button-area">
                    <div id="the-global-header-menu-button" v-bind:class="{active: isActive}" v-on:click="toggleMenu">
                        <!-- 各spanタグはハンバーガーメニューの横棒一つに対応(スタイルで横棒にしている) -->
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            <transition name="menu-fade">
                <ul id="the-global-header-menu-list" v-if="isActive">
                    <li v-for="item in links" :key="item.label" v-on:click="closeToggleMenu">
                        <router-link class="the-global-header-menu-link" :to="item.href">{{ item.label }}</router-link>
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const links = [{label: "会社情報", href: "/info" },
                            {label: "主な事業", href: "/product" },
                            {label: "ニュース", href: "/news"},
                            {label: "お問い合わせ", href: "/contact" }];
            return {
                isActive: false,
                links: links
            }
        },
        watch: {
            '$route' (_to, _from) {
                this.closeToggleMenu();
            }
        },
        methods: {
            toggleMenu() {
                this.isActive = !this.isActive;
            },
            closeToggleMenu() {
                this.isActive = false;
            }
        }
    }
</script>

<style scoped>
    #the-global-header {
        padding-bottom: 56px;
    }
    #the-global-header-root {
        position: fixed;
        z-index: 12;
        width: 100%;
    }

    #the-global-header-main-bar {
        display: flex;
        justify-content: space-between;
        background-color: #393E46;
        color: white;
        position: relative;
        z-index: 12;
    }

    #the-global-header-logo-area {
        font-size: 30px;
        font-family: Times, serif;
        padding: 6px 12px;
    }

    #the-global-header-logo-link,
    #the-global-header-logo-link:visited {
        color: white;
    }

    #the-global-header-menu-button-area {
        padding: 12px;
        height: 32px;
    }

    #the-global-header-menu-button,
    #the-global-header-menu-button > span {
        display: inline-block;
        transition: all .4s;
        box-sizing: border-box;
    }

    #the-global-header-menu-button {
        position: relative;
        width: 32px;
        height: 32px;
        /* iOSなどでタップ時の反応で灰色くなるのを避ける */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    #the-global-header-logo-area > img {
        height: 40px;
    }

    #the-global-header-menu-button > span {
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: white;
    }

    #the-global-header-menu-button > span:nth-of-type(1) {
        top: 0;
    }

    #the-global-header-menu-button > span:nth-of-type(2) {
        top: 14px;
    }

    #the-global-header-menu-button > span:nth-of-type(3) {
        top: 28px;
    }

    #the-global-header-menu-button.active > span:nth-of-type(1) {
        -webkit-transform: translateY(14px) rotate(-45deg);
        transform: translateY(14px) rotate(-45deg);
    }

    #the-global-header-menu-button.active > span:nth-of-type(2) {
        opacity: 0;
    }

    #the-global-header-menu-button.active > span:nth-of-type(3) {
        -webkit-transform: translateY(-14px) rotate(45deg);
        transform: translateY(-14px) rotate(45deg);
    }

    #the-global-header-menu-list {
        margin: 0;
        list-style: none;
        padding: 12px;
        background-color: #393E46;
        color: white;
        position: relative;
        z-index: 11;
    }

    .the-global-header-menu-link {
        display: block;
        padding: 5px 0;
    }

    .the-global-header-menu-link,
    .the-global-header-menu-link:visited{
        color: white;
    }

    .menu-fade-enter-active, .menu-fade-leave-active {
        transition: all .2s;
    }
    .menu-fade-enter, .menu-fade-leave-to {
        transform: translateY(-100%);
    }
</style>
