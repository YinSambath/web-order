<template>
    <div class="index-page" >
        <NavBar />
        <div class="filter">
            <div  class="filter-item" :class="{'filter-item-active': index === activeItem }" v-for="(item, index) in filters" :key="index" @click="doFilter(item, index)">
                <img :src="item.icon" alt/>
                <p>{{ item.name }}</p>
            </div>
        </div>
        <div class="container">
            <div class="item" v-for="(item,index) in items" :key="index" @click="orderDetail(item.id)">
              <div class="item-img">
                  <img :src="item.icon"/>
              </div>
              <div class="item-text">
                  <p class="item-name">{{ item.name }}</p>
                  <div class="tag">
                      <p class="item-price"> {{ item.price }}</p>
                  </div>
                  <p class="counted">{{ item.id }} sold</p>
              </div>

            </div>
        </div>
    </div>
</template>
    
<script>
import {ref} from 'vue';
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

export default {
    name: "IndexPage",
    components: {NavBar},
    data() {
        return {
            all, chiliSauce, berverage, item1, item2, item3, item4, item5, rice,
        }
    },
    setup() {
        const activeItem = ref(0);
        const filters = ref([
                {
                    name: 'All items',
                    id: '1',
                    icon: all,
                },
                {
                    name: 'Duck',
                    id: '2',
                    icon: item1
                },
                {
                    name: 'Rice',
                    id: '3',
                    icon: rice
                },
                {
                    name: 'Other',
                    id: '4',
                    icon: chiliSauce
                },
                {
                    name: 'Berverage',
                    id: '5',
                    icon: berverage
                },
            ]);
        const items = ref([
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    isHot: 1,
                    isNew: 0,
                    icon: item1,
                },
                {
                    id: '2',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    isHot: 1,
                    isNew: 0,
                    icon: item2
                },
                {
                    id: '3',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    isHot: 0,
                    isNew: 1,
                    icon: item3
                },
                {
                    id: '4',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    isHot: 0,
                    isNew: 1,
                    icon: item4
                },
                {
                    id: '5',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    isHot: 1,
                    isNew: 0,
                    icon: item5
                },
            ]);
        return {
            activeItem,
            filters,
            items,
        }
    },
    methods: {
        doFilter(item, index) {
            this.activeItem = index;
            console.log(item);
        },
        orderDetail(id) {
            console.log(id);
            this.$router.push({path: `/order/${id}`})
        },
    }
}
</script>
<style scoped lang="scss" src="@/styles/index.scss">
</style>
