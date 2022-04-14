<template>
  <section class="partners container py-5">
    <h3 class="mb-5">OUR PARTNERS</h3>
    <div class="d-flex partners_container">
      <img src="@/assets/a.svg" alt="" /> <img src="@/assets/b.svg" alt="" />
      <img src="@/assets/c.svg" alt="" /> <img src="@/assets/d.svg" alt="" />
      <img src="@/assets/e.svg" alt="" /> <img src="@/assets/f.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.partners {
  font-family: "Nunito Sans", sans-serif;
}
.partners h3 {
  color: #50ac95;
  font-size: larger;
  font-weight: 800;
}

.partners_container {
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}
.partners_container img {
  /* width: 150px; */
}

@media (max-width: 768px) {
  .partners_container img {
    width: 100px;
  }
}
</style>
