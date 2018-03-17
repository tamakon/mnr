<template>
    <div class="card-link">
        <router-link :to="link">
            <div class="container">
                <h3 class="card-link-title">{{ title }}</h3>
                <p class="card-link-text">{{ detail }}</p>
            </div>
        </router-link>
        <hr class="separator">
    </div>
</template>

<script>
export default {
    props: {
        'link': String,
        'title': String,
        'detail': String,
    }
}
</script>

<style scoped>
.card-link {
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 20px;
}

.card-link:last-of-type > hr {
    display: none;
}

.card-link-title {
  color: #222831;
  letter-spacing: 2px;
}

.card-link-text {
  color: #393E46;
  flex: 1 1 auto;
  margin-bottom: 1.25rem;
}
</style>