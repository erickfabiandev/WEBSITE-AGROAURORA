<template>
  <section class="mission">
    <div class="mission_container">
      <div class="card" v-for="(item, i) in dataMission" :class="item.class">
        <label class="card_title">{{ item.title }}</label>
        <NuxtImg :src="item.img" width="150px" height="150px" class="card_img" />
        <p class="card_description">{{ item.description }}</p>
        <ul v-if="item.list" class="list_option">
          <li v-for="(element, k) in item.list" :key="k">
            <span>{{ element.number }}. </span>
            <span>{{ element.label }} </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const dataMission = [
  {
    title: "Visión",
    img:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_19_gifkus.jpg",
    class: "bg_blue",
    description:
      "Somos una empresa de capitales peruanos. Aspiramos satisfacer las necesidades de nuestros clientes y consumidores, con productos de la más alta calidad y ser siempre su primera opción.",
  },
  {
    title: "Misión",
    img:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331459/agroaurora/img_agroaurora_14_11zon_vbgcsc.webp",
    class: "bg_green",
    description:
      "Mantener el liderazgo en el mercado a través de la producción y comercialización de la caña de azúcar y sus derivados garantizando un valor agregado para nuestros clientes y consumidores",
  },
  {
    title: "Valores",
    img:
      "https://res.cloudinary.com/dkddd5aky/image/upload/v1715331064/agroaurora/img_agroaurora_36_isrdpx.webp",
    class: "bg_blue",
    description:
      "Nuestra empresa se fundamenta en el compromiso con la excelencia, estos son valores que nos caracterizan :",
    list: [
      {
        number: "1",
        label: "Profesionalismo",
      },
      {
        number: "2",
        label: "Calidad humana",
      },
      {
        number: "3",
        label: "Sentido de pertenencia",
      },
      {
        number: "4",
        label: "Espíritu emprendedor",
      },
      {
        number: "5",
        label: "Optimización de recursos",
      },
      {
        number: "6",
        label: "Búsqueda de la excelencia de recursos",
      },
    ],
  },
];
</script>

<style scoped lang="scss">
.mission {
  display: grid;
  &_container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding: 6rem 3rem;
  &_description {
    font-size: 16px;
    font-weight: 300;
    text-align: center;
  }
  &_title {
    font-size: 40px;
    font-weight: 700;
  }
}

.card_img {
  border-radius: 50%;
}
.bg_blue {
  background-color: var(--agroaurora-color-26);
  color: var(--agroaurora-color-1);
}

.bg_green {
  background-color: var(--agroaurora-color-21);
  color: var(--agroaurora-color-5);
  .card_title {
    color: var(--agroaurora-color-2);
  }
}

.list_option {
  list-style: none;
  text-align: left;
  padding-left: 0;
  font-size: 16px;
  font-weight: 300;
}

@media (max-width: 767px) {
  .mission_container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr);
  }
}
</style>
