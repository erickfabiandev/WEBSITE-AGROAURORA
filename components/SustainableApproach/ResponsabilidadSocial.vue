<template>
  <section class="responsabilidad">
    <div class="responsabilidad_container">
      <h4>Responsabilidad social</h4>
      <p>
        Es una parte fundamental de nuestra gestión, donde integramos activamente las
        preocupaciones sociales y ambientales de nuestros grupos de interés. A través de
        nuestras operaciones productivas y comerciales, colaboramos con el desarrollo
        sostenible de nuestro entorno, beneficiando a quienes impactamos directamente.
      </p>
      <p>
        Implementamos diversas iniciativas que benefician a nuestros grupos de interés.
        Por ejemplo, con el programa de nutrición "Sacando Punche", promovemos una
        alimentación adecuada en los grupos más vulnerables. Además, gestionamos talleres
        productivos en alianza con institutos locales y facilitamos Talleres de
        Participación Ciudadana para identificar necesidades y fomentar el diálogo
        comunitario.
      </p>
      <p>
        Buscamos establecer alianzas estratégicas con otros actores sociales para
        intercambiar recursos y alcanzar objetivos de manera eficaz y sostenible. Nuestras
        acciones se centran en la promoción de la salud, la nutrición y la educación, así
        como en generar un impacto positivo a través de actividades de proyección social.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.responsabilidad {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  padding: 5rem 0;
  background-color: var(--agroaurora-color-9);
}

.responsabilidad_container {
  display: grid;
  h4 {
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
    color: var(--agroaurora-color-1);
  }
  p {
    font-size: 20px;
    color: var(--agroaurora-color-1);
    line-height: 35px;
    margin-bottom: 1rem;
  }
}

@include set-container-width(".responsabilidad");
</style>
