<template>
<div class="dash">
    <div class="show">
        <Navbar/>
    </div>
    <Sidebar/>
    <div class="dash1">
        <div class="contanier">
             <div class="nav_cont">
            <h2 class="search">Financial Services</h2>

             <div class="box">
          <div class="" >
              <p>Location</p>
              <div class="location">
                  <!-- <FontAwesomeIcon :icon="['fas','location-dot']" class="icon" />
                  <input type="text" placeholder="Lekki,Lagos"> -->
                  <div class="input-group">
                   <select class="form-select form" id="inputGroupSelect01">
                     <option selected>N 300,000</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
                </div>
              </div>  
          </div>

         <div class="" >
              <p>Category</p>
              <div class="location">
                  <!-- <FontAwesomeIcon :icon="['fas','location-dot']" class="icon" />
                  <input type="text" placeholder="Lekki,Lagos"> -->
                  <div class="input-group">
                   <select class="form-select form" id="inputGroupSelect01">
                     <option selected>Single Buyer</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
                </div>
              </div>
          </div>

           <div class="" >
              <p>Sub Category</p>
               <div class="location">
                  <!-- <FontAwesomeIcon :icon="['fas','location-dot']" class="icon" />
                  <input type="text" placeholder="Lekki,Lagos"> -->
                  <div class="input-group">
                   <select class="form-select form" id="inputGroupSelect01">
                     <option selected></option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
                </div>
              </div> 
          </div>
              <div>
                  <button class="button">Search</button>
              </div>        
      </div>
      <div class="dash3">
              <div class="dash31">
                  <h3>N30,000,000</h3>
                  <p>Wallet Balance</p>
              </div>
              <div class="dash32">
                  <h3>N30,000,000</h3>
                  <p>Loan History</p>
              </div>

          </div>
      

        </div>
            
        </div>
       <div class="dash5">
           <div class="dash51">
               <h3>You are eligible for a loan</h3>
               <p>You have no outstanding debts to pay, which makes you eligible for another loan</p>
           </div>
           
       </div>
       <div class="dash6">
           <div class="pt-3">
          <h3 class="fin pt-1">Categories</h3>
          <div class="container kuda pt-4">
       <div class="">
            <div class="box-kuda">
                <img src="@/assets/a/k.png" alt="" class="img-kud">
            </div>
            
       </div>

        <div class="">
            <div class="box-kuda">
                <img src="@/assets/a/g.png" alt="" class="img-kud">
            </div>
            
        </div>
        <div class="">
            <div class="box-kuda">
                <img src="@/assets/a/h.png" alt="" class="img-kud">
            </div>
            
        </div>
        <div class="">
            <div class="box-kuda">
                <img src="@/assets/a/i.png" alt="" class="img-kud">
            </div>
            
        </div>
          </div>
         
      </div>
       </div>
       <div class="dash5">
           <div class="dash51">
               <h3>Get pre-qualified for a loan</h3>
               <div class="row">
                   <div class="col-md-6">
                       <p>Reach out to financial service provider to get you pre qualified for a loan, this saves you much time as you need not wait to get verified 
before taking a loan</p>
                   </div>
               </div>
               
           </div>
           
       </div>
        <div class="pt-3 dash6">
          <h3 class="fin pt-1">Best Offers</h3>
          <div class="container kuda pt-4">
       <div class="key">
            <div class="box-kuda">
                <img src="@/assets/a/kuda.png" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Valentine Promo</h6>
                <!-- <p class="amount pt-1">Lekki, Lagos</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class ="review"><u>110 Reviews</u></span></div>
                <p><span class="mt1">From </span> <span class="mt2">N2,000,000</span> </p> -->
            </div>   
       </div>

        <div class="key">
            <div class="box-kuda">
                <img src="@/assets/a/kuda.png" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Easter Promo</h6>
                <!-- <p class="amount pt-1">Lekki, Lagos</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class ="review"><u>110 Reviews</u></span></div>
                <p><span class="mt1">From </span> <span class="mt2">N2,000,000</span> </p> -->
            </div>
        </div>
        <div class="key">
            <div class="box-kuda">
                <img src="@/assets/a/kuda.png" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Christmas Promo</h6>
                <!-- <p class="amount pt-1">Lekki, Lagos</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class ="review"><u>110 Reviews</u></span></div>
                <p><span class="mt1">From </span> <span class="mt2">N2,000,000</span> </p> -->
            </div>
        </div>
        <div class="key">
            <div class="box-kuda">
                <img src="@/assets/a/kuda.png" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Buy two</h6>
                <!-- <p class="amount pt-1">Lekki, Lagos</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class ="review"><u>110 Reviews</u></span></div>
                <p><span class="mt1">From </span> <span class="mt2">N2,000,000</span> </p> -->
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
    /* .dash2{
       
        height: 100vh;
        width: 100%;
        margin-top: 1rem;
    } */
    .search {
    padding-top: 1rem;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: -0.01em;
    color: #08293A;
}

