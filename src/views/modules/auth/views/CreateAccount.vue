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
    <section class="form mt-3">
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
        <h2 class="create pb-4 pb-4">Create An Account</h2>
        <!-- <p>Please enter the email associated with your account and we’ll send an email with instructions to reset your password.</p> -->
      </div>

      <form @submit.prevent="signUp">
        <div>
          <button class="google_btn">
            <img class="google_img" src="@/assets/Glogo.png" alt="" />Sign up
            with Google
          </button>
        </div>

        <div>
          <button class="google_btn">
            <img
              class="google_img"
              src="@/assets/facebook-logo.png"
              alt=""
            />Sign up with Facebook
          </button>
        </div>

        <div>
          <button class="google_btn">
            <img
              class="google_img"
              src="@/assets/Apple_logo_black.svg.png"
              alt=""
            />Sign up with Apple
          </button>
        </div>

        <div style="float: left; width: 44%; padding-top: 1.2rem"><hr /></div>
        <div style="float: right; width: 44%; padding-top: 1.2rem"><hr /></div>
        <div
          class="mb-3"
          style="
            padding-top: 0.5rem;
            color: #b0b7c3;
            fontweight: 600;
            text-align: center;
            paddding-bottom: 1rem;
          "
        >
          OR
        </div>

        <div class="inputContainer mt-5">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
          <input
            class="Field"
            type="text"
            placeholder="First name"
            v-model="signupDetails.first_name"
            requied
          />
          <br />
        </div>
        <p class="text-danger" v-if="errors.first_name">
          {{ errors.first_name[0] }}
        </p>
        <div class="inputContainer mt-4">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
          <input
            class="Field"
            type="text"
            placeholder="Last Name"
            v-model="signupDetails.last_name"
            requied
          />
        </div>
        <p class="text-danger" v-if="errors.last_name">
          {{ errors.last_name[0] }}
        </p>
        <div class="inputContainer mt-4">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
          <input
            class="Field"
            type="email"
            placeholder="Email address"
            v-model="signupDetails.email"
            requied
          />
        </div>
        <p class="text-danger" v-if="errors.email">
          {{ errors.email[0] }}
        </p>
        <div class="inputContainer mt-4">
          <FontAwesomeIcon :icon="['fas', 'envelope']" class="icon" />
          <input
            class="Field"
            type="text"
            placeholder="Username"
            v-model="signupDetails.username"
            requied
          />
        </div>
        <div class="inputContainer mt-4">
          <FontAwesomeIcon :icon="['fas', 'phone']" class="icon" />
          <input
            class="Field"
            type="password"
            placeholder="Password"
            v-model="signupDetails.password"
            requied
          />
        </div>
        <p class="text-danger" v-if="errors.password">
          {{ errors.password[0] }}
        </p>
        <div class="inputContainer mt-4">
          <FontAwesomeIcon :icon="['fas', 'phone']" class="icon" />
          <input
            class="Field"
            type="password"
            placeholder="Confirm Password"
            v-model="signupDetails.re_password"
            requied
          />
        </div>
        <p class="text-danger" v-if="errors.re_password">
          {{ errors.re_password[0] }}
        </p>
        <div class="inputContainer mt-4">
          <FontAwesomeIcon :icon="['fas', 'phone']" class="icon" />
          <input
            class="Field"
            type="number"
            placeholder="Phone"
            v-model="signupDetails.phone_number"
            requied
          />
        </div>
        <!-- <div class="inputContainer mt-4">
               <FontAwesomeIcon :icon="['fas', 'phone']" class="icon"/>
               <input class="Field" type="text" placeholder="Select merchant category"/>
          </div> -->

        <!-- <div class="inputContainer mt-4">
          <FontAwesomeIcon :icon="['fas', 'lock']" class="icon" />
          <input class="Field" type="text" placeholder="Password" />
          <span class="eye">
            <FontAwesomeIcon :icon="['fa-solid', 'fa-eye']" class="icon" />
            <FontAwesomeIcon
              :icon="['fa-solid', 'fa-eye-slash']"
              class="icon"
            />
          </span>
        </div> -->

        <div class="checkbox d-flex align-items-center mt-4">
          <input type="checkbox" id="cb1" />
          <label for="cb1" class="pr-3 check_text">
            I agree to the Terms & Conditions</label
          >
        </div>

        <div>
          <button class="create_btn mt-4">Create Account</button>
        </div>
      </form>
      <div class="footsie">
        <a href="/signup-merchant"
          ><button class="sign_btn mt-1">Sign Up As A Merchant</button></a
        >
      </div>

      <h6 class="text-center already_acct pt-3">
        Already have an account? <a href="/login">Login</a>
      </h6>
    </section>

    <footer class="container">
      <div class="footer1">
        <p>Citisquare &#169; Copyright 2021 * All rights reserved</p>
      </div>
      <div class="footer2">
        <a href="#">Terms</a> <a href="">Privacy</a> <a href="">Security</a>
        <a href="">Get in touch </a>
      </div>
    </footer>
  </section>
  {{ errors }}
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      signupDetails: {},
      errors: "",
    };
  },

  computed: {
    ...mapState("auth", ["test"]),
  },

  methods: {
    ...mapActions("auth", ["login"]),
    ...mapActions("auth", ["signUpUser"]),
    async signUp() {
      try {
        let res = await this.signUpUser(this.signupDetails);
        console.log(res);
        this.signupDetails = {};
        this.errors = "";
        this.makeToast(
          "Sign up Successful",
          `Welcome, ${res.data.last_name}`,
          "success"
        );
      } catch (error) {
        console.log(error.response);
        this.errors = error.response.data;
      }
    },
  },
  created() {},
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
  margin-top: 0.5rem;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #4f4f4f;
  align-items: center;
  position: relative;
  background: #fafbfc;
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
.form {
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  background: white;
  margin-top: 3rem;
  margin-bottom: 5rem;
  padding: 1rem 0;
}
.footsie {
  padding-left: 15px;
  padding-right: 15px;
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
.hr-text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  opacity: 0.5;
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
