<template>
  <div class="container">
      <div class="pt-5">
           <img src="@/assets/ck.svg" alt="" />
      </div>
      <div class="make_payment pt-5"><h1>Make Payment</h1></div>

      <div class="pay_item">  
          <div class="small_huz">
              <img src="@/assets/8.svg" alt="">
          </div>

          <div class="dakada">
              <h1>Dakada Estate</h1>
              <p>Airport road, Uyo Akwa Ibom State</p>
          </div>
          <div class="amount">
              <h1>NGN 100,000,00</h1>
              <p>NGN 50,000,00 per property</p>
          </div>
      </div>
       <div class="change_prop">Change Property</div>

       <div class="pt-5 ">
           <div class="personal_info">
               <div>
                    <div><img src="@/assets/tick.svg" alt="">  Personal Information</div>
                    <div class="pt-3"><img src="@/assets/tick-circle.svg" alt="">  Payment Type</div>
                    <div class="pt-3"><img src="@/assets/tick-circle.svg" alt="">  Payment Gateway</div>
                    <div class="pt-3"><img src="@/assets/tick-circle.svg" alt="">  Confirmation</div>
               </div>
             <div>
                <h6 class="info">Personal Information</h6>
                <p>Information that will be attached to the ownership documents</p>
             <div>
                 <label for="" class="who">Who is this property for</label>
                 <select class="form-select" aria-label="Default select example">
                 <option selected>Third Party</option>
               </select>

               <div class="checkbox d-flex align-items-center mt-3">
                  <input type="checkbox" id="cb1" />
                 <label for="cb1" class="check_text">
                 Retain property in my name</label>
              </div>
              <div>
                  <label for="" class="who pt-3">Full name of third party</label>
                  <input class="names" type="text" placeholder="">
                  
              </div>
              <div>
                 <label for="" class="who pt-3">Phone number of the third party</label>
                 <input class="names" type="text" placeholder="">
              </div>
              <button class="save">Save and Continue</button>
             </div>
             </div>
             
           </div>
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.make_payment {
    font-weight: 600;
    font-size: 30px;
    color: #08293A;
}
.pay_item {
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);; */
    border: 1px solid rgba(22, 134, 193, 1) ;
    padding: 15px 25px;
    display: grid;
    grid-template-columns: 1fr 5fr 2fr;
    column-gap: 1rem;
    margin-top: 4rem;
    border-radius: 3px;
    background: #EFF7FB;
    height: 170px;
}
.small_huz img{
    width: 130px;
    height: 130px;
    margin-top: 5px; 
}
.dakada {
    color:  #000000;;
    font-size: 20px;
    font-weight: 600;
    /* padding-right: 55rem; */
}
.dakada p{
    font-weight: 400;
    font-size: 16px;
    color: #000000;

}
.amount h1{
    font-size: 20px;
    font-weight: 600; 
    color: rgba(0, 0, 0, 1);
    text-align: right;
}
.amount p{
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    text-align: right;
}
.change_prop {
    float: right;
    font-weight: 600;
    font-size: 16px;
    color:  #1686C1;
    padding-top: 1rem;
}
.personal_info {
    display: grid;
    grid-template-columns: 1fr 3fr;
}
.info {
    font-weight: 600;
    color: #000000;
}
.who{
    font-weight: 400;
    font-size: 16px;
    color: #08293A;
}
.form-select{
    width: 362px;
    height: 45px;
    border:1px solid #d1c7c7;
}
input[type="checkbox"] {
    width: max-content;
    margin: 0px 0.3 rem;
    position: absolute;
}
.check_text {
   position: relative;
   left: 2rem;
   font-weight: 400;
   font-size: 13px;
   color: #555555;
}
label {
    display: block;
}
.names {
    width: 362px;
    height: 45px;
   
}
input{
    outline: none;
}
.save {
    width: 45%;
    color: #fff;
    background: #2594D9;
    border-radius: 2px;
    width: 362px;
    height: 45px;
    border: none;
    outline: none;
    margin-top: 2rem;
}




@media(max-width: 768px){
    .pay_item {
    /* box-shadow: 0 3px 10px rgb(0 0 0 / 0.1);; */
    border: 1px solid rgba(22, 134, 193, 1) ;
    /* padding: 5px 10px; */
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 1rem;
    margin-top: 3rem;
    height: 100%;
    width: 100%;
    text-align: center;
}
.small_huz img{
    width: 100%;
    height: 130px;
    margin-top: 5px; 
}
.personal_info {
    display: grid;
    grid-template-columns: 1fr ;
    row-gap: 2rem;
}
.form-select{
    width: 100%;
    height: 45px;
    border:1px solid #d1c7c7;
}
.names {
    width: 100%;
    height: 45px;
   
}
.save {
    color: #fff;
    background: #2594D9;
    border-radius: 2px;
    width: 100%;
    height: 45px;
    border: none;
    outline: none;
    margin-top: 2rem;
}
.change_prop {
    float: none;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color:  #1686C1;
    padding-top: 1rem;
}
.dakada p{
    font-size: 15px;
}
}

</style>