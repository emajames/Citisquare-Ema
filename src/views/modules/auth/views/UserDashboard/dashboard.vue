<template>
<div class="dash">
    <div class="show">
        <Navbar/>
    </div>
    <Sidebar/>
    <div class="dash1">
        <div class="nav_cont ">
            <h2> My Dashboard</h2>
            <div class="btn_items">
                
                 <FontAwesomeIcon :icon="['far', 'bell']" class="icon" /> 
                 <span>Welcome, {{user.name}}</span>
            </div>
        </div>
        <div class="dash2">
          <div class="dash3">
              <div class="dash31">
                  <h3>N30,000,000</h3>
                  <p>Wallet Balance</p>
              </div>
              <div class="dash32">
                  <img src="@/assets/fund.png" alt="">
                  <img src="@/assets/withdraw.png" alt="" class="mt-3">
              </div>

          </div>
          <div class="dash4">
              <h5>What would you love to do today?</h5>
              <div class="dash43">
                  <div class="dash42">
                      <img src="@/assets/a/a.png" alt="">
                  </div>
                  <div class="dash42">
                      <img src="@/assets/a/b.png" alt="">
                  </div>
                  <div class="dash42">
                      <img src="@/assets/a/c.png" alt="">
                  </div>
                  <div class="dash42">
                      <img src="@/assets/a/d.png" alt="">
                  </div>
                  <div class="dash42">
                      <img src="@/assets/a/e.png" alt="">
                  </div>
              </div>
          </div>
          <div class="dash5">
              <section class="realEstate">
        <div class="invest">
            <div class="invest1">
                <h3>Offers Just For You</h3>
             
            </div>
            <div class="invest2">

            </div>
        </div>
        <div class="container my-5 experience">

    <Carousel :itemsToShow="itemsShow" :wrapAround="true">
      <Slide
        v-for="slide in carouselItem"
        :key="slide"
        :style="{
          backgroundImage:
            'url(' + require('@/assets/carousel/' + slide.img + '.png') + ')',
        }"
        class="flex-column"
      >
        <!-- <div
          class="carousel__item bg-light p-3"
          style="
            position: absolute;
            bottom: -2rem;
            z-index: 2;
            width: 100%;
            height: 100px;
          "
        >
          {{ slide }}
        </div> -->

        <div
          class="w-100 mb-0 text-start justify-content-between py-2 px-2"
          style="background-color: white; border: none"
        >
          <h5 class="mb-0">{{ slide.title }}</h5>
          <p class="mb-0 small mt-2">
            {{ slide.location }}
            <span class="text-muted mx-2 small">&#11044;</span>
            {{ slide.experiences }}
          </p>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
    </section>
          </div>
          <div class="dash6">
              <h3>Booking History</h3>
              <div class="table-responsive">
                  <caption>Type</caption>
                <table class="table">
                    
                <!-- <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead> -->
                <tbody>
                    <tr>
                    <th scope="row"><img src="@/assets/a/1.png" alt=""> Spa Reservation</th>
                    <td>Fenty Spa</td>
                    <td>N30,000</td>
                    <td>24th March, 2021</td>
                    <td>Successful</td>
                    </tr>
                    <tr>
                    <th scope="row"><img src="@/assets/a/2.png" alt=""> Vacation Booking</th>
                    <td>Fenty Spa</td>
                    <td>N30,000</td>
                    <td>24th March, 2021</td>
                    <td>Successful</td>
                    </tr>
                    <tr>
                    <th scope="row"><img src="@/assets/a/3.png" alt=""> Wallet Funding</th>
                    <td>Fenty Spa</td>
                    <td>N30,000</td>
                    <td>24th March, 2021</td>
                    <td>Successful</td>
                    </tr>
                    <tr>
                    <th scope="row"><img src="@/assets/a/4.png" alt=""> Financial Services</th>
                    <td>Fenty Spa</td>
                    <td>N30,000</td>
                    <td>24th March, 2021</td>
                    <td>Successful</td>
                    </tr>
                    <tr>
                    <th scope="row"><img src="@/assets/a/5.png" alt="">Real Estate Investment</th>
                    <td>Fenty Spa</td>
                    <td>N30,000</td>
                    <td>24th March, 2021</td>
                    <td>Successful</td>
                    </tr>
                </tbody>
              </table>
            </div>
              
          </div>
        </div>
    </div>
</div>
    
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const innerW = ref(window.innerWidth);

const itemsShow = ref(4);

const showNavigation = ref(null);

const carouselItem = ref([
  {
    img: "1",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    experiences: "6k Experiences",
  },
  {
    img: "2",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    experiences: "6k Experiences",
  },
  {
    img: "3",
    title: "Obudu Cattle Ranch",
    location: "Calabar, Nigeria",
    experiences: "66k Experiences",
  },
  {
    img: "4",
    title: "Bonny Island",
    location: "Enugu, Nigeria",
    experiences: "9m Experiences",
  },
  {
    img: "5",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    experiences: "6k Experiences",
  },
  {
    img: "3",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    experiences: "6k Experiences",
  },
]);

