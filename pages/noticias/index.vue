<template>
  <div class="news">
    <Jumbotron :backgroundClassName="backgroundClassName" :title="title" />
  </div>
</template>

<script setup lang="ts">
import Jumbotron from "@/components/Jumbotron.vue";
const title = "Noticias";
const backgroundClassName = "news_bg";
</script>

<style scoped lang="scss">
.news_bg {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331064/agroaurora/img_agroaurora_34_jalqjb.png");
  background-position: center top 30%;
}
</style>
