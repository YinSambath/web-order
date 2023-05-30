// <template>
//     <div class="order-detail">
//     </div>
// </template>
// <script>
// import item1 from '@/assets/icons/item-2.png'
// import arrowBack from '@/assets/icons/arrow-back.png'

// import ApiService from '@/services/ApiService';
// import { ref } from 'vue';
// export default {
//     name: "OrderView",
//     data() {
//         return {
//             item1, arrowBack,
//             uomId: "",
//             quantity: 1,
//             additional: "",
//             loading: false,
//             cart: [],
//         }
//     },

//     setup() {
//         const product = ref({});

//         return {
//             product
//         }
//     },
//     created() {
//         console.log(1)
//         this.getproduct();
//         console.log(1)
//     },
//     methods: {
//         getproduct() {
//             console.log(1)
//             let id = this.$route.params.id;
//             ApiService.getProduct(id).then((result) => {
//                 console.log(1)
//                 if (result.response.status === 200 && result.results) {
//                     this.product = result.results
//                     console.log(this.product)
//                 }
//             }).catch(e => console.log(e))
//             console.log(1)
//         },

//         goBack() {
//             this.$router.back();
//         },
        
//         addSize() {
//             console.log(this.uomId);
//         },
//         addAdditional(value) {
//             console.log(value);
//         },
//         goCart() {
//             if (this.uomId) {
//                 this.cart.push(this.designData())
//                 this.$router.push({
//                     name: 'index',
//                 });
//             } else {
//                 console.log("try again")
//             }
//         },
//         designData() {
//             let detail = {
//                     cost: this.product.productPrice[0].price * this.quantity,
//                     id: 0,
//                     product: {
//                         id: this.product.id,
//                     },
//                     quantity: this.quantity,
//                     uom: {
//                         id: this.uomId,
//                     }
//                 }
//             return detail;
//         },
//         buyNow() {
//             this.cart.push(this.designData())
//             console.log(this.cart)
//             let phone = localStorage.getItem("phone");
//             let address = localStorage.getItem("address");
//             if (phone != null && address != null) {
//                 this.$router.push({path: "/"});
//             } else {
//                 this.$router.push({path: "/addressInfo"});
//             }
//         },
        
//         getFullPathImage(path) {
//             return process.env.VUE_APP_BASE_URL + path
//         },
//     }
// }
// </script>
// <style scoped lang="scss" src="@/styles/order.scss"></style>