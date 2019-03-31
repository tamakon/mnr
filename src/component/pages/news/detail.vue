<template>
    <div id="news-detail">
        <div class="contents">
            <h2>{{ news.title }}</h2>
            <p>{{ news.message }}</p>
            <p v-if="existLink()"><a :href="news.link">{{ news.link }}</a></p>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            const newsRepository = [
                {
                    key: "20190401",
                    title: "新製品「Supple」の取材記事が掲載されました！",
                    message: "新製品「Supple」について「Spring Quota」様にインタビューを受けました。詳細は下記リンクからどうぞ。",
                    link: "https://fool-april.site"
                },
                {
                    key: "20170116",
                    title: "代表取締役社長 原口の取材記事が掲載されました！",
                    message: "原口氏がインタビューをされました。詳細は下記リンクからどうぞ。",
                    link: "http://gendai.ismedia.jp/articles/-/247"
                },
                {
                    key: "20161227",
                    title: "年末年始営業日のお知らせ",
                    message: "2016/12/24 〜 2017/01/14までは営業休暇となります。",
                },
            ];
            const notFound = {
                key: "non",
                title: "お探しの記事は見つかりませんでした。",
                message: "お探しの記事は見つかりませんでした。",
            }
            const news = newsRepository.find(obj => obj.key == this.$route.params.id) || notFound;
            return {
                news
            }
        },
        methods: {
            existLink() {
                return this.news.link != null;
            }
        }
    }
</script>