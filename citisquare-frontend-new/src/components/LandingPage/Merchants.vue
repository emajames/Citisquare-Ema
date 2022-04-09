<template>
  <div class="container">
    <section class="merchant py-5 mx-md-5">
      <div class="merchant1 mb-3 mb-md-0">
        <h2>Become A Merchant</h2>
        <p>
          Merchants on citisquare get to enjoy all benefits that comes with
          marketing on citisquare, we onboard various types of merchants and
          also provide offers.
        </p>
        <ul class="my-5">
          <li>Shortlets</li>
          <li>Property Developers</li>
          <li>Vacation Service Providers</li>
          <li>Spa Service Providers</li>
          <li>Financial Services</li>
        </ul>
        <button>Get Started</button>
      </div>
      <div class="merchant2 d-none d-md-inline">
        <img src="@/assets/merchant.svg" alt="merchant" />
        <h5>XenPeople Ltd</h5>
        <p class="mb-0" style="font-weight: bold">Property Developers</p>
        <p class="text-muted small">250 listed properties</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.merchant {
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 7rem;
  padding: 2rem 0;
}
.merchant1 {
  padding-right: 3rem;
}
.merchant1 h2 {
  font-size: 40px;
  font-weight: 600;
  font-family: "Recoleta";
}
.merchant1 p {
  font-size: medium;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.merchant1 ul {
  margin-left: 1.3rem;
  font-weight: 400;
}
.merchant1 ul li {
  font-weight: 400;
  margin-bottom: 0.5rem;
}
.merchant1 button {
  background: #50ac95;
  padding: 16px 25px;
  border: none;
  margin-top: 1rem;
  color: white;
  font-size: small;
}
.merchant2 {
  text-align: center;
}
.merchant2 img {
  width: 20rem;
}
.merchant2 h5 {
  font-weight: 700;
  font-size: 20px;
}
.merchant2 p {
  font-weight: 400;
  font-size: 14px;
}

@media (max-width: 768px) {
  .merchant {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 10px;
    margin-right: 10px;
    row-gap: 1rem;
    /* text-align: center; */
  }
  .merchant1 h2 {
    font-size: 35px;
    font-weight: 600;
    font-family: "Recoleta";
  }
  .merchant2 img {
    width: 100%;
  }
  .merchant1 ul {
    margin-left: 10px;
    font-weight: 400;
    /* list-style: none; */
    text-align: left;
  }
  .merchant1 {
    padding-right: 0;
  }
}
</style>
