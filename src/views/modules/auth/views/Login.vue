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

          <button class="btn btn__soon">Login</button>
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
        <h2 class="create pb-4 pb-4">Sign In</h2>
        <!-- <p>Please enter the email associated with your account and we’ll send an email with instructions to reset your password.</p> -->
        <p class="text-danger" v-if="errorMsg">{{ errorMsg }}</p>
      </div>

      <form @submit.prevent="logUserIn">
        <div class="inputContainer">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
          <input
            class="Field"
            type="email"
            placeholder="Your Email"
            v-model="loginDetails.email"
            required
          />
        </div>

        <div class="inputContainer mt-4 mb-4">
          <FontAwesomeIcon :icon="['fas', 'lock']" class="icon" />
          <input
            class="Field"
            type="password"
            placeholder="Password"
            v-model="loginDetails.password"
            required
          />
          <span class="eye">
            <FontAwesomeIcon :icon="['fa-solid', 'fa-eye']" class="icon" />
            <FontAwesomeIcon
              :icon="['fa-solid', 'fa-eye-slash']"
              class="icon"
            />
          </span>
        </div>

        <a
          href="/ForgotPassword"
          class="mt-5"
          style="
            text-decoration: none;
            color: #242424;
            margin-top: 1.5rem !important ;
          "
          >Forgotten Password?</a
        >

        <div class="checkbox d-flex align-items-center mt-4">
          <input type="checkbox" id="cb1" />
          <label for="cb1" class="pr-3 check_text">
            I agree to the Terms & Conditions</label
          >
        </div>

        <div>
          <button class="create_btn mt-4">Sign In</button>
        </div>
      </form>
      <div class="form3">
        <div>
          <a href="/sign-up">
            <button class="sign_btn mt-1">Sign Up As A Customer</button></a
          >
        </div>

        <p
          style="
            text-align: center;
            color: #b0b7c3;
            fontweight: 600;
            margin-top: 1rem;
          "
        >
          Or
        </p>

        <div>
          <button class="google_btn">
            <img class="google_img" src="@/assets/Glogo.png" alt="" />Sign in
            with Google
          </button>
        </div>

        <div>
          <button class="google_btn">
            <img
              class="google_img"
              src="@/assets/facebook-logo.png"
              alt=""
            />Sign in with Facebook
          </button>
        </div>

        <div>
          <button class="google_btn">
            <img
              class="google_img"
              src="@/assets/Apple_logo_black.svg.png"
              alt=""
            />Sign in with Apple
          </button>
        </div>
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
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loginDetails: {},
      errorMsg: null,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("auth", ["auth_token"]),
  },

  methods: {
    ...mapActions("auth", ["login"]),

    async logUserIn() {
      this.errorMsg = null;
      try {
        let res = await this.login(this.loginDetails);
        console.log(res);
        this.makeToast(
          "Login Successful",
          `Welcome, ${res.data.user.first_name}`,
          "success"
        );

        if (res.data.user.is_merchant) {
          this.$router.push("/merchantdashboard/dashboard");
        } else {
          this.$router.push("/userdashboard/dashboard");
        }
      } catch (error) {
        console.log(error.response.data.non_field_errors[0]);
        this.errorMsg = error.response.data.non_field_errors[0];
      }
    },
  },
};
</script>

<style>
.forgot {
  background: url("../components/password.svg") center center/cover;
  height: 100%;
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
  color: #cad4dd;
}

.already_acct {
  font-weight: 700;
  color: #798992;
}
.already_acct a {
  text-decoration: none;
}

.tick {
  padding-left: 5rem !important;
}

.text {
  padding-left: 10px;
  font-size: 16px;
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

.sign_btn {
  border: none;
  width: 100%;
  padding: 8px;
  border: 1px solid #4857ec;
  background: #fff;
  border-radius: 5px;
  font-weight: 700;
  color: #4857ec;
}
.google_btn {
  width: 100%;
  padding: 8px;
  outline: none;
  border: none;
  margin-top: 1rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #4f4f4f;
  align-items: center;
  position: relative;
}
.google_img {
  width: 1rem;
  position: absolute;
  left: 1rem;
  /* padding-right: 10rem !important; */
}
.Field {
  width: 100%;
  padding-left: 2.2rem;
  font-size: 14px;
  font-weight: 500;
  outline: none;
  color: #b0b7c3;
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
form {
  padding-left: 15px;
  padding-right: 15px;
}
.form3 {
  padding-left: 15px;
  padding-right: 15px;
}
.form3 input {
  background: #ffffff;
  border: 0.75px solid #cad4dd;
  width: 100%;
  border-radius: 5px;
  padding: 5px 5px;
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
/* .btn-create {
    background: #2594D9;
    border-radius: 5px;
    width: 100%;
    border: none;
    margin-top: 1rem;
    color: white;
    outline: none;
} */
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
.form3 {
  text-align: center;
  margin-top: 0.1rem;
}
.form4 img {
  width: 1.5rem;
  height: 1.5rem;
}
hr {
  border: 1px solid rgba(0, 0, 0, 0.05);
}

input[type="checkbox"] {
  width: max-content;
  margin: 0px 0.3 rem;
  position: absolute;
}
.check_text {
  position: relative;
  left: 2rem;
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