onMounted(() => {
  if (innerW.value < 768) {
    itemsShow.value = 1;
    showNavigation.value = false;
  } else {
    itemsShow.value = 4.98;
    showNavigation.value = true;
  }
});
</script>
<style scoped>
    *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Nunito, sans-serif;
    }
    .nav_cont{
        padding: 10px 30px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .nav_cont h2{
        color: #08293A;
        font-weight: 700;
    }
    .btn_items{
        text-align: right;
        margin-left: auto;
    }
    .btn_items span{
        margin-left: 1rem;
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
    .invest1 h3{
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #07354D;
        margin-bottom: -2rem;
    }
    .show{
        display: none;
    }
    .dash1{
        margin-left: 20%;
        width: 80%;
    }
    .dash2{
        background: white;
        height: 100vh;
        width: 100%;
        margin-top: 1rem;
    }
    .dash3{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .dash31{
        background-color:#1686C1;
    } 
    .dash32 img{
        width: 100%;
    }
    .dash31{
        padding: 20px 20px;
    }
    .dash31 h3{
        color: white;
        font-weight: 900;
        font-size:30px;
        line-height: 140%;
    }
    .dash31 p{
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: white;
        padding-top: 2rem;
        opacity: 0.7;
    }
    .dash4{
        margin-top: 2rem;
        margin-left: 2rem;
        margin-right: 2rem;
    }
    .dash4 h5{
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #07354D;
        margin-bottom: 0.7rem;
    }
    .dash43{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        column-gap: 1rem;
    }
    .dash42 img{
        width: 100%;
    }
    .table-responsive{
        margin-top: 1rem;
    }
    th img{
        width: 1rem;
        margin-right: 0.5rem;
    }

.dash5{
    margin-left: 2rem;
    margin-right: 2rem;
}
    .dash6{
        margin-top: -2rem;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
}
    caption{
        font-weight: 400;
font-size: 12px;
line-height: 24px;
color: #07354D !important;
    }


    @media(max-width:576px){
        .dash1{
        margin-left: 0%;
        width: 100%;
        margin-top: 5rem;
    }
        .dash2{
        background: white;
        height: 100vh;
        width: 100%;
    }
        .dash6{
        margin-top: -2rem;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 2rem;
}
        .show{
        display: block;
    }
        .nav_cont{
        padding: 10px 10px;
        grid-template-columns: 1fr;
        text-align: center;
    }
    .dash5{
    margin-left: 10px;
    margin-right: 10px;
}
    .btn_items{
        text-align: center;
        margin-left: 0;
    }
    .dash3{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 1rem;
        margin-left: 10px;
        margin-right: 10px;
    }
    .dash4{
        margin-top: 2rem;
        margin-left: 10px;
        margin-right: 10px;
    }
    .dash4 h5{
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        color: #07354D;
        margin-bottom: 0.7rem;
    }
    .dash43{
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 1rem;
    }
    .dash42 img{
        width: 100%;
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
    .dash31{
        padding: 10px 20px;
    }
    .dash31 p{
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: white;
        padding-top: 1rem;
    }
    }


    @media(min-width:769px) and (max-width:1200px){
        .dash31 p{
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        color: white;
        padding-top: 1rem;
    }
    }

</style>
<style>
.experience {
  width: 100%;
}
.experience .carousel__prev--in-active,
.experience .carousel__next--in-active {
  display: none;
}
.experience .carousel__track {
  gap: 1rem;
}
.experience .carousel__slide {
  height: 300px;
  /* background-size: 100% 100%; */
  width: 300px !important;
  justify-content: flex-end;
}
.experience .carousel__prev,
.experience .carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.experience .carousel__next {
  right: 0%;
  background: #fff;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.experience .carousel__prev {
  left: 0rem;
  background: #fff;
}
.experience svg {
  fill: #292d32 !important;
}
.realEstate{
    padding: 3rem 0;
}
.invest{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.invest h2{
    font-weight: 700;
    font-family: 'Recoleta';
}



@media (max-width: 768px) {
  .experience {
    width: 100%;
  }
  .experience .carousel__slide {
    height: 350px;
    width: 100% !important;
    
    background-size: 100% 100%;
  }
  .experience .carousel__item {
    width: 100%;
  }
  .experience .carousel__prev,
  .experience .carousel__next {
    display: none;
  }
  .experience .carousel__track {
    gap: 0rem;
  }
  .invest{
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
}
.invest1{
    color: black;
    padding-left: 10px;
}
}
</style>

<style scoped>
h5 {
  font-weight: 700;
  color: #000000;
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
            image: "@/assets/gr.png",
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
        //   if (this.user.merchant.address == null){
        //       this.kyc=true;
        //   }else{
        //       this.kyc=false
        //   }
        //   console.log(this.user.merchant.address);
        });
    },
    }
}
</script>