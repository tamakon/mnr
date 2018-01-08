<template>
    <div id="the-global-footer">
        <div id="block">
            <h3>東京本店</h3>
            <p>{{addrTokyo}}</p>
            <a id="button-google-map" href="https://goo.gl/maps/6zX1Z1SQd9m">Google Map</a>
        </div>
        <div id="block">
            <h3>大阪支店</h3>
            <p>{{addrOsaka}}</p>
            <a id="button-google-map" href="https://goo.gl/maps/8uJoUZgodmw">Google Map</a>
        </div>
        <div id="block">
            <h3>シンガポール支店</h3>
            <p>{{addrSingapore}}</p>
            <a id="button-google-map" href="https://goo.gl/maps/7WpzZVpXToq">Google Map</a>
        </div>
        <div id="copyright">{{copyright}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            addrTokyo: "〒156-0052 東京都世田谷区経堂１丁目１２−６ 城南信用金庫隣り",
            addrOsaka: "〒542-0085 大阪府大阪市中央区心斎橋筋２丁目１−３０ プラディオ心斎橋 2F",
            addrSingapore: "71, Jalan Austin Heights 8/1, Taman Mount Austin, 81100 Johor Bahru, Johor, マレーシア",
            copyright: "Copyright© 2018 MNR Imp. All rights reserved to the devil."
        }
    }
}
</script>

<style>
    #the-global-footer {
        background-color: #a1a1a1;
        text-align: center;
        padding: 1em;
    }
    #button-google-map {
        padding:10px 30px 10px 40px !important;
        background: #0098d9 url(./img/map.png) no-repeat 9% center/18px;
    }
    #block {
        margin: 0px 0px 1em 0px;
        padding: 1em;
        background-color: darkcyan;
        border-radius: 1em;
    }
    #copyright {

    }
</style>
