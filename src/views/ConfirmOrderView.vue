<template>
    <div class="confirm-order">
        <div class="top-detail">
            <img class="arrow-left" :src="arrowBack" @click="goBack" alt />
            <h3>Confirm Order</h3>
        </div>
        <div class="confirm-order-list">
            <div class="user-info" @click="goEdit">
                <div class="left-info">
                    <img :src="phoneIcon" alt/>
                    <p>010827251</p>
                </div>
                <img :src="arrowBack" alt/>
            </div>
            <el-divider />
            <div class="user-info" @click="goEdit">
                <div class="left-info">
                    <img :src="locationIcon" alt/>
                    <p>phone penh</p>
                </div>
                <img :src="arrowBack" alt/>
            </div>
            <el-divider />
            <div class="food-list">
                <div class="item-box" v-for="item in items" :key="item.id">
                    <div class="logo-detail">
                        <img :src="item.icon" />
                        <div class="detail">
                            <h5>{{ item.name }}</h5>
                            <p>size: {{ item.size }}</p>
                            <h5>{{ item.price }}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <el-divider />
            <div class="price-list">
                <span>
                    <p class="price-text">Subtotal</p>
                    <p class="price-text">$14.00</p>
                </span>
                <span>
                    <p class="price-text">Tax 10% (VAT included)</p>
                    <p class="price-text">$0.10</p>
                </span>
                <span>
                    <p class="price-text">Discount</p>
                    <p class="price-text">$3.50</p>
                </span>
                <span>
                    <p class="price-text">Delivery</p>
                    <p class="price-text">$1.50</p>
                </span>
                <el-button class="voucher" link>Apply Voucher</el-button>
                <el-divider />
                <span>
                    <p class="total-price">Order total:</p>
                    <p class="total-price">USD $15.50</p>
                </span>
            </div>
        </div>
        <div class="btn">
            <el-button class="btn-confirm" @click="submitInfo">Order now</el-button>
        </div>
    </div>
</template>
<script>
    import { ref } from "vue";   
    import arrowBack from "@/assets/icons/arrow-back.png";
    import locationIcon from "@/assets/icons/location-icon.png";
    import phoneIcon from "@/assets/icons/phone.png";
    import item1 from '@/assets/icons/item-1.png';
    import item2 from '@/assets/icons/item-2.png';
    import item3 from '@/assets/icons/item-3.png';
    import item4 from '@/assets/icons/item-4.png';
    import item5 from '@/assets/icons/item-5.png';
  export default {
    name: "confirmOrderView",
    data() {
      return {
        arrowBack, locationIcon, phoneIcon, item1, item2, item3, item4, item5
      };
    },
    setup() {
      const phone = ref('');
      const address = ref('');
      const items = ref([
                {
                    id: '1',
                    name: 'StreetBox Roasted Duck',
                    price: '50.00$',
                    size: 'm',
                    icon: item2,
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
                // {
                //     id: '4',
                //     name: 'StreetBox Roasted Duck',
                //     price: '50.00$',
                //     size: 'm',
                //     icon: item4,
                //     quantity: 1
                // },
                // {
                //     id: '5',
                //     name: 'StreetBox Roasted Duck',
                //     price: '50.00$',
                //     size: 'l',
                //     icon: item5,
                //     quantity: 1
                // },
            ]);
      return {
          phone,
          address,
          items
      };
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
                localStorage.setItem("phone", this.phone);
                localStorage.setItem("address", this.address);
        }
      }
    },
  };
</script>
<style scoped lang="scss">
    .confirm-order {
        height: auto;
        .top-detail {
            background-color: #ffffff;
            position: relative;
            height: 55px;
            display: flex;
            justify-content: center;
            align-items: center;
            .arrow-left {
                position: absolute;
                top: 15px;
                left: 15px;
                width: 20px;
                height: 20px;
            }
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
                height: 50px;
                padding: 0 15px;
                .left-info {
                    max-width: 40%;
                    display: flex;
                    p {
                        margin: 0;
                        align-self: center;
                        font-weight: 650;
                    }
                    img {
                        align-self: center;
                        width: 25px;
                        height: 25px;
                        margin-right: 15px;
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
                    margin: 15px 0;
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
  
  </style>
  