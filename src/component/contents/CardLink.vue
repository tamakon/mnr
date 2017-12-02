<template>
    <div class="card-link">
        <router-link :to="link">
            <div class="container">
                <h3 class="card-link-title">{{ title }}</h3>
                <p class="card-link-text">{{ detail }}</p>
            </div>
        </router-link>
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
a {
    color: black;
}
.card-link {
  background-color: rgba(0,139,139,0.1);
  border-radius: 5px;
  box-shadow: 0 20px 40px -14px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  margin-bottom: 20px;
}

.card-link-title {
  color: #696969;
  letter-spacing: 2px;
}

.card-link-text {
  flex: 1 1 auto;
  margin-bottom: 1.25rem;
}
</style>