<template>
    <div class="index-page" >
        <NavBar />
        <div class="filter">
            <div  class="filter-item" :class="{'filter-item-active': index === activeItem }" v-for="(item, index) in category" :key="(item, index)" @click="doFilter(item, index)">
                <img :src="(item.imageUrl) ? getFullPathImage(item.imageUrl) : require('@/assets/images/user_default.jpeg')" alt/>
                <p>{{ item.name }}</p>
            </div>
        </div>
        <div class="container">
            <div class="item" v-for="(product,productIndex) in filterProduct" :key="(product,productIndex)" @click="orderDetail(product.id)">
              <div class="item-img">
                  <img :src=" (product.imageUrl) ? getFullPathImage(product.imageUrl) : require('@/assets/images/food_default.jpeg')" alt/>
              </div>
              <div class="item-text">
                  <p class="item-name">{{ product.name }}</p>
                  <div class="tag">
                      <!-- <p class="item-price"> {{ product.price }}</p> -->
                  </div>
                  <!-- <p class="counted">{{ item.id }} sold</p> -->
              </div>

            </div>
        </div>
    </div>
</template>
    
<script>
import NavBar from '@/components/NavBar.vue';
import all from '@/assets/icons/restaurant-icon.png';
import chiliSauce from '@/assets/icons/chili-sauce.png';
import rice from '@/assets/icons/rice.png';
import berverage from '@/assets/icons/baverage.png';
import item1 from '@/assets/icons/item-1.png';
import item2 from '@/assets/icons/item-2.png';
import item3 from '@/assets/icons/item-3.png';
import item4 from '@/assets/icons/item-4.png';
import item5 from '@/assets/icons/item-5.png';
import ApiService from '@/services/ApiService';

export default {
    name: "IndexPage",
    components: {NavBar},
    data() {
        return {
            all, chiliSauce, berverage, item1, item2, item3, item4, item5, rice,
            search: {
                query: "",
            },
            activeItem: 0,
            category: [],
            products: [],
            productGroup: [],
            filterProduct: []
        }
    },
    created() {
        this.getList();
        console.log(this.$route)
        // if (this.$route.query) {
            
        // }
    },
    methods: {
        getList() {
            ApiService.getHome().then((result) => {
                console.log(result)
                if (result.response.status === 200) {
                    this.category = result.results.category
                    this.products = result.results.product
                    this.productGroup = result.results.productGroup
                    this.doFilter()
                }
            })
        },

        doFilter(item, index) {
            this.activeItem = index;
            (item) ? item : item  = this.category[0]
            this.filterProduct = this.products.filter((product) => product.category.id === item.id)
        },

        orderDetail(id) {
            console.log(id);
            this.$router.push({path: `/product/${id}`})
        },

        getFullPathImage(path) {
            return process.env.VUE_APP_BASE_URL + path
        },
    }
}
</script>
<style scoped lang="scss" src="@/styles/index.scss">
</style>
