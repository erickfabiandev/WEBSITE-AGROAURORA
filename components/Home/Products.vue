<template>
  <section class="products">
    <div class="bg_top"></div>
    <div class="bg_bottom"></div>
    <div class="products_container">
      <div class="title">
        <div class="bar_title"></div>
        <span>{{ title }}</span>
        <div class="bar_title"></div>
      </div>
      <p class="subtitle" v-html="subtitle"></p>
      <div class="content_card">
        <article
          :class="`card ${item.bgClassName}`"
          v-for="(item, i) in dataProducts"
          :key="i"
        >
          <div class="content_text">
            <h3 class="card_title">{{ item.title }}</h3>
            <p class="card_description">{{ item.description }}</p>
            <NuxtLink class="card_btn" to="/productos">
              <span>{{ item.buttonName }}</span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface typeProduct {
  title: string;
  description: string;
  buttonName: string;
  bgClassName: string;
}
const title = "¡Desata el Poder de la Innovación!";
const subtitle = "¿Listo para Descubrir Nuestros Secretos <br>Líquidos?";
const dataProducts: typeProduct[] = [
  {
    title: "Etanol Anhidro",
    buttonName: "Descubre  más",
    description: "Pureza y rendimiento inigualables para tus aplicaciones industriales.",
    bgClassName: "bg_product_1",
  },
  {
    title: "Etanol Hidratado",
    buttonName: "Descubre  más",
    description:
      "Versatilidad y calidad superior para tus necesidades industriales y de consumo.",
    bgClassName: "bg_product_2",
  },
];
</script>

<style scoped lang="scss">
.bg_product_1 {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715759038/agroaurora/img_agroaurora_60_aoyf1a.jpg");
  background-position: center;
}
.bg_product_2 {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715758824/agroaurora/img_agroaurora_56_tg8kh2.webp");
  background-position: left;
}
.products {
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
  background-color: var(--agroaurora-color-1);
  top: 0;
  height: 55%;
}
.bg_bottom {
  height: 45%;
  bottom: 0;
  background-color: var(--agroaurora-color-3);
}

.products_container {
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
    color: var(--agroaurora-color-3);
    font-size: 40px;
  }
}

.content_card {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .card {
    width: 318px;
    height: 380px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 4px 4px var(--agroaurora-color-19);
    position: relative;
    z-index: 1;
    background-color: var(--agroaurora-color-3);
    background-size: cover;
    transition: all 0.4s ease-in-out;
    &::before {
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background: var(--agroaurora-color-21);
    }

    .content_text {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      position: absolute;
      text-align: left;
      top: 0;
      left: 0;
      width: 60%;
      height: 100%;
      clip-path: polygon(100% 0, 100% 50%, 0 100%, 0 0);
      background-color: var(--agroaurora-color-22);
      z-index: 3;
      transition: all 0.4s ease-in-out;
    }

    &_img {
      width: 100%;
      height: 220px;
    }
    &_btn {
      color: var(--agroaurora-color-1);
      font-size: 16px;
      font-weight: 400;
      width: 60%;
      border: 0;
      cursor: pointer;
      margin-left: 2rem;
      margin-top: 1rem;
      display: none;
      transition: all 0.4s ease-in-out;
      text-decoration: underline;
      &:hover {
        color: var(--agroaurora-color-2);
      }
    }
    &_title {
      margin: 0;
      margin-block: 0;
      font-size: 30px;
      color: var(--agroaurora-color-3);
      font-weight: 600;
      transition: all 0.4s ease-in-out;
      padding: 1rem;
    }
    &_description {
      margin: 0;
      margin-block: 0;
      font-size: 16px;
      font-weight: 400;
      padding-inline: 2rem;
      color: rgba(51, 51, 51, 0.63);
      transition: all 0.4s ease-in-out;
      display: none;
    }

    &:hover {
      width: 350px;
      &:before {
        display: grid;
      }
      .content_text {
        width: 100%;
        background-color: var(--agroaurora-color-3);
      }
      .card_title {
        color: var(--agroaurora-color-1);
        font-size: 18px;
        text-align: left;
        padding-left: 2rem;
      }
      .card_description,
      .card_btn {
        display: grid;
      }
    }
  }
}
@include set-container-width(".products");

@media (max-width: 800px) {
  .products {
    padding-inline: 1rem;
    .title {
      gap: 0.5rem;
    }
    .subtitle {
      font-size: 30px;
    }
  }
  .content_card {
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
}
</style>
