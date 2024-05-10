<template>
  <nav :class="{ menu: true, active: isScroll }">
    <div class="menu_container">
      <NuxtLink to="/">
        <img src="@/assets/img/logo.png" class="logo" alt="log-agroaurora" />
      </NuxtLink>
      <div class="menu_right">
        <ul class="menu_right_wrapper">
          <li class="menu_item">
            <NuxtLink to="/conocenos">
              <span>Conócenos</span>
            </NuxtLink>
          </li>
          <li class="menu_item">
            <NuxtLink to="/productos">
              <span>Productos</span>
            </NuxtLink>
          </li>
          <li class="menu_item">
            <NuxtLink to="/certificaciones">
              <span>Certificaciones</span>
            </NuxtLink>
          </li>
          <li class="menu_item">
            <NuxtLink to="/enfoque-sostenible">
              <span>Enfoque sostenible</span>
            </NuxtLink>
          </li>
          <li class="menu_item">
            <NuxtLink to="/noticias">
              <span>Noticias</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="menu_right_mobile">
        <img
          src="@/assets/img/menu-burger.svg"
          class="menu-burger"
          alt="log-agroaurora"
          width="30"
        />
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const isScroll = ref<Boolean>(false);

    const handleScroll = () => {
      isScroll.value = window.scrollY > 0 ? true : false;
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      isScroll,
    };
  },
});
</script>

<style scoped lang="scss">
.active {
  background-color: var(--agroaurora-color-1);
  box-shadow: 0 4px 4px 0 var(--agroaurora-color-19);
}
.menu {
  position: sticky;
  z-index: 10;
  height: 80px;
  padding-inline: 1rem;
  top: 0;
  left: 0;
  right: 0;

  &_right {
    display: none;
  }
  &_right_mobile {
    display: block;
  }

  &_container {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    position: relative;
  }

  &_right_wrapper {
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }

  &_item {
    color: var(--agroaurora-color-3);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    &:hover {
      color: var(--agroaurora-color-2);
    }

    a {
      text-decoration: none;
    }
  }
}
.logo {
  width: 220px;
}

@include set-container-width(".menu");

@media (min-width: 768px) {
  .menu_right {
    display: block;
  }
  .menu_right_mobile {
    display: none;
  }
}
</style>
