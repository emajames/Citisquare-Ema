<template>
<div class="dash">
    <div class="show">
        <Navbar/>
    </div>
    <Sidebar/>
    <div class="dash1">
        <div class="nav_cont d-flex">
            <h2>Manage Properties</h2>
            <div class="btn_items">
                <button class="inactive" v-if="kyc">Inactive</button>
                <button class="inactive" v-else>Active</button>
                 <!-- <FontAwesomeIcon :icon="['far', 'bell']" class="icon" /> -->
            </div>
        </div>
        <div class="dash2">
            <div class="dash3">
                <div class="dash31">
                    <h3>My Properties</h3>
                </div>
                <div class="dash32">
                    <button @click="transfer()">Add More Properties</button>
                </div>
            </div> 
            <div class="dash4" >
                <div class="dash41" v-for="(item,index) in properties" :key="index">
                    <img src="@/assets/sm.png" alt="">
                    <div class="dash42">
                        <p style="text-transform:uppercase">{{item.address}}, {{item.city}},  {{item.country}}</p>
                    <h5>{{item.name}}</h5>
                    <p>{{item.status}}</p>
                    <h4>NGN {{item.price}}</h4>
                    </div>
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
        
    }
    .dash3{
        padding-top: 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-left: 30px;
        padding-right: 30px;
    }
    .dash32{
        text-align: right;
    }
    .dash32 button{
        background: #50AC95;
        padding: 11px 24px;
        color: white;
        border: none;
        border-radius: 5px;
    }
    .dash4{
        margin-top: 1rem;
        padding-left: 30px;
        padding-right: 30px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 1rem;
    }
    .dash41 img{
        width: 100%;
    }
    .dash41 p{
        font-weight: 400;
        font-size: 10px;
        margin-top: 0.3rem;
    }
    .dash41 h5{
        font-weight: 600;
        font-size: 17px;    
    }
    .dash41 h4{
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }
    .dash42{
        text-align: center;
    }
    
    
    
    



    @media(max-width:576px){
        .dash1{
        margin-left: 0%;
        width: 100%;
        margin-top: 5rem;
    }
        .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
        
    }
       
        .show{
        display: block;
    }
        .dash3{
        padding-top: 1rem;
        display: grid;
        grid-template-columns: 1fr;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
    }
        .dash32{
        text-align: center;
        margin-top: 0.7rem;
    }
        .dash32 button{
        background: #50AC95;
        padding: 11px 24px;
        color: white;
        border: none;
        border-radius: 5px;
        width: 100%;
    }
        .dash4{
        margin-top: 1rem;
        padding-left: 10px;
        padding-right: 10px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 1rem;
    }
    }


    @media(min-width:577px) and (max-width:768px){
        .dash1{
        margin-left: 0%;
        width: 100%;
         margin-top: 5rem;
    }
        .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
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
            properties:{ },
            kyc: true,
        }
    },
    computed:{
            ...mapState('auth',['auth_token'])
    },
    mounted(){
        this.getProperties(),
        this.getUser()
    },
    methods:{
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
        transfer(){
            if(this.kyc === true){
                alert('Please add your kyc first')
            }else{
                this.$router.push('/merchantdashboard/productdetail')
            }
        },
        getProperties() {
      axios.get( "https://test-api.citisquare.africa/api/merchant/properties",
      {
           headers : {
                    authorization: `token ${this.auth_token}`,
                }
      })
        .then((response) => {
          this.properties = response.data.results;
         console.log(this.properties)

        });
    },
    }
}
</script>