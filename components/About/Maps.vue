<template>
  <section class="maps">
    <div class="maps_container">
      <div class="details_title">
        <h2>AgroAurora</h2>
        <h3>Nuestra sede</h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75631.26202132872!2d-80.86000897371224!3d-4.959847858209543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x903600d920bc5ceb%3A0x4ba796a089e23901!2sAgroAurora!5e0!3m2!1ses-419!2spe!4v1716803093225!5m2!1ses-419!2spe"
        width="100%"
        height="700px"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.maps {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem 0;
}

.details_title {
  position: relative;
  text-align: center;
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
    left: 40%;
  }
}
@include set-container-width(".maps");

@media (max-width: 767px) {
  .maps {
    padding-inline: 1rem;
  }
  .details_title {
    margin-bottom: 1rem;
    h2 {
      font-size: 85px;
    }
    h3 {
      font-size: 35px;
      left: 20%;
    }
  }
}
</style>
