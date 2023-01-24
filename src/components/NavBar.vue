<template>
    <div class="navbar">
      <img class="menu-icon" :src="menuIcon" @click="drawer = true" alt/>
      <img class="logo" :src="logoIcon" @click="goHome" alt/>
      <img class="shopping-cart-icon" :src="shoppingCartIcon" @click="goCart" alt/>
    </div>

    <el-drawer
      v-model="drawer"
      direction="ltr"
      size="50%"
      :show-close="false"
      :with-header="false"
    >
      <span>drawer open</span>
    </el-drawer>
</template>

<script>
import {ref} from 'vue'
import menuIcon from '@/assets/icons/menu.png';
import logoIcon from '@/assets/icons/logo.png';
import shoppingCartIcon from '@/assets/icons/shopping-cart.png';
export default {
  name: 'NavBar',
  data() {
    return {
      menuIcon, logoIcon, shoppingCartIcon
    }
  },
  setup() {
    const drawer = ref(false);

    return {
      drawer,
    }
  },
  methods: {
    goCart() {
      this.$router.push({path: '/cart'})
    },
    goHome() {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style scoped lang="scss">
.navbar {
  width: auto;
  display: flex;
  height: 55px;
  padding: 0 2vw;
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
@media screen and (max-width: 600px) {
    .navbar {
        padding: 0 3vw;
    }
}

</style>
