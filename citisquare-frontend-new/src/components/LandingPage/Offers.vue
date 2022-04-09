<template>
  <section class="realEstate py-5">
    <div class="container">
      <div class="invest">
        <div class="invest1">
          <h2>Great Offers Just For You</h2>
          <p>
            You dont have to break the bank to buy what you need, we have made
            available several offers to make sure you save on purchases.
          </p>
        </div>
        <div class="invest2"></div>
      </div>
      <div class="my-5 offers">
        <Carousel :itemsToShow="itemsShow" :wrapAround="true">
          <Slide
            v-for="slide in carouselItem"
            :key="slide"
            :style="{
              backgroundImage:
                'url(' +
                require('@/assets/images/offers/' + slide.img + '.png') +
                ')',
            }"
            class="flex-column slide__bg"
          >
            <!-- <div
          class="carousel__item bg-light p-3"
          style="
            position: absolute;
            bottom: -2rem;
            z-index: 2;
            width: 100%;
            height: 100px;
          "
        >
          {{ slide }}
        </div> -->

            <div
              class="slide_text pl-3 text-white w-100 mb-0 text-start justify-content-between py-2 px-2"
            >
              <h5 class="mb-0 text-white small">{{ slide.title }}</h5>
              <p class="mb-0 small mt-2">
                {{ slide.location }}
                <span class="mx-2 small text-white">
                  &#9733; &#9733; &#9733; &#9733;</span
                >
              </p>
            </div>
            <p class="offer-off">{{ slide.offerss }}</p>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

const innerW = ref(window.innerWidth);

const itemsShow = ref(5);

const showNavigation = ref(null);

const carouselItem = ref([
  {
    img: "1",
    title: "Fenty Spa",
    location: "Lagos, Nigeria",
    offerss: "30% off",
  },
  {
    img: "3",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    offerss: "30% off",
  },
  {
    img: "2",
    title: "Obudu Cattle Ranch",
    location: "Calabar, Nigeria",
    offerss: "30% off",
  },
  {
    img: "1",
    title: "Bonny Island",
    location: "Enugu, Nigeria",
    offerss: "30% off",
  },
  {
    img: "3",
    title: "Studio Apartment",
    location: "Abuja,Nigeria",
    offerss: "30% off",
  },
  {
    img: "2",
    title: "Summer in Seychelles",
    location: "Seychelles",
    offerss: "30% off",
  },
]);

onMounted(() => {
  if (innerW.value < 768) {
    itemsShow.value = 1;
    showNavigation.value = false;
  } else {
    itemsShow.value = 4.98;
    showNavigation.value = true;
  }
});
</script>

<style>
.offers {
  /* width: 81.5%; */
}

.offers .carousel__prev--in-active,
.offers .carousel__next--in-active {
  display: none;
}
.offers .carousel__track {
  gap: 1rem;
}
.offers .carousel__slide {
  height: 300px;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.116);
  width: 300px !important;
  position: relative;
  justify-content: flex-end;
}
.offers .carousel__prev,
.offers .carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.offers .carousel__next {
  right: 0%;
  background: #fff;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.offers .carousel__prev {
  left: 0rem;
  background: #fff;
}
.offers svg {
  fill: #292d32 !important;
}

.offers .slide_text h5 {
  font-family: "Recoleta" !important;
  font-weight: lighter;
  font-size: medium;
}
.offers .slide_text p {
  font-family: "Recoleta" !important;
  font-weight: lighter;
  font-size: small;
}
.realEstate {
  background: #f1fefb !important;
  padding: 2rem 0;
}
.invest {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.invest1 {
  color: black;
  /* padding-left: 9.5rem; */
}
.invest h2 {
  font-weight: 700;
  font-family: "Recoleta";
}

.offers .offer-off {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(41, 121, 92, 0.363);
  border: 1px solid #ffffff;
  color: #fff;
  box-sizing: border-box;
  border-radius: 50px;
  font-size: xx-small;
  margin-bottom: 0px;
  padding: 0.5rem 0.9rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .offers {
    width: 100%;
  }
  .offers .carousel__slide {
    height: 350px;
    width: 100% !important;

    background-size: 100% 100%;
  }
  .offers .carousel__item {
    width: 100%;
  }
  .offers .carousel__prev,
  .offers .carousel__next {
    display: none;
  }
  .offers .carousel__track {
    gap: 0rem;
  }
  .invest {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
  .invest1 {
    color: black;
    /* padding-left: 10px; */
  }
}
</style>

<style scoped>
h5 {
  font-weight: 700;
  color: #000000;
}
</style>
