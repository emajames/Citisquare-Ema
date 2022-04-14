<template>
  <div class="container">
      <div class="pt-5">
           <img src="@/assets/ck.svg" alt="" />
      </div>
      <div class="make_payment pt-5"><h1>Make Payment</h1></div>

      <div class="pay_item">  
          <div class="small_huz">
              <img src="@/assets/house.svg" alt="">
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
    padding: 15px 15px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    column-gap: 1rem;
    margin-top: 4rem;
    border-radius: 3px;
    background: #EFF7FB;
    height: 162px;
}
.small_huz{
    width: 5rem;
    height: 5rem;
    
}

</style>