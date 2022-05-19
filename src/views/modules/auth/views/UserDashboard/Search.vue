<template>
<div class="dash">
    <div class="show">
        <Navbar/>
    </div>
    <Sidebar/>
    <div class="dash1">
        <div class="contanier">
             <div class="nav_cont">
            <h2 class="search">Search</h2>

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
                  <button>Search</button>
              </div>        
      </div>
      <div class="pt-3">
          <h3 class="fin pt-1">30 Financial providers that match your search</h3>
          <div class="container kuda pt-4">
       <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>     
       </div>

        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class ="review"><u>110 Reviews</u></span></div>
            </div>
        </div>
        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span  class="review"><u>110 Reviews</u></span></div>
            </div>
        </div>
        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>
        </div>

         <div class="">
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span  class="review"><u>110 Reviews</u></span></div>
            </div>     
       </div>

        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>
        </div>
        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>
        </div>
        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>
        </div>
        

         <div class="">
            <div class="box-kuda">
               <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>     
       </div>

        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>
        </div>
        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>
        </div>
        <div>
            <div class="box-kuda">
                <img src="@/assets/images/design.jpg" alt="" class="img-kud">
            </div>
            <div>
                <h6 class="pt-2 bnk">Kuda Bank</h6>
                <p class="amount pt-1">NGN 20K-NGN 900M</p>
                <div class="stars">&#9733; &#9733; &#9733; &#9733; &#9734; <span class="review"><u>110 Reviews</u></span></div>
            </div>
        </div>
          </div>
         
      </div>

        </div>
            
        </div>
       
        
        <div class="dash2"></div>
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
}.img-kud {
    width: 100%;
    height: 10rem;
}
    



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