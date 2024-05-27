<template>
  <section class="summary">
    <div class="summary_container">
      <div class="title">Somos AgroAurora</div>
      <div class="content_summary">
        <div class="content_summary_left">
          <p>Somos el principal ingenio productor y exportador de alcohol en el Perú</p>
          <img
            src="https://res.cloudinary.com/dkddd5aky/image/upload/v1715331057/agroaurora/img_agroaurora_18_e7oztz.jpg"
            class="img_summary"
          />
        </div>
        <div class="content_summary_rigth">
          <p>
            Pioneros en la producción industrial de <b>Alcohol Anhidro</b> y en el
            <b>cultivo de caña de azúcar</b>, empleando sistemas de riego de última
            generación. Nuestra visión se materializa en dos etapas: la primera,
            actualmente en marcha, abarca la implementación de 7,400 hectáreas, mientras
            que la segunda llevará esta cifra a 10,000 hectáreas, garantizando así un
            suministro ininterrumpido de materia prima para nuestro ingenio.
          </p>
          <p>
            En el 2019, ¡logramos la prestigiosa certificación ISCC EU! Tras una auditoría
            rigurosa liderada por una certificadora de renombre internacional, se confirmó
            que en AgroAurora aplicamos procedimientos eficaces para controlar y reducir
            nuestros impactos ambientales. Además, cumplimos estrictamente con las
            normativas nacionales e internacionales relacionadas con derechos humanos,
            laborales y de tierra, y gestionamos nuestra huella de carbono de manera
            responsable.
          </p>
          <p>
            Este hito nos posiciona entre un selecto grupo de empresas globales,
            cimentando nuestro compromiso con un crecimiento sostenible y un futuro más
            próspero.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.summary {
  background-color: var(-agroaurora-color-3);
  display: flex;
  align-items: center;
  justify-content: center;

  &_container {
    padding: 6rem 0;
  }

  .title {
    color: var(--agroaurora-color-2);
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 2rem;
  }
}

.content_summary {
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  column-gap: 3rem;
  &_rigth {
    p {
      line-height: 33px;
      font-size: 16px;
      color: var(--agroaurora-color-1);
      font-weight: 400;
    }
  }
  &_left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    p {
      color: var(--agroaurora-color-1);
      line-height: 37px;
      font-size: 24px;
      font-weight: 300;
    }
  }
}

.img_summary {
  width: 100%;
}

@include set-container-width(".summary");

@media (max-width: 767px) {
  .summary {
    padding-inline: 1rem;
  }

  .content_summary {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    &_left {
      p {
        text-align: center;
      }
    }
  }

  .title {
    text-align: center;
  }
}
</style>