.box {
    /* border: 0.5px #e0e8ec solid; */
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
.button {
    width: 100%;
    margin-top: 1.1rem;
    padding: 8px 10px;
    outline: none;
    border: none;
    border-radius: 3px;
   
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
    border-radius: 2px;
}
.box-kuda img{
    width: 100%;
}
.bnk {
    
    font-weight: 600;
font-size: 18px;
line-height: 24px;
/* identical to box height, or 133% */

letter-spacing: -0.01em;

color: #07354D;

}
.amount{
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: #989EA0;
}
.stars {
    color: rgba(22, 134, 193, 1);

}
 .review{
    color: rgba(7, 53, 77, 1);
    font-weight: 400;
    font-size: 12px;
}.img-kud {
    width: 100%;
    height: 10rem;
}
    .key{
        background: #FFFFFF;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.09);
        border-radius: 6px;
        padding: 0.5rem;
    }
    .mt1{
        font-weight: 400;
        font-size: 13px;
        line-height: 24px;
        letter-spacing: -0.01em;
        color: #07354D;
    }
    .mt2{
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        color: #1686C1;
    }
    .dash5{
        background: #EBF5F1;
        border-radius: 2px;
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 1.5rem;
        padding: 2rem 1rem;
        
    }
    
    .dash51 h3{
        font-weight: 700;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.01em;
        color: #074D3B;
    }
    .dash51 p{
        font-weight: 400;
        font-size: 16px;
        line-height: 170%;
        letter-spacing: -0.01em;
        color: #29443D;
    }
    .dash52{
        text-align: right;
    }
    .dash52 button{
        padding: 11px;
        background-color: white;
        border-radius: 2px;
        color: #FF9B00;
        border: none;
        margin-top: 2rem;
    }
    .dash6{
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 1.5rem;
    }
    .dash3{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 2rem;
    }
    .dash31{
        background-color:#1686C1;
        border-radius: 4px;
    } 
    .dash32{
        background: #50AC95;
        border-radius: 4px;
    }
    .dash31, .dash32{
        padding: 20px 20px;
    }
    .dash31 h3, .dash32 h3{
        color: white;
        font-weight: 900;
        font-size:30px;
        line-height: 140%;
    }
    .dash31 p, .dash32 p{
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: white;
        padding-top: 2rem;
        opacity: 0.7;
    }



    @media(max-width:576px){
        .dash5{
        background: #EBF5F1;
        border-radius: 2px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 1.5rem;
        padding: 2rem 10px;
        display: grid;
        grid-template-columns:1fr;
        row-gap: 1rem;
    }
    .dash52 button{
        padding: 11px;
        background-color: white;
        border-radius: 2px;
        color: #FF9B00;
        border: none;
        width: 100%;
        margin-top: 0.5rem;
    }
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
    .dash3{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 1rem;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 2rem;
       
    }
    .dash31{
        background-color:#1686C1;
        border-radius: 4px;
    } 
    .dash32{
        background: #50AC95;
        border-radius: 4px;
    }
    .dash31, .dash32{
        padding: 20px 20px;
    }
    .dash31 h3, .dash32 h3{
        color: white;
        font-weight: 900;
        font-size:30px;
        line-height: 140%;
    }
    .dash31 p, .dash32 p{
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: white;
        padding-top: 2rem;
        opacity: 0.7;
    }
    .dash6{
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 1.5rem;
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