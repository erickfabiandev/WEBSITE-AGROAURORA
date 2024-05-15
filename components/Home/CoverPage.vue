<template>
  <section class="cover">
    <TransitionGroup name="fade">
      <template v-for="(item, i) in dataCover" :key="i">
        <div
          :class="`cover_bg ${item.bgClassName}`"
          v-show="currentCover === item.index"
        ></div>
        <div class="cover_container" v-show="currentCover === item.index">
          <h3>
            <span class="antetitle">{{ item.anteTitle }}</span> <br />
            <p v-html="item.title" class="title"></p>
          </h3>
          <p v-html="item.subTitle" class="subtitle"></p>
          <button class="btn_cover">
            {{ item.btnName }}
          </button>
        </div>
      </template>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
interface DataCoverType {
  index: Number;
  anteTitle: String;
  title: String;
  subTitle: String;
  btnName: String;
  btnUrl: String;
  bgClassName: String;
}
const dataCover: DataCoverType[] = [
  {
    index: 1,
    anteTitle: "Líderes en",
    title: "Producción y Exportación <br> de Alcohol en Perú",
    subTitle:
      "Nos especializamos en la producción de etanol anhidro <br> y etanol hidratado, liderando el mercado con calidad y <br> compromiso.",
    btnName: "Explora Nuestra Excelencia",
    btnUrl: "/productos",
    bgClassName: "bg_lideres",
  },
  {
    index: 2,
    anteTitle: "¡Nuestro crecimiento,",
    title: " Tu futuro!",
    subTitle:
      "De 7,400 a 10,000 hectáreas: expandiendo horizontes y<br> asegurando el abastecimiento.",
    btnName: "Descubre Más",
    btnUrl: "/enfoque-sostenible",
    bgClassName: "bg_crecimiento",
  },
  {
    index: 3,
    anteTitle: "Orgullosos",
    title: "de ser CAÑEROS",
    subTitle: "Promoviendo el desarrollo sostenible",
    btnName: "Más informacion",
    btnUrl: "/noticias",
    bgClassName: "bg_orgullo",
  },
];

const currentCover = ref(1);

onMounted(() => {
  const interval = setInterval(() => {
    currentCover.value = (currentCover.value % dataCover.length) + 1;
  }, 8000);

  onBeforeUnmount(() => {
    clearInterval(interval);
  });
});
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 1;
}

.cover_container {
  position: absolute;
  z-index: 1;
}
.cover_bg {
  background-size: cover;
  background-position: center;
  position: absolute;
  top: -80px;
  left: 0;
  width: 100%;
  height: calc(100% + 80px);
  z-index: -1;
}

.btn_cover {
  font-size: 18px;
  color: var(--agroaurora-color-3);
  font-weight: 300;
  padding: 1rem 2rem;
  border: 0;
  border-radius: 50px;
  background-color: var(--agroaurora-color-1);
  box-shadow: 0 2px 2px var(--agroaurora-color-20);
  cursor: pointer;
  &:hover {
    background-color: var(--agroaurora-color-2);
  }
}

.title,
.antetitle {
  color: var(--agroaurora-color-3);
  font-weight: 700;
}
.antetitle {
  font-size: 40px;
}

.title {
  font-size: 60px;
  margin: 0;
  margin-block: 0;
}

.subtitle {
  font-size: 24px;
  font-weight: 500;
  color: var(--agroaurora-color-3);
}

.bg_lideres {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331054/agroaurora/img_agroaurora_7_xzjdcf.jpg");
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      -90deg,
      var(--agroaurora-color-19) 0%,
      var(--agroaurora-color-20) 60%,
      var(--agroaurora-color-1) 100%
    );
    z-index: -1;
  }
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: var(--agroaurora-color-4);
    opacity: 0.6;
    z-index: -1;
  }
}

.bg_crecimiento {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331055/agroaurora/img_agroaurora_10_m6l7md.jpg");
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      var(--agroaurora-color-10) 0%,
      var(--agroaurora-color-2) 200%
    );
    z-index: -1;
  }
}

.bg_orgullo {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_16_qtujx8.jpg");
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      var(--agroaurora-color-19) 0%,
      var(--agroaurora-color-1) 200%
    );
    z-index: -1;
  }
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: var(--agroaurora-color-4);
    opacity: 0.2;
    z-index: -1;
  }
}

@include set-container-width(".cover");

@media (max-width: 767px) {
  .antetitle,
  .title,
  .subtitle {
    padding-inline: 2rem;
  }
  .antetitle {
    font-size: 24px;
  }

  .title {
    font-size: 40px;
  }

  .subtitle {
    font-size: 18px;
  }
  .btn_cover {
    margin-top: 1rem;
    margin-left: 2rem;
  }
}
</style>
