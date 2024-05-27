<template>
  <section class="certifications">
    <img class="img_bg" src="@/assets/img/sugar_cane_1.png" />
    <div class="certifications_container">
      <h3>Certificaciones</h3>
      <p>
        Contamos con diferentes certificaciones en normas de reconocimiento internacional
        garantizando <br />nuestras buenas practicas ambientales, sociales y económicas.
      </p>
      <Carousel
        v-bind="settings"
        :wrap-around="true"
        :autoplay="4000"
        :breakpoints="breakpoints"
      >
        <Slide v-for="(certification, i) in dataCertifications" :key="i">
          <NuxtLink :to="certification.urlFile" :target="'_blank'">
            <img
              :src="certification.urlImg"
              :alt="certification.name"
              width="120"
              height="120"
            />
          </NuxtLink>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
interface typeCertification {
  name: string;
  urlImg: string;
  urlFile: string;
}
interface typeSettings {
  itemsToShow: number;
  snapAlign: "center" | "start" | "end" | "center-even" | "center-odd";
}

const dataCertifications: typeCertification[] = [
  {
    name: "Certificacion ISCC",
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331053/agroaurora/certificaciones_3_vw6jdd.png",
    urlFile:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1716782694/agroaurora/ISCC_EU_CRT_Agroaurora_080923_1_m4vyyd.pdf",
  },
  {
    name: "Certificacion ISO 45001:2018",
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331053/agroaurora/certificaciones_4_uskgpz.webp",
    urlFile:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1716782694/agroaurora/AENOR_45001_espa%C3%B1ol_axbxvw.pdf",
  },
  {
    name: "Certificacion ISO 9001:2015",
    urlImg:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331053/agroaurora/certificaciones_2_oxdirk.png",
    urlFile:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1716782694/agroaurora/AENOR_9001_espa%C3%B1ol_f4pf8d.pdf",
  },
];

const settings: typeSettings = {
  itemsToShow: 3,
  snapAlign: "center",
};

const breakpoints = {
  300: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "center",
  },
};
</script>

<style scoped lang="scss">
.certifications {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0rem;
  position: relative;

  &_container {
    text-align: center;
    display: grid;
    h3 {
      color: var(--agroaurora-color-2);
      font-size: 30px;
      font-weight: 600;
      margin: 0;
    }
    p {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 3rem;
    }
  }

  .img_bg {
    position: absolute;
    height: 100%;
    top: 0;
    left: -340px;
    transform: rotate(15deg);
    opacity: 0.3;
  }
}
@media (max-width: 767px) {
  .certifications {
    padding-inline: 1rem;
  }
}

@include set-container-width(".certifications");
</style>
