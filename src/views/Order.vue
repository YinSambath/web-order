<template>
    <div class="order-detail">
        <div class="top-detail">
            <img class="arrow-left" :src="arrowBack" @click="goBack" alt/>
            <img class="image-detail" :src="item1" alt/>
        </div>
        <div class="bottom-detail">
            <div class="first-detail">
                <p class="item-name">Chili Sauce Roasted Star Duck</p>
                <div class="item-price-quantity">
                    <p class="price">$14.50</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import item1 from '@/assets/icons/item-2.png'
import arrowBack from '@/assets/icons/arrow-back.png'
export default {
    name: "OrderView",
    data() {
        return {
            item1, arrowBack
        }
    },
    setup() {
    },
    methods: {
        goBack() {
            this.$router.back();
        },
    }
}
</script>
<style scoped lang="scss">
    .order-detail {
        min-height: 100vh;
        background-color: #ffffff;

        .top-detail {
            height: 60vh;
            background-color: #FFE8EE;
            border-radius: 0 0 40px 40px;
            display: flex;
            position: relative;

            .arrow-left {
                position: absolute;
                top: 25px;
                left: 25px;
                width: 30px;
                height: 30px;
            }
            .image-detail {
                margin: auto;
                max-width: 75vw;
                max-height: 45vh;
                border-radius: 50%;
            }
        }
        .bottom-detail {
            padding: 3vw;
            height: auto;

            .first-detail {
                .item-name {
                    margin: 0;
                    font-size: 1rem;
                    font-weight: bold;
                    text-align: start;
                }
                .item-price-quantity {
                    display: flex;

                    .price {
                        margin: 10px 0;
                        font-size: 1.1rem;
                        color: #FF6464;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>