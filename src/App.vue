<template>
    <div id="id"  v-if="mobile === true">
    <keep-alive>
        <router-view />
    </keep-alive>
    </div>
    <div class="alert" v-else>
        <p>Please open this website in mobile or tablet device to make your order!</p>
    </div>
</template>

<script>
export default{
    name: 'App',
    data() {
        return {
            mobile: true,
        }
    },  
    mounted() {
        this.isMobile()
    },
    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return this.mobile = true;
            } else {
                return this.mobile = false;
            }
        }
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

.alert {
    background-color: #fff;
}

@media screen and (min-width: 820px) {
    body {
        margin: 0;
        background-color: #FFE8EE;
    }
}
</style>
