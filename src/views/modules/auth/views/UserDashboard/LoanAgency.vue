<template>
<div class="dash">
    <div class="show">
        <Navbar/>
    </div>
    <Sidebar/>
    <div class="dash1">
        <div class="container">
            <div class="">
                <h3>Real Estate</h3>
            </div>
            <div class="mt-5">
                <img src="@/assets/backarrow.png" alt="" class="arrow">
            </div>
            <div class="kud-items">
                <div class="kud-items2">
                    <div>
                        <img src="" alt="">
                    </div>
                    <div>

                    </div>
                </div>
                <div>

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

    }
    .show{
        display: none;
    }
    .dash1{
        margin-left: 20%;
        width: 80%;
    }
    .container{
        padding: 15px 50px;
    }
    .arrow{
        width: 2.5rem;
    }
    .kud-items{
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
    .kud-items2{
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
    /* .dash2{
       
        height: 100vh;
        width: 100%;
        margin-top: 1rem;
    } */
/* .search {
    padding-top: 1rem;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: -0.01em;
    color: #08293A;
}

.box {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);;
    height: 100px;
    padding: 15px 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 1.5rem;
    margin-top: 1.5rem;
    border-radius: 3px;
}
.box p{
    font-size: 12px;
    font-weight: 400;
    color:  #08293A;
}
.location {
    display: flex;
    position: relative;
    
}.form{
   padding: 8px 8px;
}

.location input{
    padding: 3.7px 15px;
    border: 0.5px #e0e8ec solid;
    border-radius: 3px;
    width: 100%;
    height: 45px;
}
.icon {
   position: absolute;
   left: 21rem;
   top: 0.8rem;
   color: #cad4dd;
}
.icons {
   position: absolute;
   left: 9.5rem;
   top: 0.8rem;
   color: #cad4dd;
}
button {
    width: 100%;
    margin-top: 1.1rem;
    padding: 4px 10px;
    outline: none;
    border: none;
    border-radius: 3px;
    height: 45px;
    background: rgba(22, 134, 193, 1);
    color: #fff;
}
.fin {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.01em;
    color: #08293A;
}
.kuda {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 1rem;

   
}
.box-kuda {
    width: 100%;
    height: 10rem;
    background: #3F276A;
    border-radius: 2px;
}
.bnk {
    font-weight: 600;
    font-size: 13px;
}
.amount{
    font-size: 12px;
}
.stars {
    color: rgba(22, 134, 193, 1);

}
 .review{
    color: rgba(7, 53, 77, 1);
    font-weight: 400;
    font-size: 12px;
}
.img-kud {
    width: 100%;
    height: 10rem;
} */
    



    @media(max-width:576px){
        .nav_cont{
        padding: 20px 10px;
    }
        .dash1{
        margin-left: 0%;
        width: 100%;
        margin-top: 4rem;
    }
        /* .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
    } */
  
        .show{
        display: block;
    }
    .box {
    /* border: 0.5px #e0e8ec solid; */
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);;
    height: auto;
    padding: 15px 15px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    margin-top: 1.5rem;
    border-radius: 3px;
}
    .icon {
   position: absolute;
   left: 13rem;
   top: 0.8rem;
   color: #cad4dd;
}
.icons {
   position: absolute;
   left: 13rem;
   top: 0.8rem;
   color: #cad4dd;
}
    button {
    width: 100%;
    margin-top: 0rem;
    padding: 4px 10px;
    outline: none;
    border: none;
    border-radius: 3px;
    height: 45px;
    background: rgba(22, 134, 193, 1);
    color: #fff;
}
    .kuda {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
   
}
    }


    @media(min-width:577px) and (max-width:768px){
        .dash1{
        margin-left: 0%;
        width: 100%;
        margin-top: 4rem;
    }
        /* .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
    } */
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