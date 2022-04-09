<template>
    <section class="forgot">
        <nav class="navbar navbar-expand-lg bg-light sticky-top">
    <div class="container">
        <a href="/"><img src="@/assets/images/logo.png" alt="" /></a>
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
          
        </ul>
        <a class="nav-link" href="#" style="color: #4F4F4F;">Have an account?</a>

        <a href="/login"><button class="btn btn__soon">Login</button></a>
      </div>
    </div>
  </nav>
  <section class="form">
      <div class="form2">
          <div class="form4">
              <img src="@/assets/Vector.svg" alt="">
          </div>
          
          <div class="form3">
              <img src="@/assets/frame.svg" alt="">
          </div>
          
      </div>
       <hr>
      <div class="form1">
         
          <h2>Forgot Password </h2>
      <p>Please enter the email associated with your account and we’ll send an email with instructions to reset your password.</p>
      </div>
      
      <form method="post">
          <div class="inputContainer">
              <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
              <input class="Field" type="text" placeholder="Your Email"/>
          </div>
      <button>Send Instructions</button>
      </form>
  </section>
  
  <footer class="container">
      <div class="footer1">
          <p>Citisquare &#169; Copyright 2021 * All rights reserved</p>
      </div>
      <div class="footer2">
          <a href="#">Terms</a> <a href="">Privacy</a> <a href="">Security</a> <a href="">Get in touch</a>
      </div>
      

  </footer>
    </section>
</template>


<style scoped>
    .forgot{
        background: url("../assets/password.svg") center center/cover;
        height: 100vh;
    }
    .navbar {
  background: transparent !important;
}
 .inputContainer {
     display: flex;
     position: relative;
 }
 .icon {
     position: absolute;
     left: 0.7rem;
     top: 0.5rem;
     color: #CAD4DD;  
 }
 .Field {
   width: 100%;
   padding-left: 2.2rem;
   font-size: 14px;
   font-weight: 500;
   outline: none;
   color: #B0B7C3;
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
  color: #798992;
  font-size: small;
  font-weight: 500;
}
.btn__soon {
  color: #4857EC;
  height: 50px;
  width: 100px;
  border-radius: 0px;
  background: #fff;
  font-size: small;
}
footer{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.footer1 p{
    color: #4F4F4F;
}
.footer2{
    text-align: right;
}
.footer2 a{
    margin-left: 3rem;
    text-decoration: none;
    color: #2594D9;
}
form{
    padding-left: 15px;
    padding-right: 15px;
}
.form{
    width: 30rem;
    margin-left: auto;
    margin-right: auto;
    background: white;
    margin-top: 3rem;
    margin-bottom: 5rem;
    padding: 1rem 0;
}
form button{
    background: #2594D9;
    border-radius: 5px;
    padding: 5px;
    width: 100%;
    border: none;
    margin-top: 1.5rem;
    color: white;
    margin-bottom: 12rem;
}
form input{
    background: #FFFFFF;
    border: 0.75px solid #CAD4DD;
    width: 100%;
    border-radius: 5px;
    padding: 5px 5px;
}
.form1{
    text-align: center;
    padding-left: 15px;
    padding-right: 15px;
}
.form1 h2{
    color: #242424;
    font-weight: 700;
    font-size: 47px;
    font-family: 'Inter', sans-serif;
    margin-top: 1.5rem;
}
.form1 p{
    color: #8A94A6;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
}
.form2{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-left: 15px;
    padding-right: 15px;
}
.form3{
    text-align: center;
    margin-top: 0.1rem;
}
.form4 img{
    width: 1.5rem;
    height: 1.5rem;
}
hr{
    border: 1px solid rgba(0, 0, 0, 0.05);
    
}



@media(max-width: 768px){
    footer{
    display: grid;
    grid-template-columns: 1fr;
}
    .footer1{
        text-align: center  ;
    }
    .footer2{
    text-align: center;
}
    .footer2 a{
    margin-left: 1rem;
    text-decoration: none;
    color: #2594D9;
}
    .form{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background: white;
    margin-top: 3rem;
    margin-bottom: 5rem;
    padding: 1rem 0;
}
.forgot{
        background: url("../assets/password.svg") center center/cover;
        height: 150vh;
    }
}
</style>