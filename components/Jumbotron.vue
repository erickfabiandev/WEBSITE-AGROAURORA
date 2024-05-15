<template>
  <section :class="`jumbotron ${$props.backgroundClassName}`">
    <div class="jumbotron_container">
      <h3>{{ $props.title }}</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  backgroundClassName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.jumbotron {
  height: 500px;
  width: 100%;
  text-align: center;
  background-position: center top 20%;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--agroaurora-color-4);
    opacity: 0.6;
    width: 100%;
    height: 100%;
  }

  &_container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h3 {
    font-size: 90px;
    color: var(--agroaurora-color-3);
    font-weight: 700;
    position: relative;
    z-index: 1;
  }
}

@include set-container-width(".jumbotron");

@media (max-width: 900px) {
  .jumbotron {
    height: 200px;
    background-position: center top;
    h3 {
      font-size: 40px;
    }
  }
}
</style>
