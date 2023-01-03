<template>
    <div class="navbar">
      <img :src="menuIcon" alt/>
      <div class="app-title">
        <p>StreetBox</p>
      </div>
      <el-icon><ShoppingCart /></el-icon>
    </div>
</template>

<script>
import menuIcon from '@/assets/icons/menu.png';
export default {
  name: 'NavBar',
  data() {
    return {
      menuIcon,
    }
  }
}
</script>
<style scoped lang="scss">
.navbar {
  display: flex;
  height: 6vh;
  background-color: red;
  padding: 0 8px;
  justify-content: space-between;
  align-items: center;

  img {
    width: 4vh;
    height: 4vh;
  }
}

</style>
