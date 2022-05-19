<template>
    <div class="one">
         <div class="one1">
        <img src="@/assets/concept.png" alt="">
        </div>
        

        <div class="one3">
            <div class="one2">
            <div class="one21">
                <a href="/merchantdashboard/dashboard"><img src="@/assets/dashicons/Home.png" alt=""><p> Dashboard</p></a>
            </div>
             <div class="one21">
                 <a href="/merchantdashboard/kycbusiness"><img src="@/assets/dashicons/spa2.png" alt=""><p>Spa</p></a>
            </div>
            
        </div>
        <div class="one2">
            <div class="one21">
                <a href="/merchantdashboard/productdetail"><img src="@/assets/dashicons/shortlet.png" alt=""><p>Shortlets & Apartments</p></a>
                
            </div>
            <div class="one21">
                <a href="/merchantdashboard/properties"><img src="@/assets/dashicons/tours.png" alt=""><p>Tours and Vacations</p></a>
            </div>
            
        </div>
        <div class="one2">
            
            <div class="one21">
                <a href="/merchantdashboard/wallet"><img src="@/assets/dashicons/real.png" alt=""><p>Real Estate</p></a>
                
            </div>
            <div class="one21">
                <a href="/userdashboard/financialservices"><img src="@/assets/dashicons/fin.png" alt=""><p>Financial Services</p></a>
                
            </div>
            <div class="one21">
                <a href="#"><img src="@/assets/dashicons/wallet.png" alt=""><p> Wallet</p></a>
                
            </div>
            <div class="one21">
                <a href="#"><img src="@/assets/dashicons/settings.png" alt=""><p>Settings</p></a>
                
            </div>
            
        </div>
        </div>
        
        
        
        
        
        <div>
            
        </div>
            

        
        
         
        
    </div>

</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
   computed: {
    ...mapState("auth", ["user"]),
    ...mapState("auth", ["auth_token"]),
  },
    methods:{
        ...mapActions("auth", ["logout"]),
         async logOut() {
      try {
        let res = await this.logout;
        console.log(res);
        this.makeToast(
          "You've Logged Out",
          `Till Next Time`,
          "success"
        );
        this.$router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Nunito, sans-serif;
}
.one{
    width: 20%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #EFF7FB !important;
    box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
    padding-top: 1rem;
    z-index: 1;
    

}

.one1{
    margin-left: 25px;
    margin-right: 25px;
    text-align: center;
}
.one1 img{
    width: 5rem;
}
.one1 h3{
    font-size: 14px;
    color: rgba(8, 41, 58, 0.7);
    font-weight: 600;
    margin-bottom: 0.5rem;
}
.one1 p{
    color: rgba(8, 41, 58, 0.7);
    font-weight: 400;
    font-size: 14px;
}
#b{
    margin-bottom: 0.5rem;
}
.one2 h3{
    margin-top: 1rem;
    margin-left: 2rem;
    color: rgba(8, 41, 58, 0.7);
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}
.one21{
    margin-top: 1rem;
}
.one21 a{
    padding-left:2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    display: grid;
    text-decoration: none;
    grid-template-columns: 1fr 6fr;
}
.one21:hover{
    background: #CEEBFB;
}
.one21 img{
    width: 1rem;
    
}
.one21 p{
    color: rgba(8, 41, 58, 0.7);
    font-weight: 400;
    font-size: 14px;
    margin-top: -2px;
    
}
.one3{
    margin-top: 2rem;
}




@media(max-width: 576px){
    .one{
        display: none;
    }
}



@media (min-width: 577px) and (max-width: 768px){
    .one{
   display: none;
    

}
}
</style>