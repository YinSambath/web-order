<template>
    <div class="confirm-order" v-if="isOrder === false">
        <div class="top-detail">
            <el-icon @click="goBack"><Back /></el-icon>
            <h3>Confirm Order</h3>
            <div></div>
        </div>
        <div class="confirm-order-list">
            <div class="user-info" @click="goEdit">
                <div class="left-info">
                    <el-icon :size="25"><Cellphone /></el-icon>
                    <p>{{ body.phone }}</p>
                </div>
                <el-icon><Right /></el-icon>
            </div>
            <el-divider />
            <div class="user-info" @click="goEdit">
                <div class="left-info">
                    <el-icon :size="25"><Location /></el-icon>
                    <p>{{ body.address }}</p>
                </div>
                <el-icon><Right /></el-icon>
            </div>
            <el-divider />
            <div class="food-list">
                <div class="item-box" v-for="(item,itemIndex) in items" :key="(item,itemIndex)">
                    <div class="item-box-detail">
                        <div class="logo-detail">
                            <img :src=" (item.imageUrl) ? getFullPathImage(item.imageUrl) : require('@/assets/images/food_default.jpeg')" alt/>
                            <div class="detail">
                                <h5>{{ item.name }}</h5>
                                <p>Topping: 
                                    <span v-for="(topping, toppingIndex) in item.topping" :key="(topping, toppingIndex)">{{ topping.remark }} 
                                        <span v-if="toppingIndex < item.topping.length-1">,</span>
                                    </span>
                                </p>
                                <p>size: {{ item.uom.name }}</p>
                            </div>
                        </div>
                        <div class="price-detail">
                            <p>Quantity: {{ item.quantity }}</p>
                            <h5>price: $ {{ item.price }}</h5>
                        </div>
                    </div>
                    <el-divider v-if="itemIndex !== items.length-1" />
                </div>
            </div>
            <el-divider />
            <div class="price-list">
                <span>
                    <p class="price-text">Subtotal</p>
                    <p class="price-text">$ {{ subPrice.toFixed(2) }}</p>
                </span>
                <span>
                    <p class="price-text">Tax {{ this.vat }}% (VAT included)</p>
                    <p class="price-text">$ {{ this.calVat.toFixed(2) }}</p>
                </span>
                <span>
                    <p class="price-text">Discount</p>
                    <p class="price-text">$ {{ this.calDis.toFixed(2) }}</p>
                </span>
                <span>
                    <p class="price-text">Delivery</p>
                    <p class="price-text">$ {{ this.delivery.toFixed(2) }}</p>
                </span>
                <el-button class="voucher" link>Apply Voucher</el-button>
                <el-divider />
                <span>
                    <p class="total-price">Order total:</p>
                    <p class="total-price">USD {{ orderTotal.toFixed(2) }}</p>
                </span>
            </div>
        </div>
        <div class="btn">
            <el-button class="btn-confirm" @click="submitInfo">Order now</el-button>
        </div>
    </div>
    <div class="success-alert" v-else>
        <el-result
            class="result"
            icon="success"
            title="Success order"
            sub-title="Please enjoy your foods"
        >
      </el-result>
    </div>
</template>
<script>
    import ApiService from "@/services/ApiService";
import { ref } from "vue";   
  export default {
    name: "confirmOrderView",
    data() {
      return {
        isOrder: false,
        body: {
            address: "",
            detail: [],
            firstName: "",
            lastName: "",
            latitude: 0,
            longitude: 0,
            phone: "",
            taxAmount: 0,
            totalPrice: 0
        }
      };
    },
    setup() {
        const items = ref([]);
        const vat = ref(0);
        const discount = ref(0);
        const delivery = ref(0);
        return {
            items,
            vat,
            discount,
            delivery
        };
    },
    created() {
        this.body.phone = localStorage.getItem("phone")
        this.body.address = localStorage.getItem("address")
        this.body.firstName = localStorage.getItem("firstName")
        this.body.lastName = localStorage.getItem("lastName")
        this.items = JSON.parse(localStorage.getItem("cart"))
    },
    methods: {
        goBack() {
              this.$router.back();
        },
        goEdit() {
              this.$router.push({path: "/addressinfo"});
        },
        submitInfo() {
            if (this.phone != "" && this.address != "") {
                const body = {
                    firstname: this.body.firstName,
                    lastName: this.body.lastName,
                    phone: this.body.phone,
                    address: this.body.address,
                    latitude: this.body.latitude,
                    longitude: this.body.longitude,
                    textAmount: this.calVat,
                    totalPrice: this.grandTotal,
                    detail: this.items
                }
                ApiService.getOrder(body).then((result) => {
                    if (result.response.status === 200) {
                        this.isOrder = true;
                        localStorage.removeItem('cart');
                        setTimeout(() =>this.$router.push({path: '/'}), 2000);
                    }
                })
            } else {
                this.$router.push({path: '/addressInfo'})
            }
        },
        getFullPathImage(path) {
            return process.env.VUE_APP_BASE_URL + path
        },
    },
    computed: {
        subPrice() {
            const total = this.items.reduce((partialSum, item) => partialSum + (parseFloat(item.price)), 0);
            return total;
        },
        calVat() {
            const grandVat = this.subPrice * (this.vat / 100);
            return grandVat;
        },
        calDis() {
            const grandDis = this.subPrice * (this.discount / 100);
            return grandDis;
        },
        orderTotal() {
            const grandTotal = this.subPrice + this.calVat - this.calDis + this.delivery;
            return grandTotal;
        }
    }
  };
