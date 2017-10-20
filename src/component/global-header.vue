<template>
    <div class="global-header">
        <div class="initial-display">
            <div class="logo-area">
                <router-link class="logo-link" to="/">MNR</router-link>
            </div>
            <div class="menu-area">
                <div class="menu-trigger" v-bind:class="{active: isActive}" v-on:click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="float-menu-wrapper" v-if="isActive">
            <ul class="global-header-links">
                <li class="link-item" v-for="item in links" :key="item.label">
                    <router-link class="menu-link" :to="item.href">{{ item.label }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            const links = [{label: "会社情報", href: "./undefined.html" },
                            {label: "主な事業", href: "./undefined.html" },
                            {label: "プレリリース", href: "/pre-release"},
                            {label: "お問い合わせ", href: "./undefined.html" }];
            return {
                isActive: false,
                links: links
            }
        },
        methods: {
            toggleMenu() {
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<style scoped>
    .global-header {
        background-color: darkcyan;
        color: white;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    .initial-display {
        display: flex;
        justify-content: space-between;
    }

    .logo-area {
        font-size: 30px;
        font-family: Times, serif;
        padding: 6px 12px;
    }

    .logo-link,
    .logo-link:visited {
        text-decoration: none;
        color: white;
    }

    .menu-area {
        padding: 12px;
        height: 32px;
    }

    .menu-trigger,
    .menu-trigger > span {
        display: inline-block;
        transition: all .4s;
        box-sizing: border-box;
    }

    .menu-trigger {
        position: relative;
        width: 32px;
        height: 32px;
    }

    .menu-trigger > span {
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: white;
    }

    .menu-trigger > span:nth-of-type(1) {
        top: 0;
    }

    .menu-trigger > span:nth-of-type(2) {
        top: 14px;
    }

    .menu-trigger > span:nth-of-type(3) {
        top: 28px;
    }

    .menu-trigger.active > span:nth-of-type(1) {
        -webkit-transform: translateY(14px) rotate(-45deg);
        transform: translateY(14px) rotate(-45deg);
    }

    .menu-trigger.active > span:nth-of-type(2) {
        opacity: 0;
    }

    .menu-trigger.active > span:nth-of-type(3) {
        -webkit-transform: translateY(-14px) rotate(45deg);
        transform: translateY(-14px) rotate(45deg);
    }

    .float-menu-wrapper {
        background-color: darkcyan;
        position: absolute;
        width: 100%;
    }

    .global-header-links {
        margin: 0;
        list-style: none;
        padding: 12px;
    }

    .menu-link {
        color: white;
        text-decoration: none;
    }

    .menu-link:visited {
        color: white;
    }

</style>