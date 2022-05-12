<template>
  <div class="container">
      <h3 class="estate">Real Estate</h3>
      <div class="box">
          <div class="" >
              <p>Location</p>
              <div class="location">
                  <FontAwesomeIcon :icon="['fas','location-dot']" class="icon" />
                  <input type="text" placeholder="Lekki,Lagos">
              </div>  
          </div>

         <div class="" >
              <p>Category</p>
              <div class="location">
                  <FontAwesomeIcon :icon="['fas', 'chevron-down']" class="icons" />
                  <input type="text" placeholder="Lekki,Lagos">
              </div>  
          </div>

           <div class="" >
              <p>Sub Category</p>
              <div class="location">
                  <FontAwesomeIcon :icon="['fas', 'chevron-down']" class="icons" />
                  <input type="text" placeholder="Lekki,Lagos">
              </div>  
          </div>

           <div class="" >
              <p>Amount</p>
              <div class="location">
                  <FontAwesomeIcon :icon="['fas', 'user']" class="icons" />
                  <input type="text" placeholder="Lekki,Lagos">
              </div>  
          </div>

              <div>
                  <button>Search</button>
              </div>        
      </div>

      <div>
           <h6 class="pt-4 properties">Available Properties</h6>
      </div>

      <div class="items_prop">
          <div class="img_prop" v-for="(item, index) in properties" :key="index"  @click="viewProperty(item.id)">
              
              <img  src="@/assets/property.svg" alt="">
                <div>
              <h3>{{item.name}}</h3>
              <p>{{item.address}}, {{item.city}}, {{item.state}}, {{item.country}}</p> 
              <p>{{item.description}}</p> 
               <p class="four_star">&#9733; &#9733; &#9733; &#9733; <span class="one_star">&#9733;</span>  <span class="review">110 Reviews</span></p>
               <p class="start">Starting from <span class="cash">N{{item.price}}</span></p>
          </div>
          </div>

          

           

          

           

         

      </div>

     
  </div>
</template>

<script>
import axios from "axios";

export default {
    components: {
        
    },
    data(){
        return{
            properties:{}
        }
    },
    mounted(){
        this.getProperties()
    },
    computed:{
            
    },
    methods:{
        getProperties() {
      axios.get( "https://test-api.citisquare.africa/api/properties/")
        .then((response) => {
          this.properties = response.data.results;
          console.log(this.properties);
        });
    },
    viewProperty(property) {
      this.$router.push(`/properties/${property}`);
    },
       
    }
}
</script>

<style>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.estate {
    padding-top: 3rem;
    font-weight: 700;
    font-size: 30px;
    letter-spacing: -0.01em;
    color: #08293A;
}

.box {
    /* border: 0.5px #e0e8ec solid; */
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);;
    height: 135px;
    padding: 15px 15px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    margin-top: 4rem;
    border-radius: 3px;
}
.location {
    display: flex;
    position: relative;
    
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
   left: 19.5rem;
   top: 0.6rem;
   color: #cad4dd;
}
.icons {
   position: absolute;
   left: 9rem;
   top: 0.6rem;
   color: #cad4dd;
}
button {
    width: 100%;
    margin-top: 2.5rem;
    padding: 4px 10px;
    outline: none;
    border: none;
    border-radius: 3px;
    height: 45px;
    background: rgba(22, 134, 193, 1);
    color: #fff;
}
.properties {
    font-weight: 600;
    font-size: 16px;
    color: #08293A;
}
.items_prop{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        column-gap: 1rem;
    /* display: flex;
    justify-content: space-around; */
}
.img_prop{
    display: grid;
    grid-template-columns: 1fr 1fr ;
    column-gap: 1rem;
    row-gap: 2rem;
}

.img_prop p{
    margin-top: -0.8rem;
}
.img_prop img{
    width: 100%;
}
.four_star {
    color: #1686C1;
}
.one_star{
    color: #dadada;
}
.review {
    color: #07354d;
    text-decoration: underline;
    font-size: 12px;
    margin-left: 1rem;
}
.start {
     color: #07354d;
     
}
.cash {
    color: #1686C1;
    font-weight: 600;
}




@media(max-width: 1200px){
    .box {
    /* border: 0.5px #e0e8ec solid; */
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);;
    height: auto;
    padding: 15px 15px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    margin-top: 4rem;
    border-radius: 3px;
}
    .items_prop{
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 1rem;
    /* display: flex;
    justify-content: space-around; */
}
    .icon {
   position: absolute;
   left: 15rem;
   top: 0.6rem;
   color: #cad4dd;
}
    .icons {
   position: absolute;
   left: 15rem;
   top: 0.6rem;
   color: #cad4dd;
}
    .img_prop{
    display: grid;
    grid-template-columns: 1fr  ;
    row-gap: 1rem;
}
}
</style>