<template>
  <AppHeader />
  <SearchTabs />
  <AppHero />
  <Partners />
  <Experience />
  <Offers />
  <Merchants />
  <RealEstate />
  <div class="container">
    <div class="invest-section text-center my-5">
      <h1 class="loan">Hey Whats-Up, No Money to Invest? Get a Loan!!</h1>
      <p class="lending pt-3">
        No money to invest? we have covered, we onboarded the best aggregate
        lending companies, with the most suitable and flexible offers you get in
        the city.
      </p>
      <button class="apply-btn mt-3">Apply For A Loan</button>
    </div>
    <div class="grid-card mt-5 mb-5">
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">LOANS WE OFFER</h6>
          <h6 class="card-subtitle mb-2 text-muted pt-2">Buy Now Pay Later</h6>
          <p class="card-text">
            Buy Now Pay Later(BNPLM) is a short term financing that allows
            consumers to make purchases and pay for them in the future date,
            ofetn interest free. You have interest in a property listed on
            citisquare but no funds, use this option to own the property and pay
            the fees at a later date. Terms and conditions apply
          </p>
          <h6 class="pt-3 pb-3 chant">MERCHANT</h6>
          <div class="card-logo pt-2">
            <img src="@/assets/flutter.svg" alt="" />
            <img src="@/assets/airtel.svg" alt="" />
            <img src="@/assets/flutter.svg" alt="" />
            <img src="@/assets/ups.svg" alt="" />
            <img src="@/assets/uba.svg" alt="" />
            <img src="@/assets/xen.svg" alt="" />
            <h6 class="num">+2.3k</h6>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">LOANS WE OFFER</h6>
          <h6 class="card-subtitle mb-2 text-muted pt-2">Personal Loan</h6>
          <p class="card-text">
            Buy Now Pay Later (BNPLM) is a short term financing that allows
            consumers to make purchase and pay for them at a future date, often
            interest free. You have interest in the property listed on
            citisquare but no funds, use this option to own the property and pay
            the fees at a later date. Terms and conditions apply
          </p>
          <h6 class="pt-3 pb-3 chant">MERCHANT</h6>
          <div class="card-logo pt-2">
            <img src="@/assets/flutter.svg" alt="" />
            <img src="@/assets/airtel.svg" alt="" />
            <img src="@/assets/flutter.svg" alt="" />
            <img src="@/assets/ups.svg" alt="" />
            <img src="@/assets/uba.svg" alt="" />
            <img src="@/assets/xen.svg" alt="" />
            <h6 class="num">+2.3k</h6>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h6 class="card-title">LOANS WE OFFER</h6>
          <h6 class="card-subtitle mb-2 text-muted pt-2">Buy Now Pay Later</h6>
          <p class="card-text">
            Buy Now Pay Later(BNPLM) is a short term financing that allows
            consumers to make purchases and pay for them in the future date,
            ofetn interest free. You have interest in a property listed on
            citisquare but no funds, use this option to own the property and pay
            the fees at a later date. Terms and conditions apply
          </p>
          <h6 class="pt-3 pb-3 chant">MERCHANT</h6>
          <div class="card-logo pt-2">
            <img src="@/assets/flutter.svg" alt="" />
            <img src="@/assets/airtel.svg" alt="" />
            <img src="@/assets/flutter.svg" alt="" />
            <img src="@/assets/ups.svg" alt="" />
            <img src="@/assets/uba.svg" alt="" />
            <img src="@/assets/xen.svg" alt="" />
            <h6 class="num">+2.3k</h6>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="rent">
    <h1>Rent Shortlets, Book Spa Sessions</h1>
    <p>
      Put your money to work by investing in our real estates, you can also
      purchase properties
    </p>
    <button>Rent Shortlets</button>
  </section>
  <section class="beta">
    <h1>We Are Currently In Beta</h1>
    <p>
      We are currently in beta-testing phase, but we will notify you when we go
      live if you join our waiting list
    </p>
    <form @submit.prevent="submitInfo()" method="post">
      <input type="text" placeholder="Enter your email address" v-model="info.email" />
      <button type="submit">Join List</button>
    </form>
    
  </section>
  <Footer />
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import AppHeader from "@/components/AppHeader.vue";
import SearchTabs from "@/components/LandingPage/SearchTabs.vue";
import AppHero from "@/components/LandingPage/AppHero.vue";
import Experience from "@/components/LandingPage/Experience.vue";
import Footer from "@/components/Footer.vue";
import RealEstate from "@/components/LandingPage/RealEstate.vue";
import Partners from "@/components/LandingPage/Partners.vue";
import Merchants from "@/components/LandingPage/Merchants.vue";
import Offers from "@/components/LandingPage/Offers.vue";
export default {
  name: "Home",
  components: {
    AppHeader,
    SearchTabs,
    AppHero,
    Experience,
    Footer,
    RealEstate,
    Partners,
    Offers,
    Merchants,
  },
  data(){
    return{
      info:{}
    }
  }, 
  methods:{
    async submitInfo() {
        try {
            const response = await axios.post(
            'https://test-api.citisquare.africa/api/email-subscription/', this.info, 
            );
            console.log(response.data);
           this.makeToast(
          "Successfully added to waiting list",
         'Success',
          "success"
        );
        } catch (error) {
            console.error(error);
            this.makeToast(
          (error),
         'Please try again later',
          "Warning"
        );
        }
    },
  }
};
</script>

