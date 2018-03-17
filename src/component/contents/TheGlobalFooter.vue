<template>
    <div id="the-global-footer">
        <li v-for="shop in shops" :key="shop.name">
            <div class="shop-block">
                <h3>{{ shop.name }}</h3>
                <p>{{ shop.addr }}</p>
                <a class="button-google-map" v-bind:href="shop.href"><img src="./img/map.png">Google Map</a>
            </div>
        </li>
        <div id="copyright">{{ copyright }}</div>
    </div>
</template>

<script>
export default {
    data() {
        const shops = [
            {
                name: "東京本店",
                addr: "〒156-0052 東京都世田谷区経堂１丁目１２−６ 城南信用金庫隣り",
                href: "https://goo.gl/maps/6zX1Z1SQd9m"
            },
            {
                name: "大阪支店",
                addr: "〒542-0085 大阪府大阪市中央区心斎橋筋２丁目１−３０ プラディオ心斎橋 2F",
                href: "https://goo.gl/maps/8uJoUZgodmw"
            },
            {
                name: "シンガポール支店",
                addr: "71, Jalan Austin Heights 8/1, Taman Mount Austin, 81100 Johor Bahru, Johor, マレーシア",
                href: "https://goo.gl/maps/7WpzZVpXToq"
            }
        ]
        return{
            shops: shops,
            copyright: "Copyright© 2018 MNR Imp. All rights reserved to the devil."
        }
    }
}
</script>

<style>
    #the-global-footer {
        background-color: #393E46;
        text-align: center;
        padding: 3em 0.5em 1em;
        list-style: none;
    }
    .button-google-map,
    .shop-block p {
        font-size: 12px;
    }
    .shop-block {
        margin: 0px 0px 1em 0px;
        padding: 1em;
        background: #EEEEEE;
        text-align: left;
    }
    .shop-block h3,
    .shop-block p {
        margin: 0;
    }
    .shop-block a {
        color: #00ADB5;
    }
    .shop-block img {
        height: 20px;
    }
    #copyright {
        margin-top: 1em;
        color: #EEEEEE;
    }
</style>
