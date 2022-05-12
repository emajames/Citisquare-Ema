<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top">
    <div class="container">
      <img src="@/assets/images/logo.png" alt="" />
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-">
          <img src="@/assets/icons/menu.png" alt=""
        /></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <h3>Dashboard</h3>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/home-2.svg" alt=""><a class="nav-link active" aria-current="page" href="/merchantdashboard/dashboard"
              >Home</a
            >
          </li>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/shield-tick.svg" alt=""><a class="nav-link active" aria-current="page" href="/merchantdashboard/kycbusiness"
              >Complete KYC</a
            >
          </li>
          <h3>PRODUCTS</h3>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/receipt-add.svg" alt=""><a class="nav-link" href="/merchantdashboard/productdetail">Add Products</a>
          </li>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/receipt-edit.svg" alt=""><a class="nav-link" href="#">Manage Products</a>
          </li>
          
          <h3>WALLETS</h3>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/wallet-add.svg" alt=""><a class="nav-link" href="#">Fund Wallet</a>
          </li>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/arrow-3.svg" alt=""><a class="nav-link" href="#">Transactions</a>
          </li>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/wallet-minus.svg" alt=""><a class="nav-link" href="#">Withdrawal</a>
          </li>

          <h3>SETTINGS</h3>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/user-edit.svg" alt=""><a class="nav-link" href="#">Profile Settings</a>
          </li>
          <li class="nav-item mx-md-3">
            <img src="@/assets/dashicons/user-edit.svg" alt=""><a class="nav-link" href="#">Logout</a>
          </li>


         
        </ul>
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  
  font-family: Nunito, sans-serif;
}
.navbar-brand {
  font-weight: bold;
  font-size: medium;
  margin-left: 1rem;
}
.navbar-light .navbar-toggler {
  border: none;
}
.navbar-light .navbar-toggler:focus {
  box-shadow: none;
  border: none;
}

.nav-link {
  color: #89AFC2;
  font-size: small;
  font-weight: 500;
}
.btn__soon {
  background: #50ac95;
  height: 50px;
  width: 100px;
  border-radius: 0px;
  color: #fff;
  font-size: small;
}
img{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.navbar{
    background: #08293A !important;
    width: 100%;
    
}
ul{
    padding-top: 1rem;
    padding-bottom: 1rem;
}
ul h3{
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
}
ul img{
    margin-right: 1rem;
}
li{
    display: flex;
}
li:hover{
  background: #50AC95;
}
</style>
