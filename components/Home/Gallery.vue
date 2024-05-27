<template>
  <section class="gallery">
    <div class="bg_top"></div>
    <div class="bg_bottom"></div>
    <div class="gallery_container">
      <div class="title">
        <div class="bar_title"></div>
        <span>{{ title }}</span>
        <div class="bar_title"></div>
      </div>
      <p class="subtitle" v-html="subtitle"></p>
      <div class=""></div>
      <Carousel
        id="gallery"
        :items-to-show="1"
        :wrap-around="false"
        v-model="currentSlide"
      >
        <Slide v-for="(certification, i) in dataGalley" :key="i">
          <div class="carousel__item">
            <NuxtImg :src="certification.urlImg" class="image-container" />
          </div>
        </Slide>
      </Carousel>

      <Carousel
        id="thumbnails"
        :items-to-show="6"
        :wrap-around="true"
        v-model="currentSlide"
        ref="carousel"
      >
        <Slide v-for="(certification, i) in dataGalley" :key="i">
          <div class="carousel__item__navbar" @click="slideTo(i)">
            <NuxtImg :src="certification.urlImg" class="image-container" />
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
interface typeSettings {
  itemsToShow: number;
  snapAlign: "center" | "start" | "end" | "center-even" | "center-odd";
}
const title = "Un Vistazo entre Bastidores";
const subtitle = "Descubre la Esencia de AgroAurora:<br> Nuestra Empresa en Fotos";
const currentSlide = ref<number>(0);
const dataGalley = [
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331061/agroaurora/img_agroaurora_31_fafh9w.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331061/agroaurora/img_agroaurora_30_ljr4zi.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331067/agroaurora/img_agroaurora_42_byui2l.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_17_cl014r.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_18_e7oztz.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331460/agroaurora/img_agroaurora_1_11zon_s195mm.webp",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331055/agroaurora/img_agroaurora_9_p2ia3c.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331055/agroaurora/img_agroaurora_8_oesuzt.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_19_gifkus.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331060/agroaurora/img_agroaurora_26_imr7dz.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331055/agroaurora/img_agroaurora_13_pgilae.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331061/agroaurora/img_agroaurora_31_fafh9w.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331055/agroaurora/img_agroaurora_9_p2ia3c.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331060/agroaurora/img_agroaurora_24_lix1cl.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331459/agroaurora/img_agroaurora_14_11zon_vbgcsc.webp",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_16_qtujx8.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331058/agroaurora/img_agroaurora_21_t6pgkk.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331060/agroaurora/img_agroaurora_25_umjhiy.jpg",
    name: "photo-agroaurora",
  },
  {
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331060/agroaurora/img_agroaurora_27_msl8zs.jpg",
    name: "photo-agroaurora",
  },
];

const slideTo = (val: number) => {
  currentSlide.value = val;
};
</script>

<style scoped lang="scss">
.gallery {
  position: relative;
  padding: 8rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.bg_top,
.bg_bottom {
  width: 100%;
  position: absolute;
  z-index: -1;
  left: 0;
}

.bg_top {
  top: 0;
  height: 40%;
  background-color: var(--agroaurora-color-3);
}
.bg_bottom {
  height: 60%;
  bottom: 0;
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331054/agroaurora/img_agroaurora_4_fhkol8.png");
  background-size: cover;
  background-position: center;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--agroaurora-color-23);
  }
}

.gallery_container {
  display: grid;
  text-align: center;
  gap: 1rem;
  .title {
    color: var(--agroaurora-color-2);
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .bar_title {
      background-color: var(--agroaurora-color-2);
      height: 3px;
      width: 4%;
    }
  }
  .subtitle {
    font-weight: 600;
    color: var(--agroaurora-color-1);
    font-size: 40px;
  }
}

.carousel__item {
  max-height: 700px;
  width: 100%;
  background-color: var(--agroaurora-color-25);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.carousel__item__navbar {
  height: 100px;
  width: 100%;
  background-color: var(--agroaurora-color-24);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-inline: 0.5rem;
}
.image-container {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
}

@include set-container-width(".gallery");

@media (max-width: 800px) {
  .gallery {
    padding-inline: 1rem;
    .title {
      gap: 0.5rem;
    }
    .subtitle {
      font-size: 30px;
    }
  }
  .carousel__item {
    max-height: 200px;
  }
  .carousel__item__navbar {
    max-height: 50px;
  }
}
</style>
