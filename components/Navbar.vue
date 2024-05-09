<template>
  <nav :class="{'menu': true, 'active': isScroll}">
    <div class="menu_container">
      <NuxtLink to="/">
        <img src="@/assets/img/logo.png" class="logo" alt="log-agroaurora"/>
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
    </div>   
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const isScroll = ref<Boolean>(false)

    const handleScroll = () => {
      isScroll.value = window.scrollY > 0 ? true : false
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScroll
    }
  }
})
</script>

<style scoped lang="scss">
.active{
  background-color: var(--agroaurora-color-1);
}
.menu{  
  position: sticky;
  z-index: 10;
  height: 80px;

  &_container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
  }
  
  &_right_wrapper{
    list-style: none;
    display: flex;
    gap: 1.5rem;
  }

  &_item{
    color: var(--agroaurora-color-3);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    text-shadow: var(--agroaurora-color-19) 0 4px 4px;
    &:hover{
      color: var(--agroaurora-color-2);
    }

    a{      
      text-decoration: none;
    }
    
  }
}
.logo{
  width:  220px;
}

@media (min-width: 576px) {
  .menu_container{
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .menu_container{
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .menu_container{
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .menu_container{
    max-width: 1140px;
  }
}

@media (min-width: 1400px) {
  .menu_container{
    max-width: 1320px;
  }
}

</style>