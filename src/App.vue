<template>
    <div id="id">
    <keep-alive>
        <router-view />
    </keep-alive>
    </div>
</template>

<script>
export default{
    name: 'App',
    data() {
        return {}
    },  
    mounted() {},
    methods: {}
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
