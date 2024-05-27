<template>
  <section class="news">
    <div class="news_container">
      <div class="title">
        <div class="bar_title"></div>
        <span>{{ title }}</span>
        <div class="bar_title"></div>
      </div>
      <p class="subtitle" v-html="subtitle"></p>
      <div class="content_news">
        <div class="content_card">
          <article class="card" v-for="(item, i) in dataNews" :key="i">
            <div :class="`imagen-evento ${item.class}`"></div>
            <div class="card_date">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_200_332)">
                  <path
                    d="M18 5H6C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V7C20 5.89543 19.1046 5 18 5Z"
                    stroke="#159E3C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 3V7"
                    stroke="#159E3C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 3V7"
                    stroke="#159E3C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 11H20"
                    stroke="#159E3C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 15H12"
                    stroke="#159E3C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 15V18"
                    stroke="#159E3C"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_200_332">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p>
                {{ item.datePublish }}
              </p>
            </div>
            <div class="card_description">
              <label>{{ item.title }}</label>
              <NuxtLink class="link" :to="item.url"> Seguir leyendo </NuxtLink>
            </div>
          </article>
        </div>
        <button class="btn_more_news">
          <NuxtLink to="/noticias">Ver más noticias</NuxtLink>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import moment from "moment";

const title = "¡Entérate de Todo!";
const subtitle = "Actualizaciones y Eventos: Mantente <br> Conectado con AgroAurora";
const dataNews = [
  {
    datePublish: moment("20240521").format("MMMM DD YYYY"),
    title: "Copa AgroAurora 2024",
    url: "/noticias",
    class: "bg_new1",
  },
  {
    datePublish: moment("20240510").format("MMM DD YYYY"),
    title: "Homenajeando a Mamá",
    url: "/noticias",
    class: "bg_new2",
  },
  {
    datePublish: moment("20240503").format("MMM DD YYYY"),
    title: "Celebramos el Día del Trabajador",
    url: "/noticias",
    class: "bg_new3",
  },
];
</script>

<style scoped lang="scss">
.bg_new3 {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1716789667/agroaurora/440886851_835117541968234_763560381928069853_n_sole20.jpg");
}
.bg_new2 {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1716789668/agroaurora/news_2_tvpepx.jpg");
}
.bg_new1 {
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1716789413/agroaurora/news_1_dyiind.jpg");
}
.news {
  padding: 8rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background-image: url("@/assets/img/tractor-farmer.svg");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
}

.news_container {
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

.btn_more_news {
  font-family: Poppins, "Source Sans Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: var(--agroaurora-color-3);
  background-color: var(--agroaurora-color-2);
  text-align: center;
  padding: 1rem;
  border-radius: 40px;
  width: 200px;
  border: 0;
  cursor: pointer;
  transition: 0.6s all ease-in-out;
  transform: scale(1);
  a {
    text-decoration: none;
  }
  &:hover {
    background-color: var(--agroaurora-color-22);
    transform: scale(1.1);
  }
}

.content_card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 4rem;
  padding: 3rem 0rem;
  margin-bottom: 3rem;
}

.card {
  border-radius: 10px;
  height: 400px;
  display: grid;
  grid-template-rows: 6fr 1fr 3fr;
  grid-template-columns: 1fr;
  background-color: var(--agroaurora-color-3);
  border: 1px solid var(--agroaurora-color-7);
  transform: scale(1);
  transition: 0.6s transform ease-in-out;
  &_date {
    color: var(--agroaurora-color-2);
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    padding: 0rem 1rem;
    background-color: var(--agroaurora-color-12);
  }
  &_description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    label {
      color: var(--agroaurora-color-1);
      font-size: 20px;
    }
    .link {
      font-size: 16px;
      font-weight: 600;
      color: var(--agroaurora-color-2);
      text-decoration: none;
      cursor: pointer;
      &:hover {
        color: var(--agroaurora-color-5);
      }
    }
  }

  &:hover {
    transform: scale(1.1);
    border: 2px solid var(--agroaurora-color-2);
    box-shadow: 0 4px 10px var(--agroaurora-color-11);
  }
}

.imagen-evento {
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
}

@include set-container-width(".news");

@media (max-width: 767px) {
  .news {
    padding-inline: 2rem;
    .title {
      gap: 0.5rem;
    }
    .subtitle {
      font-size: 30px;
    }
  }

  .content_card {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 4rem;
  }
}
</style>
