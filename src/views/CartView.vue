<template>
    <div class="cart-page">
        <div class="navbar">
            <el-icon @click="$router.push({path: '/'})" class="back"><Back /></el-icon>
            <p><b>Cart</b></p>
            <button class="deleteAll" @click="dialogClear = true" :disabled="!items.length > 0">Delete All</button>
        </div>
        <div class="container" v-if="items.length !== 0">
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
                <div class="right">
                    <div class="quatity">
                        <el-button @click.prevent="decrement(itemIndex)" :disabled="item.quantity == 1" class="btn-minus" circle>
                            <img :src="minus" />
                        </el-button>
                        <h5>{{ item.quantity }}</h5>
                        <el-button @click.prevent="increment(itemIndex)" class="btn-plus" circle>
                            <img :src="plus" />
                        </el-button>
                    </div>
                    <div class="delete">
                        <el-icon color="#FF0000" style="cursor: pointer;" @click="deleteItem(itemIndex)"><Delete /></el-icon>
                    </div>
                </div>
            </div>
        </div>
        <div class="emptyCart" v-else>
            <el-result
                class="empty"
                icon="warning"
                title="No items"
            >
            </el-result>
        </div>
        <el-divider style="margin: 0;"></el-divider>
        <div class="price-checkout">
            <div class="total-price">
                <h4 class="red-text">Total:</h4>
                <h4 class="green-text">$ {{ subPrice }}</h4>
            </div>
            <el-button class="checkout-btn" @click="checkOut">Check Out</el-button>
        </div>
    </div>
    <el-dialog
        v-model="dialogClear"
        title="Warning"
        width="30%"
        aligh-center
        center
    >
        <span style="text-align: center;">Are you sure you want to delete all item in cart?</span>
        <template #footer>
        <span class="dialog-footer">
            <el-button @click="dialogClear = false">Cancel</el-button>
            <el-button type="danger" @click="clearCart()">Delete</el-button>
        </span>
        </template>
    </el-dialog>
</template>
<script>
import {ref} from 'vue';
import minus from '@/assets/icons/minus.png'
import plus from '@/assets/icons/plus.png'
import { ElMessage } from 'element-plus'
export default {
    name: "CartView",
    data() {
        return {
            minus, plus
        }
    },
    setup() {
        const quantity = ref(1);
        const totalPrice = ref(0);
        const items = ref([]);
        const dialogClear = ref(false);
        const quantityUpdated = ref('');

        return {
            quantity,
            totalPrice,
            items,
            dialogClear,
            quantityUpdated,
            
        }
    },
    created() {
        this.items = JSON.parse(localStorage.getItem("cart"));
    },
    methods: {
        increment(i) {
            this.items[i].quantity++;
            this.items[i].price = this.calPrice(i)
        },
        decrement(i) {
            this.items[i].quantity--;
            this.items[i].price = this.calPrice(i)
        },
        checkOut() {
            if (this.items.length > 0) {
                localStorage.setItem("cart", JSON.stringify(this.items))
                let phone = localStorage.getItem("phone");
                let address = localStorage.getItem("address");
                console.log(this.cart);
                if (phone != null && address != null) {
                    this.$router.push({path: "/confirmOrder"});
                } else {
                    this.$router.push({path: "/addressInfo"});
                }
            } else {
                ElMessage.error('No item')
            }
            
        },
        getFullPathImage(path) {
            return process.env.VUE_APP_BASE_URL + path
        },
        clearCart() {
            this.items = []
            localStorage.removeItem('cart');
            this.dialogClear = false
        },
        calPrice(itemIndex) {
            console.log(itemIndex)
            return this.items[itemIndex].product.price * this.items[itemIndex].quantity
        },
        deleteItem(itemIndex) {
            this.items.splice(itemIndex, 1);
            localStorage.setItem("cart", JSON.stringify(this.items))
            
        }

    },
    computed: {
        subPrice() {
            if (this.items) {
                const total = this.items.reduce((partialSum, item) => partialSum + (parseFloat(item.price)), 0);
                return total;
            }
            return 0;
        }
    }

}
</script>
<style scoped lang="scss" src="@/styles/cart.scss">
</style>