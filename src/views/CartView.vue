<template>
<div class="cart-page" >
        <div class="navbar">
            <el-icon @click="$router.push({path: '/'})" class="back"><Back /></el-icon>
            <p><b>Cart</b></p>
            <button class="deleteAll" @click="deleteAll()">Delete All</button>
        </div>
        <div class="container">
            <div class="item" v-for="(item,itemIndex) in items" :key="(item,itemIndex)">
                <div class="logo-detail">
                    <!-- <img :src="item.imageUrl" /> -->
                    <img :src=" (item.imageUrl) ? getFullPathImage(item.imageUrl) : require('@/assets/images/food_default.jpeg')" alt/>
                    <div class="detail">
                        <h5>{{ item.name }}</h5>
                        <p>Topping: 
                            <span v-for="(topping, toppingIndex) in item.topping" :key="(topping, toppingIndex)">{{ topping.remark }} 
                                <span v-if="toppingIndex < item.topping.length-1">,</span>
                            </span>
                        </p>
                        <p>size: {{ item.size }}</p>
                        <p>Total: <b style="color: #000;">{{ item.price }}$</b></p>
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
import item1 from '@/assets/icons/item-1.png';
import item2 from '@/assets/icons/item-2.png';
import item3 from '@/assets/icons/item-3.png';
import item4 from '@/assets/icons/item-4.png';
import item5 from '@/assets/icons/item-5.png';
import minus from '@/assets/icons/minus.png'
import plus from '@/assets/icons/plus.png'
export default {
    name: "CartView",
    data() {
        return {
            item1, item2, item3, item4, item5, minus, plus
        }
    },
    setup() {
        const quantity = ref(1);
        const totalPrice = ref(0);
        const items = ref([]);

        return {
            quantity,
            totalPrice,
            items,
        }
    },
    created() {
        this.items = JSON.parse(localStorage.getItem("cart"));
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
        },
        getFullPathImage(path) {
            return process.env.VUE_APP_BASE_URL + path
        },
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