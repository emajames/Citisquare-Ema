<template>
<div class="dash">
    <div class="show">
        <Navbar/>
    </div>
    <Sidebar/>
    <div class="dash1">
        <div class="dash2">
            <div class="dash3">
                <div class="dash4">
                    <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p id="profile">Add Product</p>
                    </div>
                    <!-- <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p>Upload Documents</p>
                    </div>
                    <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p>Review and Submit</p>
                    </div> -->
                </div>
                <div class="dash5">
                    <form method="post" @submit.prevent="submitProductDetails() ">
                        <h3>Product Details</h3>
                        <label for="Name">Name</label>
                        <input type="text" class="form-control" v-model="productDetails.name">
                        <label for="Description">Description</label>
                        <input type="text" class="form-control" v-model="productDetails.description" style="height:5rem">
                        <label for="Price*">Price</label>
                        <input type="number" class="form-control" v-model="productDetails.price" min="1">
                        <label for="Minimum Investment">Minimum Investment</label>
                        <input type="number" class="form-control" v-model="productDetails.minimum_investment" min="1">
                        <label for="In Development">In Development</label>
                        <select  class="form-select form-control" aria-label="Default select example" v-model="productDetails.in_development">
                            <option selected disabled>Choose One</option>
                            <option value="1">True</option>
                            <option value="2">False</option>
                        </select>
                        <label for="Address">Address</label>
                        <input type="text" class="form-control" v-model="productDetails.address">
                        <label for="Investment Type">Investment Type</label>
                        <select class="form-select form-control" aria-label="Default select example" v-model="productDetails.investment_type">
                            <option selected disabled>Choose One</option>
                            <option value="individual">Individual</option>
                            <option value="groups">Groups</option>
                            <option value="both">Both</option>
                        </select>
                        <label for="Country">Country</label>
                        <select @change="choose($event)" class="form-select form-control"   aria-label="Default select example" v-model="productDetails.country">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in countries" :key="index">{{item.name}}</option>
                        </select>
                        <label for="State">State</label>
                        <select @change="select($event)" class="form- form-control"   aria-label="Default select example" v-model="productDetails.state">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in states" :key="index">{{item.name}}</option>
                        </select>
                        <label for="City">City</label>
                        <select @change="mention($event)" class="form-select form-control"   aria-label="Default select example" v-model="productDetails.city">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in cities" :key="index">{{item.name}}</option>
                        </select>
                        <label for="Videos"> Add Videos </label>
                        <input type="file" class="form-control" multiple @change="upload()">
                        <label for="Images">Add Images </label>
                        <input type="file" class="form-control" multiple @change="update()">
                        <div>
                            <button type="submit">Add Product</button>
                        </div>
                    </form>
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
    .show{
        display: none;
    }
    .dash1{
        margin-left: 20%;
        width: 80%;
    }
    .dash2{
        background: #FAFBFA;
        height: auto;
        width: 100%;
    }
    .dash3{
        padding-top: 1rem;
        margin-left: 3rem;
        margin-right: 3rem;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
    }
    .dash41{
        display: flex;
        margin-bottom: 1rem;
    }
    .dash41 img{
        margin-right: 1rem;
    }
    .dash41 p{
        color: #798992;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
    }
    .dash5{
        background: white;
        padding: 2rem 2rem;
    }
    .dash5 input,select{
        display: block;
        width: 100%;
        border: 1px solid #C4C4C4;
        border-radius: 5px;
        margin-bottom: 1rem;
    }
    .dash5 h3{
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    .dash5 div{
        text-align: right;
    }
    .dash5 div button{
        padding:7px 25px;
        background: #50AC95;
        border-radius: 5px;
        border: none;
        color: white;
    }
    #profile{
        color: #000000;
    }
    input[type="checkbox"] {
  width: max-content;
  margin: 0px 0.3 rem;
  position: absolute;
}
    .check_text {
  position: relative;
  left: 1rem;
  top: -0.5rem;
}
    .check{
        display: grid;
        grid-template-columns: 1fr 1.5fr 1fr 2fr ;
        column-gap: 1rem;
    }
    @media(max-width:768px){
        .dash1{
        margin-left: 0%;
        width: 100%;
    }
        .dash2{
        background: #FAFBFA;
        height: auto;
        width: 100%;
    }
        .show{
        display: block;
    }
        .dash3{
        padding-top: 9rem;
        margin-left: 10px;
        margin-right: 10px;
        display: grid;
        grid-template-columns: 1fr;
    }
    .check{
        display: grid;
        grid-template-columns: 1fr ;
        column-gap: 1rem;
    }
    }
    @media(min-width:577px) and (max-width:768px){
        .dash1{
        margin-left: 0%;
        width: 100%;
    }
        .dash2{
        background: #FAFBFA;
        height: auto;
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
export default {
    components: {
        Sidebar,
        Navbar
    },
    data(){
        return{
            productDetails:{
                country_id:'',
                state_id:'',
                city_id:''
            },
            countries:{},
            states:{},
            cities:{},
        }
    },
    mounted(){
        this.getCountries(),
        this.getStates(),
        this.getCities()
    },
    methods:{
        getCountries() {
      axios.get( "https://test-api.citisquare.africa/api/countries")
        .then((response) => {
          this.countries = response.data;
          console.log(this.countries);
        });
    },
        getStates() {
      axios.get(  `https://test-api.citisquare.africa/api/countries/${this.productDetails.country_id}/states`)
        .then((response) => {
          this.states = response.data;
          console.log(this.countries);
        });
    },
        getCities() {
      axios.get(  `https://test-api.citisquare.africa/api/states/${this.productDetails.state_id}/cities`)
        .then((response) => {
          this.cities = response.data;
          console.log(this.cities);
        });
    },
        async choose(event) {
      let value = event.target.value;
      this.productDetails.country_id = value;
      console.log(this.productDetails.country_id);
      this.getStates()
    },
    async select(event) {
      let value = event.target.value;
      this.productDetails.state_id = value;
      console.log(this.productDetails.state_id);
      this.getCities()
    },
    async mention(event) {
      let value = event.target.value;
      this.productDetails.city_id = value;
      console.log(this.productDetails.city_id);
    },
     update() {
      var input = event.target;
      this.productDetails.images = input.files;
      console.log(this.productDetails.images);
    },
    upload() {
      var input = event.target;
      this.productDetails.videos = input.files;
      console.log(this.productDetails.videos);
    },
    async submitProductDetails() {
        try {
            const response = await axios.post(
            'https://test-api.citisquare.africa/api/merchant/properties/', this.productDetails
            );
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    },
    }
}
</script>