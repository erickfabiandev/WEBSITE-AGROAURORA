<template>
  <footer class="footer">
    <div class="footer_container">
      <div class="card">
        <img src="@/assets/img/logo.png" class="logo" alt="log-agroaurora" />
        <p class="description">
          Somos una empresa industrial dedicada a la producción de Alcohol Anhidro, y la
          siembra y cultivo de caña de azúcar, bajo sistema de riego tecnificado, estará
          estructurado en dos etapas.
        </p>
      </div>
      <div class="card">
        <h3 class="title">Productos</h3>
        <ul class="list">
          <li class="item-link">
            <NuxtLink to="/productos"><span>Etanol Anhidro</span></NuxtLink>
          </li>
          <li class="item-link">
            <NuxtLink to="/productos"><span>Etanol Hidratado</span></NuxtLink>
          </li>
          <li class="item-link">
            <NuxtLink to="/productos"><span>Siembra de caña de azucar</span></NuxtLink>
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="title">Información</h3>
        <ul class="list">
          <li class="item-link">
            <NuxtLink to="/conocenos"> <span>¿Quiénes somos?</span></NuxtLink>
          </li>
          <li class="item-link">
            <NuxtLink to="/certificaciones"> <span>Certificaciones</span></NuxtLink>
          </li>
          <li class="item-link">
            <NuxtLink to="/enfoque-sostenible"> <span>Enfoque sostenible</span></NuxtLink>
          </li>
          <li class="item-link">
            <NuxtLink to="/enfoque-sostenible">
              <span>Responsabilidad social</span></NuxtLink
            >
          </li>
          <li class="item-link">
            <NuxtLink to="/enfoque-sostenible"> <span>Orgullo cañero</span></NuxtLink>
          </li>
          <li class="item-link">
            <NuxtLink to="/noticias"> <span>Noticias</span></NuxtLink>
          </li>
        </ul>
      </div>
      <div class="card">
        <h3 class="title">Contáctanos</h3>
        <ul class="list">
          <li class="item-link">
            <img src="@/assets/img/phone.svg" alt="phone-agroaurora" />
            <span class="contact-info">{{ `(+51)978-299-372` }}</span>
          </li>
          <li class="item-link">
            <img src="@/assets/img/mail.svg" alt="email-agroaurora" />
            <span class="contact-info">email@correo.com</span>
          </li>
          <li class="item-link">
            <img src="@/assets/img/map-pin.svg" alt="map-agroaurora" />
            <NuxtLink href="https://maps.app.goo.gl/oDtSqeukNUmtxMVv8" target="_blank">
              <span class="contact-info">Km 18 Carretera Paita, Paita, Piura</span>
            </NuxtLink>
          </li>
          <li class="item-link">
            <NuxtLink
              href="https://www.linkedin.com/company/agroaurora-sac/"
              target="_blank"
            >
              <img src="@/assets/img/brand-linkedin.svg" alt="linkedin-agroaurora"
            /></NuxtLink>
            <NuxtLink href="https://www.facebook.com/AgroAurora/" target="_blank">
              <img src="@/assets/img/brand-facebook.svg" alt="facebook-agroaurora"
            /></NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">© Copyright 2024</div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  background-image: url("https://res.cloudinary.com/dkddd5aky/image/upload/v1715331458/agroaurora/img_agroaurora_3_11zon_awzbnd.webp");
  background-size: cover;
  background-position: 100% 60%;
  z-index: 1;

  &:after {
    content: "";
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--agroaurora-color-4);
    opacity: 0.6;
  }

  &:before {
    content: "";
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--agroaurora-color-1);
    opacity: 0.5;
  }
}

.footer_container {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 4rem;
  height: 550px;
  z-index: 3;
  margin: 0 auto;
}

.copyright {
  text-align: center;
  padding: 1rem;
  color: var(--agroaurora-color-3);
  font-size: 12px;
  background-color: var(--agroaurora-color-14);
  position: relative;
  z-index: 3;
}

.card {
  color: var(--agroaurora-color-3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 10rem;

  .title {
    font-weight: 600;
    font-size: 16px;
  }
  .list {
    padding: 0;
    display: grid;
    gap: 1rem;
  }
  .item-link {
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;
    &:hover {
      color: var(--agroaurora-color-2);
    }
    .contact-info {
      margin-left: 8px;
    }
    a {
      text-decoration: none;
    }
  }
  .description {
    font-size: 13px;
    line-height: 26px;
  }
}
.logo {
  width: 200px;
}

@include set-container-width(".footer");

@media (max-width: 768px) {
  .logo {
    margin-top: 2rem;
  }
  .footer_container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 990px;
    gap: 0.5rem;
  }
  .card {
    margin-top: 0rem;
    padding-inline: 1.5rem;
  }
}
</style>
