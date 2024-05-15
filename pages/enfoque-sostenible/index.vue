<template>
  <div class="sustainable-approach">
    <Jumbotron :backgroundClassName="backgroundClassName" :title="title" />
  </div>
</template>

<script setup lang="ts">
import Jumbotron from "@/components/Jumbotron.vue";
const title = "Enfoque sostenible";
const backgroundClassName = "sustainable-approach_bg";
</script>

<style scoped lang="scss">
.sustainable-approach_bg {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331058/agroaurora/img_agroaurora_22_gloz3w.jpg");
  background-position: center top 35%;
}
</style>
