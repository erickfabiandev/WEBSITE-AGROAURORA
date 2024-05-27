<template>
  <div class="about">
    <Jumbotron :backgroundClassName="backgroundClassName" :title="title" />
    <Sumary />
    <Mission />
    <Maps />
  </div>
</template>

<script setup lang="ts">
import Jumbotron from "@/components/Jumbotron.vue";
import Sumary from "~/components/About/Sumary.vue";
import Mission from "~/components/About/Mission.vue";
import Maps from "~/components/About/Maps.vue";
const title = "Conócenos";
const backgroundClassName = "about_bg";
</script>

<style scoped lang="scss">
.about_bg {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_16_qtujx8.jpg");
}
</style>
