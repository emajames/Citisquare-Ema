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
        .show{
        display: block;
    }
    }

</style>

<script>
import axios from "axios";
import Sidebar from "@/components/User/SideBar.vue";
import Navbar from "@/components/User/Navbar.vue";
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