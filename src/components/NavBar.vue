<template>
    <div class="navbar">
      <img class="menu-icon" :src="menuIcon" alt/>
      <img class="logo" :src="logoIcon" alt/>
      <img class="shopping-cart-icon" :src="shoppingCartIcon" alt/>
    </div>
</template>

<script>
import menuIcon from '@/assets/icons/menu.png';
import logoIcon from '@/assets/icons/logo.png';
import shoppingCartIcon from '@/assets/icons/shopping-cart.png';
export default {
  name: 'NavBar',
  data() {
    return {
      menuIcon, logoIcon, shoppingCartIcon
    }
  }
}
</script>
<style scoped lang="scss">
.navbar {
  display: flex;
  height: 6vh;
  padding: 0 3vw;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  
  .menu-icon {
    width: 4vh;
    height: 4vh;
  }
  .logo {
    max-height: 5vh;
  }
  .shopping-cart-icon {
    width: 2,7vh;
    height: 2.7vh;
  }
}

</style>
