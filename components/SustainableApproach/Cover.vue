<template>
  <section class="cover">
    <div class="panel_left">
      <p>
        En AgroAurora, estamos comprometidos con un enfoque sostenible en todas nuestras
        operaciones. Desde nuestros inicios, hemos abrazado la responsabilidad ambiental y
        social como pilares fundamentales de nuestro trabajo.
      </p>
      <p>
        A través de prácticas agrícolas innovadoras, tecnologías sostenibles y una
        dedicación constante a la mejora continua, nos esforzamos por dejar un impacto
        positivo en nuestro entorno y en las generaciones futuras.
      </p>
    </div>
    <div class="panel_rigth"></div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cover {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 100vh;
}
.panel_rigth {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331063/agroaurora/img_agroaurora_33_o8jgzc.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.panel_left {
  background: linear-gradient(34deg, rgba(0, 0, 0, 1) 0%, rgba(14, 29, 66, 1) 100%);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--agroaurora-color-3);
  font-size: 24px;
  line-height: 60px;
  font-size: 400;
}

@media (max-width: 767px) {
  .cover {
    grid-template-columns: 1fr;
  }
  .panel_left {
    padding: 3rem 2rem;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
  }
  .panel_rigth {
    height: 400px;
  }
}
</style>
