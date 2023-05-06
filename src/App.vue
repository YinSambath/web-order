<template>
  <div id="id" v-if="isMobile">
      <router-view />
  </div>
  <!-- <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog> -->
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isMobile: true,
        }
    },  
    created() {
        // this.setDeviceType()
    },
    methods: {
        // setDeviceType() {
        //     const platform = navigator.userAgent.toLocaleLowerCase()
        //     if (/mac|win|linux/i.test(platform)) {
        //         this.isMobile = false;
        //     } else {
        //         this.isMobile = true;
        //     }
        // },
    }
}
</script>

<style>
body {
    margin: 0;
    background-color: #ffffff;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-width: 270px;
    max-width: 600px;
    margin: auto;
    background-color: #F5F5F5;
}

@media screen and (min-width: 820px) {
    body {
        margin: 0;
        background-color: #FFE8EE;
    }
}
</style>
