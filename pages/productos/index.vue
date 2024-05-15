<template>
  <div class="products">
    <Jumbotron :backgroundClassName="backgroundClassName" :title="title" />
  </div>
</template>

<script setup lang="ts">
import Jumbotron from "@/components/Jumbotron.vue";
const title = "Productos";
const backgroundClassName = "products_bg";
</script>

<style scoped lang="scss">
.products_bg {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331459/agroaurora/img_agroaurora_14_11zon_vbgcsc.webp");
  background-position: center top 40%;
}
</style>
