<template>
  <section class="certificaciones">
    <div class="certificaciones_container">
      <div class="summary">
        <p>
          Durante 9 años, AgroAurora ha liderado la producción de etanol y el cultivo de
          caña de azúcar, manteniendo un compromiso constante con la calidad y la
          sostenibilidad.
        </p>
        <p>
          Nuestra búsqueda continua de la excelencia nos ha llevado a desarrollar procesos
          innovadores y seguros, respaldados por certificaciones reconocidas, para ofrecer
          productos de alta calidad y seguros para nuestros clientes.
        </p>
        <p>
          Nos esforzamos por minimizar nuestro impacto ambiental y promover prácticas
          agrícolas responsables, implementando tecnologías sostenibles en nuestras
          operaciones. Estamos dedicados a ofrecer productos de alta calidad y a
          contribuir al bienestar de nuestras comunidades y del medio ambiente en general,
          manteniendo siempre nuestro compromiso con la mejora continua.
        </p>

        <Carousel
          v-bind="settings"
          :wrap-around="true"
          :autoplay="4000"
          :breakpoints="breakpoints"
          class="mt-4"
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
.certificaciones {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7rem 0rem;
}

.summary {
  color: var(--agroaurora-color-1);
  font-size: 16px;
  line-height: 38px;
  gap: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0rem 10rem;
  font-weight: 500;
}

.mt-4 {
  margin-top: 4rem;
}

@include set-container-width(".certificaciones");

@media (max-width: 767px) {
  .summary {
    padding: 0 2rem;
  }
}
</style>
