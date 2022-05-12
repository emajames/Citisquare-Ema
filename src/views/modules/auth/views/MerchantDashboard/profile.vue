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
                        <img src="@/assets/tick.svg" alt=""><p id="profile">Update Profile</p>
                    </div>
                    <!-- <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p>Upload Documents</p>
                    </div>
                    <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p>Review and Submit</p>
                    </div> -->
                </div>
                <div class="dash5">
                    <form method="post" @submit.prevent="updateProfile() ">
                        <h3>Profile</h3>
                        <label for="Name">First Name</label>
                        <input type="text" required class="form-control" v-model="profile.first_name">
                        <label for="Description">Last Name</label>
                        <input type="text" required class="form-control" v-model="profile.last_name">
                        <label for="Country">Country</label>
                        <select required  @change="choose($event)" class="form-select form-control"   aria-label="Default select example">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in countries" :key="index">{{item.name}}</option>
                        </select>
                        <label for="State">State</label>
                        <select required  @change="select($event)" class="form- form-control"   aria-label="Default select example" >
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in states" :key="index">{{item.name}}</option>
                        </select>
                        <label for="City">City</label>
                        <select required  @change="mention($event)" class="form-select form-control"   aria-label="Default select example">
                            <option selected disabled>Choose One</option>
                            <option :value=item.id  class="form-select"
                         v-for="(item, index) in cities" :key="index">{{item.name}}</option>
                        </select>
                        
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
            profile:{
                country_id:'',
                state_id:'',
                city_id:'',
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
      axios.get(  `https://test-api.citisquare.africa/api/countries/${this.profile.country_id}/states`)
        .then((response) => {
          this.states = response.data;
          console.log(this.countries);
        });
    },
    getCities() {
      axios.get(  `https://test-api.citisquare.africa/api/states/${this.profile.state_id}/cities`)
        .then((response) => {
          this.cities = response.data;
          console.log(this.cities);
        });
    },
    
        async choose(event) {
      let value = event.target.value;
      this.profile.country_id = value;
      console.log(this.profile.country_id);
      this.getStates()
    },
    async select(event) {
      let value = event.target.value;
      this.profile.state_id = value;
      console.log(this.profile.state_id);
      this.getCities()
    },
    async mention(event) {
      let value = event.target.value;
      this.profile.city_id = value;
      console.log(this.profile.city_id);
    },
    updateProfile() {
      const formData = new FormData();
      formData.append("first_name", this.profile.first_name);
      formData.append("last_name", this.profile.last_name);
      formData.append("country_id", this.profile.country_id);
      formData.append("state_id", this.profile.state_id);
      formData.append("city_id", this.profile.city_id);
      formData.append("_method", "PATCH");
      axios.patch(
          'https://test-api.citisquare.africa/api/auth/users/me/',
          formData, {
              headers : {
                    authorization: `token ${this.auth_token}`,
                    
                    
                }
          }
        )
        .then((res) => {
          console.log(res.data);
          this.makeToast(
          "Profile Updated",
         'Success',
          "success"
        );
        this.profile = {}
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