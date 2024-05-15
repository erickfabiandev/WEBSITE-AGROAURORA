<template>
  <div class="layout-default">
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style lang="scss" scoped>
.layout-default {
  display: flex;
  flex-direction: column;
  background-color: var(--agroaurora-color-3);
  min-width: 100%;
  min-height: 100vh;
  flex: 1 1 auto;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
</style>