</script>
<style scoped lang="scss">
    .confirm-order {
        height: auto;
        min-height: 100vh;
        .top-detail {
            background-color: #ffffff;
            position: relative;
            height: 55px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2vw;
            h3 {
                margin: 0;
            }
          
        }
        .confirm-order-list {
            height: 83%;
            
            margin-top: 10px;
            background-color: #ffffff;

            .user-info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 50px;
                padding: 0 15px;
                .left-info {
                    max-width: 40%;
                    display: flex;
                    p {
                        margin: 0;
                        align-self: center;
                        font-weight: 650;
                        margin-left: 10px;
                    }
                }
                img {
                    align-self: center;
                    width: 25px;
                    height: 25px;
                }
            }
            .food-list {
                height: auto;
                padding: 0 15px;
                .item-box {
                    height: 85px;
                    background-color: #ffffff;
                    display: flex;
                    flex-direction: column;
                    margin: 20px 0;
                    gap: 10px;
                    .item-box-detail {
                        display: flex;
                        justify-content: space-between;
                        .logo-detail {
                            display: flex;  

                            img {
                                max-width: auto;
                                max-height: 85px;
                                margin: auto 12px;
                                border-radius: 50%; 
                            }
                            .detail {
                                display: grid;
                                margin: 0;
                                gap: 5px;
                                max-width: 70%;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                                h5, p {
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    margin: 0;
                                    text-align: start;
                                    align-self: center;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                                p {
                                    color: #999999;
                                    font-size: 0.85rem;
                                }
                            }
                        }
                    .price-detail {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        align-items: end;

                        h5,p {
                            margin: 0;
                            line-height: 20px;
                        }
                    }
                    }
                    
                }
            }
            .price-list {
                padding: 0 15px;
                span {
                    display: flex;
                    justify-content: space-between;
                    .price-text {
                        color: #a6a6a6;
                        margin: 8px 0;
                    }
                    .total-price {
                        font-weight: 600;
                        margin: 8px 0;
                    }
                }
                .voucher {
                    display: flex;
                    margin:  0 0 12px 0;
                    text-decoration: underline;
                    font-size: 1rem;
                    font-weight: 600;
                    text-align: start;
                    padding: 0;
                    color: #FF6464;
                }
            }
        }
        .btn {
            padding: 15px;
            .btn-confirm {
            background-color: #FF6464;
            width: 100%;
            height: 45px;
            color: #ffffff;
            border-radius: 12px;
            } 
        }
        :deep(.el-divider--horizontal) {
        margin: 0;
        width: auto;
        }
        :deep(.el-input-group__prepend) {
            background-color: white;
            border: none;
            box-shadow: none;
            padding: 0;
            color: black;
        }
        :deep(.el-input__wrapper) {
            background-color: white;
            border: none;
            box-shadow: none;
            padding: 0 10spx;
            color: black;
        }
        :deep(.el-input__inner) {
            color: black;
        } 
  }
  .success-alert {
    min-height: 100vh;
    width: 100%;
    .result {
        height: 100vh;
        max-height: 100vh;
        // change color of success order
        :deep(.el-result__title p) {
            color: #67c23a;
        }
    }
    // change color of tick icon
    :deep(.el-result .icon-success) {
        color: pink;
    }
  }
  
  </style>
  