<template>
  <section class="about">
    <div class="about_container">
      <img
        src="https://res.cloudinary.com/dkddd5aky/image/upload/v1715352927/agroaurora/agroaurora_person_q7uul5.png"
        class="about_img"
      />
      <div class="about_details">
        <div class="details_title">
          <h2>AgroAurora</h2>
          <h3>Somos AgroAurora</h3>
        </div>
        <div class="details_list">
          <ul>
            <li>
              <img src="@/assets/img/sugar_cane_4.png" alt="icon-agroaurora" width="30" />
              <p>
                9 años dedicamos a la producción de <b>Etanol Anhidro</b>,
                <b>Etanol Hidratado</b> y la siembra y cultivo de <b>caña de azúcar</b>,
                bajo sistema de riego tecnificado.
              </p>
            </li>
            <li>
              <img src="@/assets/img/sugar_cane_4.png" alt="icon-agroaurora" width="30" />
              <p>
                Nuestros programas sociales contribuyen al
                <b>desarrollo de las comunidades</b>
                de nuestro entorno de manera que nuestro crecimiento va enlazado con el
                crecimiento de nuestras zonas de influencia.
              </p>
            </li>
            <li>
              <img src="@/assets/img/sugar_cane_4.png" alt="icon-agroaurora" width="30" />
              <p>
                Somos miembros de un exclusivo grupo global de empresas, estamos
                construyendo un <b>futuro sostenible</b> desde nuestras raíces
              </p>
            </li>
          </ul>
        </div>
        <button class="details_btn">Conócenos</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.about {
  background-color: var(--agroaurora-color-12);
  display: flex;
  align-items: center;
  justify-content: center;

  &_container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0rem;
    gap: 3rem;
  }

  &_img {
    width: 450px;
    filter: drop-shadow(0px 4px 4px var(--agroaurora-color-19));
  }

  &_details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
  }
}

.details_title {
  position: relative;
  h2 {
    color: var(--agroaurora-color-13);
    font-size: 130px;
    font-weight: 700;
    margin: 0;
    margin-block: 0;
  }
  h3 {
    color: var(--agroaurora-color-2);
    font-size: 40px;
    font-weight: 700;
    position: absolute;
    margin: 0;
    top: 40%;
    left: 3rem;
  }
}

.details_list {
  li {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 1rem;
  }
  p {
    margin-block: 0;
    font-size: 16px;
    font-weight: 300;
    line-height: 25px;
    text-align: left;
  }
  b {
    font-weight: 600;
  }
}

.details_btn {
  background-color: var(--agroaurora-color-2);
  font-size: 18px;
  font-weight: 300;
  color: var(--agroaurora-color-3);
  border-radius: 50px;
  border: 0;
  padding: 1rem 2rem;
  margin-left: 3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: all 0.6s ease-in;
  &:hover {
    background-color: var(--agroaurora-color-5);
    box-shadow: 0 1px 2px var(--agroaurora-color-19);
  }
}

@include set-container-width(".about");

@media (max-width: 1280px) {
  .details_title {
    h2 {
      font-size: 110px;
    }
  }
}

@media (max-width: 1024px) {
  .about_img {
    width: 400px;
  }
  .details_title {
    h2 {
      font-size: 85px;
    }
    h3 {
      font-size: 35px;
    }
  }
}

@media (max-width: 800px) {
  .about {
    padding: 1.5rem;
    &_container {
      flex-direction: column;
    }
    &_img {
      text-align: center;
    }
  }

  .details_title {
    h2 {
      font-size: 55px;
    }
    h3 {
      font-size: 24px;
      left: 1rem;
    }
  }
  .details_list {
    p {
      font-size: 14px;
    }
    img {
      margin-top: 5px;
    }
    ul {
      padding-left: 1rem;
    }
  }

  .details_btn {
    margin-left: 1rem;
  }
}

@media (max-width: 470px) {
  .about_img {
    width: 350px;
  }
}
</style>
