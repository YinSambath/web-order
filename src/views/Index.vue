<template>
    <div class="index-page" >
        <NavBar />
        <div class="filter">
            <div :class="(isActive==true) ? 'filter-item-active' : 'filter-item'" v-for="(item, index) in filters" :key="index" @click="doFilter(item)">
                <img :src="item.icon" alt/>
                <p>{{ item.name }}</p>
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
import item2 from '@/assets/icons/item-1.png';
import item3 from '@/assets/icons/item-1.png';
import item4 from '@/assets/icons/item-1.png';
import item5 from '@/assets/icons/item-1.png';

export default {
    name: "IndexPage",
    components: {NavBar},
    data() {
        return {
            all, chiliSauce, berverage, item1, item2, item3, item4, item5, rice,
            isActive: false,
            filters: [
                {
                    name: 'All items',
                    icon: all,
                },
                {
                    name: 'Duck',
                    icon: item1
                },
                {
                    name: 'Rice',
                    icon: rice
                },
                {
                    name: 'Other',
                    icon: chiliSauce
                },
                {
                    name: 'Berverage',
                    icon: berverage
                },
            ],
        }
    },
    methods: {
        doFilter(item) {
            this.isActive = !this.isActive;
            console.log(item);
        }
    }
}
</script>
<style scoped lang="scss">
    .index-page {
        .filter {
            display: flex;
            margin-top: 2px;
            height: 7vh;
            background-color: #ffffff;
            overflow-x: scroll;
            align-items: center;

            .filter-item {
                display: flex;
                height: 4vh;
                width: auto;
                margin: 0 1vw;
                background-color: #F1F7FC;
                border-radius: 19px;
                align-items: center;
                cursor: pointer;

                img {
                    margin: 2px;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background-color: #ffffff;
                }
                p {
                    margin: 0 15px;
                    align-self: center;
                    color: #000000;
                    white-space: nowrap;
                    font-size: 0.8rem;
                }
            }
            .filter-item-active{
                display: flex;
                height: 4vh;
                width: auto;
                margin: 1vw;
                background-color: #FF6464;
                border-radius: 19px;
                align-items: center;
                cursor: pointer;

                img {
                    margin: 2px;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    background-color: #ffffff;
                }
                p {
                    margin: 0 20px;
                    align-self: center;
                    color: #ffffff;
                    white-space: nowrap;
                    font-size: 0.8rem;
                }
            }
        }
        ::-webkit-scrollbar {
            display:none;
        }
    }
</style>
