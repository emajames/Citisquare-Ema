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
                        <img src="@/assets/tick.svg" alt=""><p id="profile">Product Detail</p>
                    </div>
                    <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p>Upload Documents</p>
                    </div>
                    <div class="dash41">
                        <img src="@/assets/tick.svg" alt=""><p>Review and Submit</p>
                    </div>
                    
                </div>
                <div class="dash5">
                    <form method="post">
                        <h3>Product Details</h3>
                        <label for="Profile Picture*">Product Name</label>
                        <input type="text">
                        <label for="First Name*">Property Description</label>
                        <input type="text" style="height:5rem">
                        <label for="Last Name*">Price (&#8358;)</label>
                        <input type="text">
                        <label for="BVN*">Category</label>
                        <input type="text">
                        <label for="BVN*">Subcategory</label>
                        <input type="file">
                        <label for="BVN*">Select the various payment plans that apply to this product </label>
                        <div class="check">
                            <span class="checkbox d-flex align-items-center mt-4">
                            <input type="checkbox" id="cb1" />
                            <label for="cb1" class="pr-1 check_text">
                                Outright</label
                            >
                            </span>
                            <span class="checkbox d-flex align-items-center mt-4">
                            <input type="checkbox" id="cb1" />
                            <label for="cb1" class="pr-1 check_text">
                                Installments</label
                            >
                            </span>
                            
                            
                            <span class="checkbox d-flex align-items-center mt-4">
                            <input type="checkbox" id="cb1" />
                            <label for="cb1" class="pr-1 check_text">
                                Loans</label
                            >
                            </span>
                             <span class="checkbox d-flex align-items-center mt-4">
                            <input type="checkbox" id="cb1" />
                            <label for="cb1" class="pr-1 check_text">
                                Buy Now, Pay Later</label
                            >
                            </span>
                            
                        </div>


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
        height: 100vh;
        width: 100%;
    }
    .dash3{
        padding-top: 9rem;
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
    .dash5 input{
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
        height: 100vh;
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
    }
}
</script>