<template>
    <div class="one">
        <div class="one1">
            <h3>Oxigen Loans</h3>
            <p id="b">oxygen@gmail.com</p>
            <p >Financial Services </p>
        </div>
        <div class="one2">
            <h3>Introduction</h3>
            <div class="one21">
                <img src="@/assets/dashicons/timer-start.svg" alt=""><p> Get Started</p>
            </div>
            <div class="one21">
                <img src="@/assets/dashicons/shield-tick.svg" alt=""><p> Complete KYC</p>
            </div>
            
        </div>
        <div class="one2">
            <h3>Dashboard</h3>
            <div class="one21">
                <img src="@/assets/dashicons/home-2.svg" alt=""><p> Home</p>
            </div>
            
        </div>
        <div class="one2">
            <h3>Products</h3>
            <div class="one21">
                <img src="@/assets/dashicons/receipt-add.svg" alt=""><p> Add Products</p>
            </div>
            <div class="one21">
                <img src="@/assets/dashicons/receipt-edit.svg" alt=""><p> Manage Products</p>
            </div>
            
        </div>
        <div class="one2">
            <h3>Wallets</h3>
            <div class="one21">
                <img src="@/assets/dashicons/wallet-add.svg" alt=""><p> Fund Wallet</p>
            </div>
            <div class="one21">
                <img src="@/assets/dashicons/arrow-3.svg" alt=""><p> Transactions</p>
            </div>
            <div class="one21">
                <img src="@/assets/dashicons/wallet-minus.svg" alt=""><p> Withdrawal</p>
            </div>
            
        </div>
        <div class="one2">
            <h3>Settings</h3>
            <div class="one21">
                <img src="@/assets/dashicons/user-edit.svg" alt=""><p> Profile Settings</p>
            </div>
            
        </div>
        
        
        
        <div>
            
        </div>
            

        
        <!-- <div class="grid1">
            <router-link to="/viewstudents" class="dropdown-item" ><span class="two">View Students</span></router-link>
        </div> -->
    
        
        <!-- <hr>
        <div class="grid1">
            <router-link to="/addsession" class="dropdown-item" ><span class="two">Add Session</span></router-link>
        </div>
        <div class="grid1">
            <router-link to="/viewsessions" class="dropdown-item" ><span class="two">View Sessions</span></router-link>
        </div> -->
         
        
    </div>

</template>

<script>
export default {
   
    methods:{
        async logOut() {
            await this.$auth.logout();
            this.$message({
                message: "You Logged out successfully!",
                type: "success",
            });this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Nunito, sans-serif;
}
.one{
    width: 20%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #08293A !important;
    box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
    padding-top: 1rem;
    z-index: 1;
    

}

.one1{
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
    padding: 1rem 1rem;
    background: #044161;
    
}
.one1 h3{
    font-size: 14px;
    color: #FFFFFF;
    font-weight: 600;
    margin-bottom: 0.5rem;
}
.one1 p{
    color: #89AFC2;
    font-weight: 400;
    font-size: 14px;
}
#b{
    margin-bottom: 0.5rem;
}
.one2 h3{
    margin-top: 1rem;
    margin-left: 1rem;
    color: #798998;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}
.one21{
    padding-left:1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    display: grid;
    grid-template-columns: 1fr 3fr;
}
.one21:hover{
    background: #50AC95;
}
.one21 img{
    width: 1rem;
    
}
.one21 p{
    color: #FFFFFF;
    font-weight: 400;
    font-size: 14px;
    margin-top: -2px;
    
}




@media(max-width: 576px){
    .one{
        display: none;
    }
}



@media (min-width: 577px) and (max-width: 768px){
    .one{
   display: none;
    

}
}
</style>