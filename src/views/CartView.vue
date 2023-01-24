<template>
<div class="cart-page" >
        <NavBar />
        <div class="container">
            <div class="item" v-for="(item,index) in items" :key="index">
                <div class="logo-detail">
                    <img :src="item.icon" />
                    <div class="detail">
                        <h5>{{ item.name }}</h5>
                        <p>size: {{ item.size }}</p>
                        <h5>{{ item.price }}</h5>
                    </div>
                </div>
                <div class="quatity">
                    <el-button @click.prevent="decrement(index)" :disabled="item.quantity == 1" class="btn-minus" circle>
                        <img :src="minus" />
                    </el-button>
                    <h5>{{ item.quantity }}</h5>
                    <el-button @click.prevent="increment(index)" class="btn-plus" circle>
                        <img :src="plus" />
                    </el-button>
                </div>
            </div>
        </div>
        <div class="price-checkout">
            <div class="total-price">
                <h4 class="red-text">Total</h4>
                <h4 class="green-text">1500.00$</h4>
            </div>
            <el-button class="checkout-btn" @click="checkOut">Check Out</el-button>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
import NavBar from '@/components/NavBar.vue';
import item1 from '@/assets/icons/item-1.png';
import item2 from '@/assets/icons/item-2.png';
import item3 from '@/assets/icons/item-3.png';
import item4 from '@/assets/icons/item-4.png';
import item5 from '@/assets/icons/item-5.png';
import minus from '@/assets/icons/minus.png'
import plus from '@/assets/icons/plus.png'
export default {
    name: "CartView",
    components: {NavBar},
    data() {
        return {
            item1, item2, item3, item4, item5, minus, plus
        }
    },
    setup() {
        const quantity = ref(1);
        const totalPrice = ref(0);
        const items = ref([
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item1,
                    quantity: 1
                },
                {
                    id: '2',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 's',
                    icon: item2,
                    quantity: 1
                },
                {
                    id: '3',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item3,
                    quantity: 1
                },
                {
                    id: '4',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item4,
                    quantity: 1
                },
                {
                    id: '5',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'l',
                    icon: item5,
                    quantity: 1
                },
            ]);

        return {
            quantity,
            totalPrice,
            items,
        }
    },
    methods: {
        increment(i) {
            this.items[i].quantity++;
            console.log(this.items[i]);
        },
        decrement(i) {
            this.items[i].quantity-- ;
            console.log(this.items[i]);
        },
        checkOut() {
            let phone = localStorage.getItem("phone");
            let address = localStorage.getItem("address");
            console.log(phone);
            if (phone != null && address != null) {
                this.$router.push({path: "/"});
            } else {
                this.$router.push({path: "/addressInfo"});
            }
        }
    },
    computed: {
        // subPrice() {
        //     const price = this.items.price * this.items.quantity;
        //     return price
        // }
    }

}
</script>
<style scoped lang="scss" src="@/styles/cart.scss">
</style>