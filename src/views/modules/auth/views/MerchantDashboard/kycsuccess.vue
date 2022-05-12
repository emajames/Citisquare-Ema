<template>
<div class="dash">
    <div class="show">
        <Navbar/>
    </div>
    <Sidebar/>
    <div class="dash1">
        <div class="dash2">
            <div style="height:1rem">

            </div>
            <div class="dash3">
                <img src="@/assets/correct.svg" alt="">
                <h3>KYC Information Submitted</h3>
                <p>Your KYC information has been submitted successfully. In the mean time,
                    add new products to your catalog while awaiting KYC review</p>
                <button id="da" @click="displayToast()">Dashboard</button> <button class="da">Add Products</button>
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
        height: 100vh;
        width: 100%;
    }
    .dash3{
        margin-top: 8rem;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        background: white;
        padding: 2rem;
        text-align: center;
    }
    .dash3 img{
        width: 87px;
        height: 88px;
        margin-bottom: 0.5rem;
    }
    .dash3 h3{
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    .dash3 p{
        color: #4F4F4F;
        font-size: 15px;
        font-weight: 400;
        line-height: 19px;
        margin-bottom: 1rem;
    }
    #da{
        color: #979797;
        border: 1px solid #50AC95;
        padding: 7px 25px;
        border-radius: 5px;
        background: white;
        margin-right: 0.2rem;
    }
    .da{
        color: #FFFFFF;
        background: #50AC95;
        border: 1px solid #50AC95;
        padding: 7px 25px;
        border-radius: 5px;
        margin-left: 0.2rem;
    }
    

    @media(max-width:768px){
        .dash1{
        margin-left: 0%;
        width: 100%;
    }
        .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
    }
    
        .show{
        display: block;

    }
    .dash3{
        margin-top: 8rem;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        background: white;
        padding: 2rem 1rem;
        text-align: center;
    }
    #da{
        color: #979797;
        border: 1px solid #50AC95;
        padding: 7px 25px;
        border-radius: 5px;
        background: white;
        margin-right: 0rem;
        width: 100%;
        margin-bottom: 1rem;
    }
    .da{
        color: #FFFFFF;
        background: #50AC95;
        border: 1px solid #50AC95;
        padding: 7px 25px;
        border-radius: 5px;
        margin-left: 0rem;
        width: 100%;
    }
        
    }


    @media(min-width:577px) and (max-width:768px){
        .dash1{
        margin-left: 0%;
        width: 100%;
    }
        .dash2{
        background: #FAFBFA;
        height: 100vh;
        width: 100%;
    }
        
        .show{
        display: block;
    }
    }

</style>

<script>
import Sidebar from "@/components/Merchant/SideBar.vue";
import Navbar from "@/components/Merchant/Navbar.vue";
export default {
    components: {
        Sidebar,
        Navbar
    },
    methods:{
        displayToast(){
           this.makeToast(
          "Login Successful",
         'welcome',
          "success"
        );
        }
    }
}
</script>