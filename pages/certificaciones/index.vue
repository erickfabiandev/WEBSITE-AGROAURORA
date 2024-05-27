<template>
  <div class="certifications">
    <Jumbotron :backgroundClassName="backgroundClassName" :title="title" />
    <SummaryCertificaciones />
    <VideoPlayer />
  </div>
</template>

<script setup lang="ts">
import Jumbotron from "@/components/Jumbotron.vue";
import SummaryCertificaciones from "@/components/Certificaciones/SummaryCertificaciones.vue";
import VideoPlayer from "@/components/Certificaciones/VideoPlayer.vue";
const title = "Certificaciones";
const backgroundClassName = "certifications_bg";
</script>

<style scoped lang="scss">
.certifications_bg {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331058/agroaurora/img_agroaurora_21_t6pgkk.jpg");
  background-position: center top 35%;
}
</style>
