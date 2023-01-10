<template>
    <div class="order-detail">
        <div class="top-detail">
            <img class="arrow-left" :src="arrowBack" @click="goBack" alt/>
            <img class="image-detail" :src="item1" alt/>
        </div>
        <div class="bottom-detail">
            <div class="first-detail">
                <h5 class="item-name">Chili Sauce Roasted Star Duck</h5>
                <div class="item-price-quantity">
                    <p class="price">$14.50</p>
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
                <h5>Chili Sauce Roasted Star Duck</h5>
                <p>Fresh Duck with 3 sizes Mixed with chili and it's really popular for dinner with family and friends.</p>
            </div>
            <el-divider />
            <div class="size">
                <h5>Size</h5>
                <el-radio-group v-model="size" @change="addSize(size)">
                    <el-radio label="s" size="default">S</el-radio>
                    <el-radio label="m" size="default">M</el-radio>
                    <el-radio label="l" size="default">L</el-radio>
                </el-radio-group>
            </div>
            <el-divider />
            <div class="additional">
                <span>
                    <h5>Frequenly bought together</h5>
                    <el-tag type="info" size="small" round>Optional</el-tag>
                </span>
                <el-radio-group v-model="additional" @change="addAdditional(additional)">
                    <el-radio label="1" size="default">
                        <p>Duck chili 125%</p>
                        <p>12.5$</p>
                    </el-radio>
                    <el-radio label="2" size="default">
                        <p>Duck chili 100%</p>
                        <p>10.5$</p>
                    </el-radio>
                </el-radio-group>
                <!-- <el-checkbox label="Online activities" name="type" /> -->
            </div>
            <el-button-group class="btn-submit">
                <el-button class="add-to-cart">Add to cart</el-button>
                <el-button class="buy-now">Buy now</el-button>
            </el-button-group>
        </div>
    </div>
</template>
<script>
import {ref} from 'vue';
import item1 from '@/assets/icons/item-2.png'
import arrowBack from '@/assets/icons/arrow-back.png'
import minus from '@/assets/icons/minus.png'
import plus from '@/assets/icons/plus.png'
export default {
    name: "OrderView",
    data() {
        return {
            item1, arrowBack, minus, plus
        }
    },
    setup() {
        const quantity = ref(1);
        const size = ref({});
        const additional = ref({});

        return {
            quantity,
            size, 
            additional,
        }
    },
    methods: {
        goBack() {
            this.$router.back();
        },
        increment() {
            this.quantity++;
        },
        decrement() {
            this.quantity-- ;
        },
        addSize(value) {
            console.log(value);
        },
        addAdditional(value) {
            console.log(value);
        },
    }
}
</script>
<style scoped lang="scss" src="@/styles/order.scss"></style>