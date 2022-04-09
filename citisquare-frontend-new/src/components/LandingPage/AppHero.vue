<template>
  <div class="container-fluid hero px-0">
    <Carousel class="px-0">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <div class="p-3 carousel_card">
            <p class="carousel_card-small mb-0">VACATION CHOICES</p>
            <h5 class="carousel_card-bold my-2">Maldives</h5>
            <p class="text-muted carousel_card-small mb-0">33k Campers</p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<style>
.hero .carousel__item {
  position: relative;
  min-height: 200px;
  width: 100%;
  height: 600px;
  background-image: url("../../assets/images/hero_one.png");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.hero .carousel_card {
  position: absolute;
  bottom: 5rem;
  left: 10rem;
  width: 200px;
  background-color: #fff;
  text-align: left;
}

.hero .carousel_card-small {
  font-size: small;
}
.hero .carousel_card-bold {
  font-weight: 700;
}

.hero .carousel__slide {
  padding: 0px;
}

.hero .carousel__prev,
.hero .carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.hero .carousel__next {
  right: 10%;
  background: #fff;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.hero .carousel__prev {
  left: 7rem;
  background: #fff;
}
.hero svg {
  fill: #292d32 !important;
}

@media (max-width: 768px) {
  .hero .carousel__item {
    width: 100%;
  }
  .hero .carousel__prev,
  .hero .carousel__next {
    display: none;
  }

  .hero .carousel_card {
    left: 1rem;
  }
}
</style>
