<template>
  <div id="id">
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>
<style>
body {
  margin: 0;
  background-color: #F5F5F5;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 270px;
  max-width: 820px;
  margin: auto;
  overflow: hidden;
}

@media screen and (max-width: 820px) {
  
}



</style>
