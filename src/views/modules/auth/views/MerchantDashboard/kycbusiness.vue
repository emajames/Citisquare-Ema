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
                    <!-- <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p id="profile">Profile</p>
                    </div>
                    <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p>Contact</p>
                    </div> -->
                    <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p>Business Info</p>
                    </div>
                    
                </div>
                <div class="dash5">
                    <form method="post" @submit.prevent="submitKyc()" enctype="multipart/form-data">
                        <h3>Business Information</h3>
                        <label for="Business Name">Business/Organisation Name *</label>
                        <input type="text" required  v-model="business_info.business_name">
                        <label for="Country">Country where business is situated</label>
                        <select @change="choose($event)" class="form-select" required aria-label="Default select example" v-model="business_info.country_id">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in countries" :key="index">{{item.name}}</option>
                            
                        </select>
                        <label for="State">State where business is situated</label>
                        <select @change="select($event)" required  class="form-select"   aria-label="Default select example" v-model="business_info.state_id">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in states" :key="index">{{item.name}}</option>
                            
                        </select>
                        <label for="City">City where business is situated</label>
                        <select @change="mention($event)" required  class="form-select"   aria-label="Default select example" v-model="business_info.city_id">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in cities" :key="index">{{item.name}}</option>
                            
                        </select>
                        <label for="MC type">MC type</label>
                        <select class="form-select" required  @change="push($event)" aria-label="Default select example" v-model="business_info.mc_type">
                            <option selected disabled>Choose One</option>
                            <option value="individual">Individual</option>
                            <option value="sole_proprietor">Sole Proprietor</option>
                            <option value="limited_liability">Limited Liability</option>
                        </select>
                        <label for="BVN">BVN*</label>
                        <input type="text" required  v-model="business_info.bvn">
                        <label for="RC Number">RC Number</label>
                        <input type="text" required  v-model="business_info.rc_number">
                        <label for="Address*">Business Address*</label>
                        <input type="text" required  v-model="business_info.address">
                        <label for="Phone Number">Phone Number</label>
                        <input type="text" required  v-model="business_info.phone_number">
                        <label for="Email">Email</label>
                        <input type="text" required  v-model="business_info.email">
                        <label for="logo"> Add a Logo </label>
                        <input type="file" required  @change="uploadLogo()">
                        <label for="documents">Add Business documents </label>
                        <input type="file" required multiple  @change="uploadDocuments">
                        <div>
                            <button type="submit">Submit</button>
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
        padding-top: 2rem;
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
    .dash5 input, select{
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
import { mapState } from "vuex";
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
            business_info:{
                country_id:'',
                state_id:'',
                city_id:'',
                documents:null,
            },
            countries:{},
            
            states:{},
           
            cities:{},
            
            
        }
        

    },

    computed:{
            ...mapState('auth',['auth_token'])
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
      axios.get(  `https://test-api.citisquare.africa/api/countries/${this.business_info.country_id}/states`)
        .then((response) => {
          
          this.states = response.data;
          console.log(this.countries);
          
        });
    },
    getCities() {
      axios.get(  `https://test-api.citisquare.africa/api/states/${this.business_info.state_id}/cities`)
        .then((response) => {
          
          this.cities = response.data;
          console.log(this.cities);
          
        });
    },
    async choose(event) {
      let value = event.target.value;
      this.business_info.country_id = value;
      console.log(this.business_info.country_id);
      this.getStates()
      
    },
    async select(event) {
      let value = event.target.value;
      this.business_info.state_id = value;
      console.log(this.business_info.state_id);
      this.getCities()
      
    },
    async mention(event) {
      let value = event.target.value;
      this.business_info.city_id = value;
      console.log(this.business_info.city_id);
      
      
    },
    async push(event) {
      let value = event.target.value;
      this.business_info.mc_type = value;
      console.log(this.business_info.mc_type);
      
      
    },
   
    uploadLogo() {
      var input = event.target;
      this.business_info.logo = input.files[0];
      console.log(this.business_info.logo);
    },
    uploadDocuments() {
    this.business_info.documents = event.target.files;
    console.log(this.business_info.documents)
   
    },
    submitKyc() {
      const formData = new FormData();
      formData.append("business_name", this.business_info.business_name);
      formData.append("country_id", this.business_info.country_id);
      formData.append("state_id", this.business_info.state_id);
      formData.append("city_id", this.business_info.city_id);
      formData.append("mc_type", this.business_info.mc_type);
      formData.append("bvn", this.business_info.bvn);
      formData.append("address", this.business_info.address);
      formData.append("phone_number", this.business_info.phone_number);
      formData.append("email", this.business_info.email);
      formData.append("logo", this.business_info.logo);
      formData.append("rc_number", this.business_info.rc_number);
    //   formData.append("uploads", this.business_info.uploads);
       if(this.business_info.documents.length > 0){
          for(var i = 0 ; i < this.business_info.documents.length ; i++){
            formData.append('documents', this.business_info.documents[i]);
          }
      }
    // for (const i of Object.keys(this.uploads)) {
    //         formData.append('uploads', this.uploads[i])
    //       }
    // if (this.business_info.uploads instanceof FileList || this.business_info.uploads instanceof Array) {
    //         for (let i = 0; i < this.business_info.uploads.length; i++) {
    //             formData.append('uploads', this.business_info.uploads[i])
    //         }
    //     }
      formData.append("_method", "PUT");
      axios.put(
          'https://test-api.citisquare.africa/api/merchant/kyc-submission/',
          formData, {
              headers : {
                    authorization: `token ${this.auth_token}`,
                    'Content-Type':'multipart/form-data' 
                }
          }
        )
        .then((res) => {
          console.log(res.data);
          this.makeToast(
          "KYC Added",
         'Success',
          "success"
        );
        this.business_info = {}
        this.$router.push('/merchantdashboard/dashboard')
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