<template>
  <div class="about">
    <Jumbotron :backgroundClassName="backgroundClassName" :title="title" />
  </div>
</template>

<script setup lang="ts">
import Jumbotron from "@/components/Jumbotron.vue";
const title = "Conócenos";
const backgroundClassName = "about_bg";
</script>

<style scoped lang="scss">
.about_bg {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_16_qtujx8.jpg");
}
</style>
