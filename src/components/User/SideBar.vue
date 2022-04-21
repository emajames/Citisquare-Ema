<template>
    <div class="one">
        <div></div>
        <div class="one1">
            
            
       
        </div>
         <div class="grid1">
            <router-link to="/signals" class="dropdown-item rout link" >
            <img src="/img/logo/chart.png" alt="" srcset="" class="icon">
            <span class="two"> Signals</span></router-link>
        </div>
         <div class="grid1">
            <router-link to="/resources" class="dropdown-item rout link" >
            <img src="/img/logo/book.png" alt="" srcset="" class="icon">
            <span class="two"> Resources</span></router-link>
        </div>
        <div class="grid1">
            <nuxt-link to="brokers" class="dropdown-item link rout" >
            <img src="/img/logo/case.png" alt="" srcset="" class="icon">
            <span class="two">Management</span></nuxt-link>
        </div>
        <div class="grid1">
            <nuxt-link to="accounts" class="dropdown-item link rout" >
            <img src="/img/logo/case.png" alt="" srcset="" class="icon">
            <span class="two">Managed Accounts</span></nuxt-link>
        </div>
        <div class="grid1">
            <router-link to="/transactions" class="dropdown-item rout link" >
            <img src="/img/logo/card.png" alt="" srcset="" class="icon">
            <span class="two"> Transactions</span></router-link>
        </div>
        <div class="grid1">
            <router-link to="/settings" class="dropdown-item rout link" >
            <img src="/img/logo/settings.png" alt="" srcset="" class="icon">
            <span class="two"> Settings</span></router-link>
        </div>
        <div class="grid1" @click="logOut">
            <div class="dropdown-item rout link">
                <img src="/img/icon/logout.svg" alt="" srcset="" class="icon">
            <span class="two"> Log Out</span>
            </div>
            
        </div>
        <!-- <div class="grid1">
            <router-link to="/addstudent" class="dropdown-item link" >
            <font-awesome-icon class="icon" :icon="['fas', 'headset']" />
            <span class="two"> Support</span></router-link>
        </div> -->
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
}

.icon{
    width: 20px;

}
.icons{
    font-size: 15px;
    
    margin-left: 10px;
}

.one{
    width: 20%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #FFFFFF;
    box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
    padding-top: 5.15rem;
    z-index: 1;
    

}
.two{
    font-size: 20px;
    color: #334D6E;
    padding: 7px 5px;
    font-weight:normal;
}





.one1{
    margin-left: 10px;
    margin-right: 10px;
    text-align: left;
    padding-top: 20px;
}
.one1 img{
    margin-bottom: 30px;
    padding-top: 20px;
}
.grid1{
    text-align: left;
    margin-left: 15px;
    margin-right: 10px;
    grid-gap: 0rem;
    margin-bottom: 30px;
    cursor: pointer;
    
}
.rout{
    padding: 10px 5px;
}

.grid1 img{
    margin-right: 20px;
}
.grid1 p{
    font-size: 20px;
    color: #334D6E;

}
.three{
    padding-left: 2rem;
}
.three p{
    font-size: 17px;
    color: #334D6E;
    
}
.iconz{
    font-size: 15px;
    margin-right: 5px;
    
}
hr{
    background: #EBEFF2 !important;
    margin-bottom: 30px;
    
}
p.hover{
    text-decoration: none;
}
.btn1{
    outline: none;
}
.dropdown{
    text-align: left !important;
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