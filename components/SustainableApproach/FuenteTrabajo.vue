<template>
  <section class="fuente-trabajo">
    <h2>#ORGULLOSOSDESERCAÑEROS</h2>
    <div class="fuente-trabajo_container">
      <div class="panel_left">
        <label>Fuente de trabajo</label>
        <div>
          <p>
            AgroAurora SAC es una empresa que ofrece diversas oportunidades laborales en
            la región de Piura. Los empleados han destacado el buen clima laboral y las
            oportunidades de aprendizaje que ofrece la empresa.
          </p>
          <p>
            Como parte de nuestro compromiso con la sostenibilidad, hemos lanzado el
            programa <b>"Orgullosos de ser Cañeros"</b>. Este programa tiene como objetivo
            promover prácticas sostenibles entre nuestros colaboradores, mostrándoles los
            beneficios de la producción de etanol y el cultivo de caña de azúcar.
          </p>
          <p>
            Queremos que nuestros colaboradores se sientan orgullosos de formar parte de
            un proceso que no solo impulsa la producción, sino que también promueve el
            cuidado del medio ambiente y beneficia a las comunidades locales.
          </p>
        </div>
      </div>
      <div class="panel_rigth">
        <div class="content_card">
          <div class="card">
            <h4>+ 830</h4>
            <p>Puesto de trabajo directo</p>
          </div>
          <div class="card">
            <h4>+ 850</h4>
            <p>Puesto de trabajo directo</p>
          </div>
        </div>
        <NuxtImg
          src="https://res.cloudinary.com/dkddd5aky/image/upload/v1715331061/agroaurora/img_agroaurora_31_fafh9w.jpg"
          class="person_surgar_cane"
          width="600px"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.fuente-trabajo {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 11rem 0;
}

.fuente-trabajo_container {
  display: grid;
  grid-template-columns: 1fr 0.7fr;
  gap: 4rem;
}

.panel_left {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  label {
    color: var(--agroaurora-color-2);
    font-size: 40px;
    font-weight: 600;
  }
  p {
    color: var(--agroaurora-color-1);
    font-size: 20px;
    line-height: 35px;
    margin-bottom: 2rem;
  }
}

h2 {
  color: var(--agroaurora-color-21);
  font-size: 70px;
  position: absolute;
  top: 0;
}
.panel_rigth {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
}
.content_card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
}
.card {
  border-radius: 4px;
  background-color: var(--agroaurora-color-21);
  padding: 0.5rem 2rem;
  color: var(--agroaurora-color-5);
  h4 {
    font-size: 40px;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
}

@include set-container-width(".fuente-trabajo");
</style>
