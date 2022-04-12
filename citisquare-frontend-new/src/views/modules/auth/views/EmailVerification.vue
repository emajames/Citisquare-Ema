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
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0"></ul>
          <a class="nav-link" href="#" style="color: #4f4f4f"
            >Have an account?</a
          >

          <a href="/login"><button class="btn btn__soon">Login</button></a>
        </div>
      </div>
    </nav>
    <section class="form">
      <div class="form2">
        <div class="form4">
          <img src="@/assets/Vector.svg" alt="" />
        </div>

        <div class="form3">
          <img src="@/assets/frame.svg" alt="" />
        </div>
      </div>
      <hr />
      <div class="form1">
        <h2 class="create pb-4 pb-4">Email Verification</h2>
        <p class="verify">
          Please enter the 6-digit verification code that was sent <br />
          to your email.
        </p>
        <!-- <p>Please enter the email associated with your account and we’ll send an email with instructions to reset your password.</p> -->
        <div class="box-wrapper">
          <div class="boxes"></div>

          <div class="boxes"></div>

          <div class="boxes"></div>

          <div class="boxes"></div>

          <div class="boxes"></div>

          <div class="boxes"></div>
        </div>

        <div>
          <button class="create_btn mt-4">Verify Account</button>
        </div>
      </div>

      <div class="text-center">
        <h6>Resend OTP in 00.30</h6>
      </div>
    </section>

    <footer class="container">
      <div class="footer1">
        <p>Citisquare &#169; Copyright 2021 * All rights reserved</p>
      </div>
      <div class="footer2">
        <a href="#">Terms</a> <a href="">Privacy</a> <a href="">Security</a>
        <a href="">Get in touch</a>
      </div>
    </footer>
  </section>
</template>

<script>
export default {};
</script>

<style>
.forgot {
  background: url("../components/password.svg") center center/cover;
  height: 100%;
}
.navbar {
  background: transparent !important;
}
.box-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
}

.boxes {
  padding: 18px;
  height: 52px;
  width: 60px;
  border: solid 0.75px #cad4dd;
  border-radius: 5px;
}
.otp {
  color: #242424;
}

.create_btn {
  border: none;
  background: #4857ec;
  color: #fff;
  width: 100%;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 5px;
  font-weight: 700;
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
.verify {
  color: #8a94a6;
  font-weight: 500;
  font-size: 16px;
}
.create {
  font-size: 30px !important;
  font-weight: 700;
}
.btn__soon {
  color: #4857ec;
  height: 50px;
  width: 100px;
  border-radius: 0px;
  background: #fff;
  font-size: small;
}
footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.footer1 p {
  color: #4f4f4f;
}
.footer2 {
  text-align: right;
}
.footer2 a {
  margin-left: 3rem;
  text-decoration: none;
  color: #2594d9;
}
form,
.footsie {
  padding-left: 15px;
  padding-right: 15px;
}
.form {
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  background: white;
  margin-top: 3rem;
  margin-bottom: 5rem;
  padding: 1rem 0;
}

form input {
  background: #ffffff;
  border: 0.75px solid #cad4dd;
  width: 100%;
  border-radius: 5px;
  padding: 5px 5px;
}
.form1 {
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
}
.form1 h2 {
  color: #242424;
  font-weight: 700;
  font-size: 47px;
  font-family: "Inter", sans-serif;
  margin-top: 1.5rem;
}
.form1 p {
  color: #8a94a6;
  font-size: 16px;
  font-family: "Inter", sans-serif;
}
.form2 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 15px;
  padding-right: 15px;
}

hr {
  border: 1px solid rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  footer {
    display: grid;
    grid-template-columns: 1fr;
  }
  .footer1 {
    text-align: center;
  }
  .footer2 {
    text-align: center;
  }
  .footer2 a {
    margin-left: 1rem;
    text-decoration: none;
    color: #2594d9;
  }
  .form {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background: white;
    margin-top: 3rem;
    margin-bottom: 5rem;
    padding: 1rem 0;
  }
  .forgot {
    background: url("../components/password.svg") center center/cover;
    height: 150vh;
  }
}
</style>
