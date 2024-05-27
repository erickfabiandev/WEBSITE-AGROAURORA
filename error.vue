<template>
  <div class="error">
    <div class="header">
      <h3>¡Ups!</h3>
      <p>
        Algo salió mal, no se puede acceder <br />
        a esta página
      </p>
    </div>
    <img src="@/assets/img/logo.png" alt="logo-agroaura" class="logo" />
    <img src="@/assets/img/tractor-farmer.svg" alt="footer-farmer" class="footer" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.error {
  width: 100%;
  height: calc(100vh - 64px);
  background-color: var(--agroaurora-color-3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}
.logo {
  width: 400px;
  border-top: 1px solid var(--agroaurora-color-7);
}
.footer {
  width: 100%;
  position: fixed;
  bottom: 5%;
}
h3 {
  font-size: 36px;
  font-weight: 600;
  color: var(--agroaurora-color-2);
  margin: 0px;
  margin-bottom: 10px;
}
p {
  color: var(--agroaurora-color-1);
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
  margin-bottom: 5px;
}

@media (max-width: 767px) {
  .header {
    padding-inline: 1rem;
    p {
      font-size: 18px;
    }
  }
  .logo {
    width: 90%;
  }

  .footer {
    width: 600px;
  }
}
</style>
