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
            <el-button class="checkout-btn">Check Out</el-button>
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
        },
        decrement(i) {
            this.items[i].quantity-- ;
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
<style scoped lang="scss" >
    .cart-page {
        max-width: 820px;
        height: 100vh;
        overflow: hidden;
        // background-color: red;
        .container {
            max-height: 80vh;
            height: 80vh;
            overflow: auto;
            margin-bottom: 15px;
            .item {
                height: 105px;
                background-color: #ffffff;
                margin: 15px;
                border-radius: 12px;
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
                        align-items: center;
                        margin: 15px 0;
                        h5, p {
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            margin: 0;
                            text-align: start;
                            align-self: center;

                        }
                        p {
                            color: #999999;
                            font-size: 0.85rem;
                        }
                }
                }
                .quatity {
                    margin: 15px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    border-radius: 18px;
                    max-height: 25px;

                    h5 {
                        margin: 0 10px;
                        font-weight: 600;
                    }
                    .btn-minus {
                        height: 23px;
                        width: 23px;
                        margin: 0 3px;
                        background-color: #FFBC2D;
                        border: none;

                        img {
                            max-width: 10px;
                            color: #F2F2F2;
                        }
                    }
                    .btn-plus {
                        height: 23px;
                        width: 23px;
                        margin: 0 3px;
                        border: none;
                        background-color: #FFBC2D;

                        img {
                            max-width: 10px;
                            color: #F2F2F2;
                        }
                    }
                }
            }
        }
        .price-checkout {
            margin: 0 15px;
            .total-price {
                display: flex;
                justify-content: space-between;

                .red-text {
                    margin: 12px 3px;
                    color: #FF6464;
                }
                .green-text {
                    margin: 12px 3px;
                    color: #49A32A;
                }
            }
            .checkout-btn {
                width: 100%;
                height: 40px;
                border-radius: 9px;
                background-color: #FF6464;
                color: #ffffff;
            }
        }
    }

    @media screen and (max-width: 415px) {
        .cart-page {
            .container {
                .item {
                    height: 90px;
                    .logo-detail {
                        display: flex;
                        
                        img {
                            max-height: 75px;
                        }
                    }
                    .quatity {
                        margin: 12px;
                        h5 {
                            margin: 0 5px;
                        }
                        .btn-minus {
                            height: 16px;
                            width: 16px;
                        }
                        .btn-plus {
                            height: 16px;
                            width: 16px;
                        }
                    }
                }
            }
        }
    }
</style>