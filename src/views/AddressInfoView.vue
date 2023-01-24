<template>
  <div class="address-info">
    <div class="top-detail">
      <img class="arrow-left" :src="arrowBack" @click="goBack" alt />
    </div>
    <div class="edit-address">
        <h2>Enter your mobile number and address</h2>
        <h4 class="phone-header">We'll contact you by this number</h4>
        <el-input class="phone-input" v-model="phone" placeholder="00-000-000" type="number">
            <template #prepend>
                +855 
            </template>
        </el-input>
        <br/><br/><br/><br/><br/>
        <h4 class="address-header" >please input your address to delivery</h4>
        <el-input class="address-input" v-model="address" placeholder="Address">
            <template #prepend>
                <img class="current-location-icon" :src="currentLocation" />
            </template>
        </el-input>
        <div class="location-picker">
            Pick location
        </div>
    </div>
    
    <el-button class="btn-confirm" @click="submitInfo">ABC</el-button>
    
  </div>
</template>
<script>
import { ref } from "vue";   
import arrowBack from "@/assets/icons/arrow-back.png";
import currentLocation from "@/assets/icons/current-location.png";
export default {
  name: "addressInfoView",
  data() {
    return {
      arrowBack,
      currentLocation,
    };
  },
  setup() {
    const phone = ref('');
    const address = ref('');
    return {
        phone,
        address
    };
  },
  methods: {
    goBack() {
            this.$router.back();
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
.address-info {
    background-color: #ffffff;
    height: 100vh;
    padding: 0 15px;
    .top-detail {
        position: relative;
        height: 55px;
        .arrow-left {
            position: absolute;
            top: 15px;
            left: 0;
            width: 20px;
            height: 20px;
        }
        .image-detail {
            margin: auto;
            max-width: auto;
            max-height: 45vh;
            border-radius: 50%;
        }
    }
    .edit-address {
        height: 83%;
        h2 {
            margin: 15px 0;
            text-align: start;
        }
        .phone-header {
            text-align: start;
        }
        .phone-input {
            font-size: 1.25rem;
        }
        .address-header {
            text-align: start;
            margin: 10px 0;
        }
        .address-input {
            font-size: 1.25rem;
            margin-bottom: 15px;
            .current-location-icon {
                width: 15px;
                height: 15px;
            }
        }
        .location-picker {
            width: 100%;
            height: 250px;
            border: 1px solid black;
        }
    }
    .btn-confirm {
        background-color: #FF6464;
        width: 100%;
        height: 45px;
        margin: auto;
        color: #ffffff;
        border-radius: 12px;
        margin-bottom: 20px;
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