<style scoped>
.loan {
  /* font-size: 25px;
  line-height: 34px; */
  font-family: "Recoleta";
  font-weight: 700;
  font-size: 40px;
}
.apply-btn {
  border: none;
  outline: none;
  padding: 15px 20px;
  background: #1686c1;
  color: #fff;
  /* border-radius: 5px; */
  font-size: small;
}
.grid-card {
  margin-left: 5rem;
  margin-right: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
}
.card-title {
  font-size: 12px;
  font-weight: 700;
  font-family: "Nunito Sans", sans-serif;
}
.card {
  padding: 25px 25px;
  width: 100%;
}
.card-subtitle {
  font-family: "Recoleta";
}
.card-text {
  font-size: 14px;
  font-weight: 500;
}
.card-logo {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}
.card-logo img {
  background: #ebf5f1;
  border-radius: 50%;
  height: 1.6rem;
  width: 1.6rem;
}
.chant {
  font-size: 12px;
  font-weight: 700;
  font-family: "Nunito Sans", sans-serif;
}
.num {
  font-size: 12px;
  font-weight: 700;
  padding-top: 6px;
}



.invest-section {
  margin-left: 25rem;
  margin-right: 25rem;
}
.beta {
  
  padding-top: 3rem;
  height: 50vh;
  text-align: center;
}
.beta h1 {
  font-size: 50px;
  font-weight: 600;
  font-family: "Recoleta";
}
.beta p {
  font-size: 20px;
  font-weight: 400;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.beta input {
  border: 1px solid #000000;
  padding: 7px 10px;
  width: 50%;
  height: 60px;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.beta button {
  background: #50ac95;
  color: white;
  padding: 18px 50px;
  border: none;
}
.rent {
  background: url("../assets/rent.svg") center center/cover;
  height: 50vh;
  margin-top: 1rem;
  color: white;
  text-align: center;
}
.rent h1 {
  font-family: "Recoleta";
  font-size: 50px;
  font-weight: 500;
  padding-top: 7rem;
}
.rent p {
  font-size: 20px;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.rent button {
  background: #1686c1;
  border: 1px solid #1686c1;
  padding: 8px 20px;
  color: white;
}
.partners {
  /* padding: 2rem 7rem; */
  text-align: center;
}
.partners h3 {
  color: #50ac95;
  font-size: 25px;
  font-weight: 800;
}
.partners1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
}
.partners1 img {
  width: 100%;
  height: 3rem;
}

@media (max-width: 576px) {
  .grid-card {
    margin-left: 10px;
    margin-right: 10px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    text-align: center;
  }
  .card-logo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
  .invest-section {
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta input {
    border: 1px solid #000000;
    padding: 7px 10px;
    width: 50%;
    width: 100%;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .beta button {
    background: #50ac95;
    color: white;
    padding: 8px 20px;
    border: none;
    width: 100%;
  }
  .rent {
    background: url("../assets/rent.svg") center center/cover;
    height: 80vh;
    margin-top: 1rem;
    color: white;
    text-align: center;
  }
  .partners {
    padding: 2rem 10px;
    text-align: center;
  }
  .partners h3 {
    color: #50ac95;
    font-size: 25px;
    font-weight: 800;
  }
  .partners1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
  }
  .partners1 img {
    width: 100%;
  }
}

@media (min-width: 577px) and (max-width: 768px) {
  .merchant {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 10px;
    margin-right: 10px;
    row-gap: 1rem;
    text-align: center;
  }
  .merchant2 img {
    width: 50%;
  }
  .merchant1 ul {
    margin-left: 10px;
    font-weight: 400;
    list-style: none;
  }
  .merchant1 {
    padding-right: 0;
  }
  .grid-card {
    margin-left: 10px;
    margin-right: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    text-align: center;
  }
  .card-logo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
  .invest-section {
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta input {
    border: 1px solid #000000;
    padding: 7px 10px;
    width: 50%;
    height: 60px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .beta button {
    background: #50ac95;
    color: white;
    padding: 8px 20px;
    border: none;
  }
}
@media (max-width: 768px) {
  .beta h1 {
    font-size: 30px;
    font-weight: 600;
    font-family: "Recoleta";
  }
  .beta input {
    border: 1px solid #000000;
    padding: 7px 10px;
    width: 100%;
    height: 60px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
}
@media (min-width: 769px) and (max-width: 1200px) {
  .merchant {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 10px;
    margin-right: 10px;
    row-gap: 1rem;
    text-align: center;
  }
  .merchant2 img {
    width: 40%;
  }
  .merchant1 ul {
    margin-left: 10px;
    font-weight: 400;
    list-style: none;
  }
  .merchant1 {
    padding-right: 0;
  }
  .grid-card {
    margin-left: 10px;
    margin-right: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    text-align: center;
  }
  .card-logo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
  .invest-section {
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .beta input {
    border: 1px solid #000000;
    padding: 7px 10px;
    width: 50%;
    height: 60px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  .beta button {
    background: #50ac95;
    color: white;
    padding: 8px 20px;
    border: none;
  }
}
</style>
