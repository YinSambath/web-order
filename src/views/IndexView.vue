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
            <el-drawer
                style="max-width: 600px; margin: 0 auto; border-radius: 20px 20px 0 0;"
                v-model="drawer"
                direction="btt"
                :before-close="handleClose"
                size="90vh"
            >   
                <div class="detail-drawer">
                    <div class="top-detail">
                        <img class="image-detail" :src="product.imageUrl ? getFullPathImage(product.imageUrl) : require('@/assets/images/food_default.jpeg')" alt/>
                    </div>
                    <div class="bottom-detail">
                        <div class="first-detail">
                            <h5 class="item-name">{{ product.name }}</h5>
                            <div class="item-price-quantity">
                                <p class="price">{{ "$" + calPrice }}</p>
                                <div class="quatity">
                                    <el-button @click.prevent="decrement" :disabled="body.detail.quantity == 1" class="btn-minus" circle>
                                        <img :src="minus" />
                                    </el-button>
                                    <p>{{ body.detail.quantity }}</p>
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
                            <el-radio-group v-model="body.detail.uom.id" @change="addSize()" v-if="product.productUom">
                                <el-radio v-for="(uom, uomIndex) in product.productUom" :key="(uom, uomIndex)" :label="uom.uom.id" size="default" >{{ uom.uom.name }}</el-radio>
                            </el-radio-group>
                        </div>
                        <el-divider />
                        <div class="additional" v-if="product.topping[0]">
                            <span>
                                <h5>Frequenly bought together</h5>
                                <el-tag type="info" size="small" round>Optional</el-tag>
                            </span>
                            <el-checkbox-group v-model="additional" @change="addAdditional(additional)">
                                <el-checkbox v-for="(topping, toppingIndex) in product.topping" :label="topping.remark" :key="(topping, toppingIndex)" size="default">
                                    <p>{{ topping.remark }}</p>
                                </el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <el-button-group class="btn-submit">
                            <el-button class="add-to-cart" @click="goCart">Add to cart</el-button>
                            <el-button class="buy-now" @click="buyNow">Buy now</el-button>
                        </el-button-group>
                    </div>
                </div>
            </el-drawer>
        </div>
    </div>
</template>
    
<script>
import NavBar from '@/components/NavBar.vue';
import ApiService from '@/services/ApiService';
import minus from '@/assets/icons/minus.png';
import plus from '@/assets/icons/plus.png';
import { ElMessageBox } from 'element-plus'

export default {
    name: "IndexPage",
    components: {NavBar},
    data() {
        return {
            minus, plus, 
            search: {
                query: "",
            },
            activeItem: 0,
            category: [],
            products: [],
            productGroup: [],
            filterProduct: [],
            drawer: false,
            product: "",
            quantity: 1,
            additional: [],
            cart: "",
            body: {
                detail: {
                    price: "",
                    product: {
                        id: ""
                    },
                    quantity: 1,
                    uom: {
                        id: ""
                    },
                    topping: []
                }
            }
        }
    },
    created() {
        this.getList();
    },
    computed: {
        calPrice: function() {
            return (+this.body.detail.price * this.body.detail.quantity);
        }
    },
    methods: {
        getList() {
            ApiService.getHome().then((result) => {
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
            this.drawer = true;
            this.cart = [];
            this.cart = (JSON.parse(localStorage.getItem("cart")) !== null) ? JSON.parse(localStorage.getItem("cart")) : [] ;
            this.product = this.products.find((item) => item.id === id);
            this.body.detail.price = this.product.productPrice[0].price
            this.body.detail.uom.id = this.product.productPrice[0].uom.id
            this.body.detail.product.id = this.product.id
        },
        handleClose () {
            this.drawer = true;
            ElMessageBox.confirm('Are you sure you want to close this?')
            .then(() => {
                console.log(this.product)
                this.drawer = false;
            }).catch((e) => {
                console.log(e)
            });
        },
        getFullPathImage(path) {
            return process.env.VUE_APP_BASE_URL + path
        },
        increment() {
            this.body.detail.quantity++;
        },
        decrement() {
            this.body.detail.quantity-- ;
        },
        addSize() {
            console.log(this.body.detail.uom);
        },
        addAdditional(value) {
            this.body.detail.topping = value;
            this.body.detail.topping = this.body.detail.topping.map((str,) => ({ remark: str}));
        },
        goCart() {
            const oldProduct = this.cart.find((item) => item.product.id === this.product.id )
            console.log(oldProduct)
            console.log(this.body.detail.topping.every(k=>oldProduct.topping.some(d=>d.remark === k.topping.remark)))
            console.log(this.body.detail.topping.length)
            console.log(oldProduct.topping.length)
            if (this.cart.length > 0 
                && oldProduct.uom.id === this.body.detail.uom.id 
                && oldProduct.topping.length === this.body.detail.topping.length) {
                console.log(true)
            } else {
                this.cart.push(this.body.detail)
            }
            console.log(this.cart)
            localStorage.setItem("cart", JSON.stringify(this.cart))
            this.drawer = false;
        },
        buyNow() {
            this.cart.push(this.body.detail)
            localStorage.setItem("cart", JSON.stringify(this.cart))
            console.log(this.cart)
            let phone = localStorage.getItem("phone");
            let address = localStorage.getItem("address");
            if (phone != null && address != null) {
                this.$router.push({path: "/"});
            } else {
                this.$router.push({path: "/addressInfo"});
            }
        },
        designDataProduct() {

        },
    }
}
</script>
<style scoped lang="scss" src="@/styles/index.scss">
</style>
