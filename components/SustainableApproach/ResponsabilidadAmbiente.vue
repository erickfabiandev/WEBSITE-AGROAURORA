<template>
  <section class="responsabilidad">
    <div class="responsabilidad_container">
      <h4>Responsabilidad con el medio ambiente</h4>
      <p>
        Tenemos un fuerte compromiso con la sostenibilidad y la protección del medio
        ambiente. Hemos implementado diversas estrategias y prácticas para minimizar su
        impacto ambiental, como el uso eficiente del agua mediante riego tecnificado y la
        reducción gradual de las hectáreas cosechadas con quema
      </p>
      <p>
        Se busca prevenir la contaminación mediante la ejecución de buenas prácticas
        ambientales, programas de gestión adecuados y uso de tecnología limpia
        económicamente viable; lo que implica también una cultura ambiental de nuestros
        colaboradores, haciéndolos conscientes de sus obligaciones sobre la protección 
        ambiental.
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
  background-color: var(--agroaurora-color-21);
}

.responsabilidad_container {
  display: grid;
  h4 {
    font-size: 40px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
    color: var(--agroaurora-color-2);
  }
  p {
    font-size: 20px;
    color: var(--agroaurora-color-5);
    line-height: 35px;
    margin-bottom: 1rem;
  }
}

@include set-container-width(".responsabilidad");
</style>
