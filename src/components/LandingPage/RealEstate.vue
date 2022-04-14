<template>
  <section class="realEstate py-5">
    <div class="container">
      <div class="invest">
        <div class="invest1">
          <h2>Real Estate Investments</h2>
          <p>
            Put your money to work by investing in our real estates, <br />
            you can also purchase properties.
          </p>
        </div>
        <div class="invest2"></div>
      </div>
      <div class="container my-5 realEstate">
        <Carousel :itemsToShow="itemsShow" :wrapAround="true">
          <Slide
            v-for="slide in carouselItem"
            :key="slide"
            class="bg-white flex-column p-3"
          >
            <img
              src="@/assets/carousel/1.png"
              alt="@/assets/carousel/1.png"
              style="height: 100%; width: 100%"
              class="mt-3"
            />
            <!-- <img
              :src="`@/assets/carousel/${slide.img}.png`"
              alt="@/assets/carousel/1.png"
              style="height: 100%; width: 100%"
            /> -->
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
              class="w-100 mb-0 text-start justify-content-between py-2 px-2"
              style="background-color: white; border: none"
            >
              <span class="state">{{ slide.location }}</span>
              <h5 class="mb-0 location">{{ slide.title }}</h5>
              <p class="mb-0 small mt-2">
                {{ slide.realEstates }}
              </p>
            </div>
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

const itemsShow = ref(4);

const showNavigation = ref(null);

const carouselItem = ref([
  {
    img: "1",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    realEstates:
      "Located in akwa ibom dakkada estates has friendly environments that attracts investors, also has good ROI values.",
  },
  {
    img: "2",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    realEstates:
      "Located in akwa ibom dakkada estates has friendly environments that attracts investors, also has good ROI values.",
  },
  {
    img: "3",
    title: "Obudu Cattle Ranch",
    location: "Calabar, Nigeria",
    realEstates:
      "6Located in akwa ibom dakkada estates has friendly environments that attracts investors, also has good ROI values.",
  },
  {
    img: "4",
    title: "Bonny Island",
    location: "Enugu, Nigeria",
    realEstates: "9m realEstates",
  },
  {
    img: "5",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    realEstates:
      "Located in akwa ibom dakkada estates has friendly environments that attracts investors, also has good ROI values.",
  },
  {
    img: "3",
    title: "Ibom Golf Resort",
    location: "Uyo, Nigeria",
    realEstates:
      "Located in akwa ibom dakkada estates has friendly environments that attracts investors, also has good ROI values.",
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
.realEstate {
  /* width: 81.5%; */
}
.realEstate .carousel__prev--in-active,
.realEstate .carousel__next--in-active {
  display: none;
}
.realEstate .carousel__track {
  gap: 0.5rem;
}
.realEstate .carousel__slide {
  /* height: 300px; */
  /* background-size: 100% 100%; */
  width: 300px !important;
  justify-content: flex-end;
}
.realEstate .carousel__prev,
.realEstate .carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.realEstate .carousel__next {
  right: 0%;
  background: #fff;
  box-shadow: 7px 3px 10px rgba(0, 0, 0, 0.1);
}
.realEstate .carousel__prev {
  left: 0rem;
  background: #fff;
}
.realEstate svg {
  fill: #292d32 !important;
}
.realEstate {
  background: #50a791;
  background: #50ac95;
  padding: 2rem 0;
}

.realEstate .state {
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: #08293a;
}
.realEstate .location {
  font-family: "Recoleta Alt";
  font-style: normal;
  font-weight: 500;
  font-size: larger;
  line-height: 32px;
  color: #08293a;
}
.invest {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.invest1 {
  color: white;
  /* padding-left: 9.5rem; */
}

@media (max-width: 768px) {
  .realEstate {
    width: 100%;
  }
  .realEstate .carousel__slide {
    /* height: 350px; */
    width: 100% !important;

    background-size: 100% 100%;
  }
  .realEstate .carousel__item {
    width: 100%;
  }
  .realEstate .carousel__prev,
  .realEstate .carousel__next {
    display: none;
  }
  .realEstate .carousel__track {
    gap: 0rem;
  }
  .invest {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
  }
  .invest1 {
    color: white;
    padding-left: 10px;
  }
}
</style>

<style scoped>
h5 {
  font-weight: 700;
  color: #000000;
}
</style>
