<template>
    <div class="order-detail" v-if="loading">
        <div class="top-detail">
            <img class="arrow-left" :src="arrowBack" @click="goBack" alt/>
            <img class="image-detail" :src="product.imageUrl ? getFullPathImage(product.imageUrl) : require('@/assets/images/food_default.jpeg')" alt/>
        </div>
        <div class="bottom-detail">
            <div class="first-detail">
                <h5 class="item-name">{{ product.name }}</h5>
                <div class="item-price-quantity">
                    <p class="price">{{ "$" + product.productPrice[0].price.toFixed(2) }}</p>
                    <div class="quatity">
                        <el-button @click.prevent="decrement" :disabled="quantity == 1" class="btn-minus" circle>
                            <img :src="minus" />
                        </el-button>
                        <p>{{ quantity }}</p>
                        <el-button @click.prevent="increment" class="btn-plus" circle>
                            <img :src="plus" />
                        </el-button>
                    </div>
                </div>
            </div>
            <el-divider />
            <div class="description">
                <h5>{{ product.nameSecond }}</h5>
                <p>Fresh Duck with 3 sizes Mixed with chili and it's really popular for dinner with family and friends.</p>
            </div>
            <el-divider />
            <div class="size">
                <h5>Size</h5>
                <el-radio-group v-model="uomId" @change="addSize()" v-if="product.productUom">
                    <el-radio v-for="(uom, uomIndex) in product.productUom" :key="(uom, uomIndex)" :label="uom.uom.id" size="default" >{{ uom.uom.name }}</el-radio>
                </el-radio-group>
            </div>
            <el-divider />
            <div class="additional" v-if="product.topping[0]">
                <span>
                    <h5>Frequenly bought together</h5>
                    <el-tag type="info" size="small" round>Optional</el-tag>
                </span>
                <el-radio-group v-model="additional" @change="addAdditional(additional)">
                    <el-radio v-for="(topping, toppingIndex) in product.topping" :key="(topping, toppingIndex)" :label="topping.remark" size="default">
                        <p>{{ topping.remark }}</p>
                        <!-- <p>12.5$</p> -->
                    </el-radio>
                </el-radio-group>
                <!-- <el-checkbox label="Online activities" name="type" /> -->
            </div>
            <el-button-group class="btn-submit">
                <el-button class="add-to-cart" @click="goCart">Add to cart</el-button>
                <el-button class="buy-now" @click="buyNow">Buy now</el-button>
            </el-button-group>
        </div>
    </div>
</template>
<script>
import item1 from '@/assets/icons/item-2.png'
import arrowBack from '@/assets/icons/arrow-back.png'
import minus from '@/assets/icons/minus.png'
import plus from '@/assets/icons/plus.png'
import ApiService from '@/services/ApiService';
import { ref } from 'vue';
export default {
    name: "OrderView",
    data() {
        return {
            item1, arrowBack, minus, plus,
            uomId: "",
            quantity: 1,
            additional: "",
            loading: false,
            cart: [],
        }
    },

    setup() {
        const product = ref({});

        return {
            product
        }
    },
    created() {
        this.getproduct();
    },
    methods: {
        getproduct() {
            let id = this.$route.params.id;
            ApiService.getProduct(id).then((result) => {
                if (result.response.status === 200 && result.results) {
                    this.product = result.results
                    console.log(this.product)
                    this.loading = true;
                }
            }).catch(e => console.log(e))
        },

        goBack() {
            this.$router.back();
        },

        increment() {
            this.quantity++;
        },

        decrement() {
            this.quantity-- ;
        },

        addSize() {
            console.log(this.uomId);
        },

        addAdditional(value) {
            console.log(value);
        },

        goCart() {
            if (this.uomId) {
                this.cart.push(this.designData())
                this.$router.push({
                    name: 'index',
                });
            } else {
                console.log("try again")
            }
        },

        designData() {
            let detail = {
                    cost: this.product.productPrice[0].price * this.quantity,
                    id: 0,
                    product: {
                        id: this.product.id,
                    },
                    quantity: this.quantity,
                    uom: {
                        id: this.uomId,
                    }
                }
            return detail;
        },

        buyNow() {
            this.cart.push(this.designData())
            console.log(this.cart)
            let phone = localStorage.getItem("phone");
            let address = localStorage.getItem("address");
            if (phone != null && address != null) {
                this.$router.push({path: "/"});
            } else {
                this.$router.push({path: "/addressInfo"});
            }
        },
        getFullPathImage(path) {
            return process.env.VUE_APP_BASE_URL + path
        },
    }
}
</script>
<style scoped lang="scss" src="@/styles/order.scss"></style>