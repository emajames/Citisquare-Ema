<template>
<div class="dash">
    <div class="show">
        <Navbar/>
    </div>
    <Sidebar/>
    <div class="dash1">
        <div class="nav_cont d-flex">
            <h2>Dashboard</h2>
            <div class="btn_items">
                <button class="inactive">Inactive</button>
                 <!-- <FontAwesomeIcon :icon="['far', 'bell']" class="icon" /> -->
            </div>
        </div>
        <div class="dash2">
            <div class="dash3">
                <h3>Welcome, {{user.first_name}}.</h3>
                <p v-if="kyc">Your merchant account is currently inactive, complete your kyc to change your account status</p>
            </div>
            <div class="dash4">
                <a href="/merchantdashboard/kycbusiness">
                <div class="dash41">
                    <img src="@/assets/dashicons/block.svg" alt="">
                    <h5>Add your KYC</h5>
                    <p>To be able to publish products, it is required that you should complete the KYC process</p>
                    <button>Add KYC</button>
                </div>
                </a>
                    <div class="dash41" >
                        <img src="@/assets/dashicons/block.svg" alt="">
                        <h5>Create Products</h5>
                        <p>Create products for your store and publish them, after completing KYC</p>
                    <button @click="transfer">Create Products</button>
                    </div>
                
                <div class="dash41">
                    <img src="@/assets/dashicons/block.svg" alt="">
                    <h5>Contact Support</h5>
                    <p>If you require assistance, our support staff are available 24/7 to provide it</p>
                    <button>Contact Support</button>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<style scoped>
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Nunito, sans-serif;
    }
    .nav_cont{
        padding: 20px 30px;
    }
    .btn_items{
        text-align: right;
        margin-left: auto;
    }
    .inactive{
        outline: none;
        border: 1px solid #bdc4c2;
        background: transparent;
        padding: 2px 15px;
        border-radius: 3rem;
        color: rgba(187, 28, 28, 1);
;
    }
    .show{
        display: none;
    }
    .dash1{
        margin-left: 20%;
        width: 80%;
    }
    .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
        margin-top: 1rem;
    }
    .dash3{
        text-align: center;
        margin-top: -1rem;
        padding-top: 5rem;
    }
    .dash3 h3{
        font-size: 25px;
        font-weight: 700;
        color: #000000;
        margin-bottom: 1rem;
    }
    a{
        text-decoration: none;
        color: #000000;
    }
    .dash3 p{
         font-size: 16px;
        font-weight: 400;
        color: #000000;
    }
    .dash4{
        margin-left: 10%;
        margin-right: 10%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 3rem;
        column-gap: 2rem;
    }
    .dash41{
        background: white;
        text-align: center;
        padding: 1rem 10px;
    }
    .dash41 img{
        width: 4rem;
        margin-bottom: 1rem;
    }
    .dash41 h5{
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }
    .dash41 p{
        color: #6A7270;
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 1rem;
        line-height: 170%;
    }
    .dash41 button{
        background: #FAFBFB;
        border: 1px solid #ECEDEC;
        border-radius: 5px;
        padding: 10px 25px;
        

    }
    .dash41 button:hover{
        background: #50AC95;
        color: white !important;
    }
    



    @media(max-width:576px){
        .dash1{
        margin-left: 0%;
        width: 100%;
    }
        .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
    }
        .dash4{
        margin-left: 0px;
        margin-right: 0px;
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 3rem;
        row-gap: 1rem;
    }
        .show{
        display: block;
    }
    }


    @media(min-width:577px) and (max-width:768px){
        .dash1{
        margin-left: 0%;
        width: 100%;
    }
        .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
    }
        .dash4{
        margin-left: 10px;
        margin-right: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 3rem;
        column-gap: 1rem;
    }
        .show{
        display: block;
    }
    }

</style>

<script>
import axios from "axios";
import Sidebar from "@/components/Merchant/SideBar.vue";
import Navbar from "@/components/Merchant/Navbar.vue";
import { mapState } from "vuex";
export default {
    components: {
        Sidebar,
        Navbar
    },
    data(){
        return{
            user:{ },
            kyc: true,
        }
    },
    computed:{
            ...mapState('auth',['auth_token'])
    },
    mounted(){
        this.getUser()
    },
    methods:{
        transfer(){
            if(this.kyc === true){
                alert('Please add your kyc first')
            }else{
                this.$router.push('/merchantdashboard/productdetail')
            }
        },
        getUser() {
      axios.get( "https://test-api.citisquare.africa/api/auth/users/me",
      {
           headers : {
                    authorization: `token ${this.auth_token}`,
                }
      })
        .then((response) => {
          this.user = response.data;
          if (this.user.merchant.address == null){
              this.kyc=true;
          }else{
              this.kyc=false
          }
          console.log(this.user.merchant.address);
        });
    },
    }
}
</script>