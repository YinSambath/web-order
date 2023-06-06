<template>
  <div class="address-info">
    <div class="top-detail">
        <el-icon @click="$router.back()"><Back /></el-icon>
        <p style="margin: 0;"><b>Confirm Information</b></p>
        <div></div>
    </div>
    
    <div class="edit-address">
        <h3 style="margin: 25px 0;">Please enter your information below</h3>
        <div class="name">
            <div class="firstname">
                <h5 class="input-header">First name</h5>
                <el-input class="name-input" v-model="firstName" placeholder="Input your first name" type="text"></el-input>
                <el-divider style="margin: 20px 0 10px 0;" />
            </div>
            <div class="lastname">
                <h5 class="input-header">Last name</h5>
                <el-input class="name-input" v-model="lastName" placeholder="Input your last name" type="text"></el-input>
                <el-divider style="margin: 20px 0 10px 0;" />
            </div>
        </div>
        <h5 class="input-header">please input your phone number</h5>
        <el-input class="phone-input" v-model="phone" placeholder="00-000-000" type="number">
            <template #prepend>
                +855 
            </template>
        </el-input>
        <el-divider style="margin: 20px 0;" />
        <h5 class="input-header" >please input your address</h5>
        <el-input class="address-input" v-model="address" placeholder="Address">
            <template #prepend>
                <img class="current-location-icon" :src="currentLocation" />
            </template>
        </el-input>
        <el-divider style="margin: 10px 0;" />
    </div>
    
    <el-button class="btn-confirm" @click="submitInfo">Confirm</el-button>
    
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
    const firstName = ref('');
    const lastName = ref('');
    return {
        phone,
        address,
        firstName,
        lastName
    };
  },
  methods: {
    submitInfo() {
        if (this.phone != "" && this.address != "") {
            localStorage.setItem("phone", this.phone);
            localStorage.setItem("address", this.address);
            localStorage.setItem("firstName", this.firstName);
            localStorage.setItem("lastName", this.lastName);
            this.$router.push({path: "/confirmOrder"})
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 55px;
        gap: 8vw;
        .arrow-left {
            position: absolute;
            top: 30px;
            left: 0;
            width: 20px;
            height: 20px;
        }
    }
    .edit-address {
        height: 60vh;
        .name {
            display: flex;
            gap: 20px;
            .firstname {
                text-align: start;
                width: 50%;
                max-width: 50%;

                :deep(.el-input__wrapper) {
                    padding: 0;
                }
            }
            .lastname {
                text-align: start;
                width: 50%;
                max-width: 50%;

                :deep(.el-input__wrapper) {
                    padding: 0;
                }
            }
        }
        h5 {
            margin: 15px 0;
            text-align: start;
        }
        .input-header {
            text-align: start;
        }
        .phone-input {
            font-size: 1.25rem;
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
