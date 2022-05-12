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
                        <input type="text" required class="form-control" v-model="productDetails.name">
                        <label for="Description">Description</label>
                        <textarea name="" id="" required cols="30" class="form-control" v-model="productDetails.description" style="height:5rem"></textarea>
                        <label for="Price*">Price</label>
                        <input type="number" required  class="form-control" v-model="productDetails.price" min="1">
                        <label for="Minimum Investment">Minimum Investment</label>
                        <input type="number" required  class="form-control" v-model="productDetails.minimum_investment" min="1">
                        <label for="In Development">In Development</label>
                        <select required  @change="think($event)" class="form-select form-control" aria-label="Default select example" v-model="productDetails.in_development">
                            <option selected disabled>Choose One</option>
                            <option value=true>True</option>
                            <option value=false>False</option>
                        </select>
                        <label for="Address">Address</label>
                        <input type="text" required  class="form-control" v-model="productDetails.address">
                        <label for="Investment Type">Investment Type</label>
                        <select required  class="form-select form-control" aria-label="Default select example" @change="pick($event)" v-model="productDetails.investment_type">
                            <option selected disabled>Choose One</option>
                            <option value="individual">Individual</option>
                            <option value="groups">Groups</option>
                            <option value="both">Both</option>
                        </select>
                        <label for="Country">Country</label>
                        <select required  @change="choose($event)" class="form-select form-control"   aria-label="Default select example" v-model="productDetails.country">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in countries" :key="index">{{item.name}}</option>
                        </select>
                        <label for="State">State</label>
                        <select required  @change="select($event)" class="form- form-control"   aria-label="Default select example" v-model="productDetails.state">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in states" :key="index">{{item.name}}</option>
                        </select>
                        <label for="City">City</label>
                        <select required  @change="mention($event)" class="form-select form-control"   aria-label="Default select example" v-model="productDetails.city">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in cities" :key="index">{{item.name}}</option>
                        </select>
                        <label for="Videos"> Add Videos </label>
                        <input type="file" required  class="form-control" multiple @change="uploadVideos()">
                        <label for="Images">Add Images </label>
                        <input type="file" required  class="form-control" multiple  @change="uploadImages()">
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
    .dash5 input,select,textarea{
        display: block;
        width: 100%;
        border: 1px solid #C4C4C4;
        border-radius: 5px;
        margin-bottom: 1rem;
        padding-left: 0.5rem;
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
        padding-top: 5rem;
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
import { mapState } from "vuex";
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
                city_id:'',
                videos:null,
                images:null
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
    computed:{
            ...mapState('auth',['auth_token'])
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
    async pick(event) {
      let value = event.target.value;
      this.productDetails.investment_type = value;
      console.log(this.productDetails.investment_type);
    },
    async think(event) {
      let value = event.target.value;
      this.productDetails.in_development = value;
      console.log(this.productDetails.in_development);
    },
     uploadImages() {
         this.productDetails.images = event.target.files;
        console.log(this.productDetails.images)
    },
    uploadVideos() {
        this.productDetails.videos = event.target.files;
        console.log(this.productDetails.videos)
    },
    submitProductDetails() {
      const formData = new FormData();
      formData.append("name", this.productDetails.name);
      formData.append("description", this.productDetails.description);
      formData.append("price", this.productDetails.price);
      formData.append("minimum_investment", this.productDetails.minimum_investment);
      formData.append("in_development", this.productDetails.in_development);
      if(this.productDetails.videos.length > 0){
          for(var i = 0 ; i < this.productDetails.videos.length ; i++){
            formData.append('videos', this.productDetails.videos[i]);
          }
      }
      if(this.productDetails.images.length > 0){
          for(var i = 0 ; i < this.productDetails.images.length ; i++){
            formData.append('images', this.productDetails.images[i]);
          }
      }
      formData.append("country_id", this.productDetails.country_id);
      formData.append("state_id", this.productDetails.state_id);
      formData.append("city_id", this.productDetails.city_id);
      formData.append("address", this.productDetails.address);
      formData.append("investment_type", this.productDetails.investment_type);
      formData.append("_method", "POST");
      axios.post(
          'https://test-api.citisquare.africa/api/merchant/properties/',
          formData, {
              headers : {
                    authorization: `token ${this.auth_token}`,
                    'Content-Type': 'multipart/form-data'
                    
                }
          }
        )
        .then((res) => {
          console.log(res.data);
          this.makeToast(
          "Product Added",
         'Success',
          "success"
        );
        this.productDetails = {}
        //   this.$router.push('/merchantdashboard/kycsuccess')
        })
        .catch((error) => {
          console.log(error);
          this.makeToast(
          (error),
          "Please Try Again Later",
          "warning"
        );
        });
    },
    }
}
</script>