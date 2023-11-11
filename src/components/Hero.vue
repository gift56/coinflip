<template>
  <section
    className="w-full hero relative lg:h-screen flex flex-col items-center justify-center bg-heroBg animate-bganimate bg-no-repeat bg-cover bg-[center_top_-2rem]  overflow-hidden lg:overflow-visible"
  >
    <div
      class="flex flex-col w-full items-center justify-center gap-8 relative z-10 py-6"
    >
      <h1
        v-motion
        :initial="{ opacity: 0, y: -150 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 100,
          },
        }"
        class="text-3xl font-extrabold md:text-6xl lg:text-7xl text-center"
      >
        We make crypto <br class="hidden lg:block" />
        clear and simple
      </h1>
      <p
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{
          opacity: 1,
          y: 0,
          transition: {
            delay: 100,
          },
        }"
        class="lg:max-w-[580px] text-center text-base font-normal text-gray1"
      >
        Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to
        every trader at every level.
      </p>
      <RouterLink to="/">
        <button
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :enter="{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 100,
            },
          }"
          type="button"
          class="w-fit px-6 py-3 rounded-xl bg-btnLinear text-white outline-none text-lg font-semibold"
        >
          Get Started
        </button>
      </RouterLink>
    </div>
    <div
      class="w-[70px] h-[70px] lg:w-[170px] lg:h-[251px] bg-blueBg absolute top-[-13%] left-[9%] rounded-full blur-[30px] lg:blur-[85px]"
    ></div>
    <div
      class="lg:w-[350px] lg:h-[350px] bg-purpleBg absolute bottom-[10%] right-0 rounded-full blur-[85px]"
    ></div>
    <div
      class="w-[70px] h-[70px] lg:w-[240px] lg:h-[240px] bg-lightBlueBg absolute bottom-[10%] right-0 rounded-full blur-[60px] lg:blur-[85px]"
    ></div>
    <div class="w-full mainMan">
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 100,
          },
        }"
        src="../assets/image/heroImage1.png"
        alt="coin"
        class="absolute top-[70%] lg:top-[-2%] left-[2%] lg:left-[5%] w-14 h-14 md:w-32 md:h-32 img"
      />
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 60,
          },
        }"
        src="../assets/image/heroImage2.png"
        alt="ball"
        class="absolute top-[60%] left-[5%] w-28 h-28 hidden lg:block img"
      />
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 90,
          },
        }"
        src="../assets/image/heroImage3.png"
        alt="coin"
        class="absolute top-[95%] left-[20%] w-28 h-28 hidden lg:block img"
      />
      <img
        src="../assets/image/heroImage4.png"
        alt="star"
        class="absolute top-[5%] right-[15%] w-16 h-16 hidden lg:block animate-pulse"
      />
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 100,
          },
        }"
        src="../assets/image/heroImage5.png"
        alt="coin"
        class="absolute top-[26%] right-0 lg:right-[10%] w-14 h-14 md:w-28 md:h-28 img"
      />
      <img
        v-motion
        :initial="{ opacity: 0, scale: 0 }"
        :enter="{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 120,
          },
        }"
        src="../assets/image/heroImage6.png"
        alt="coin"
        class="absolute top-[70%] right-0 lg:right-[13%] w-14 h-14 md:w-28 md:h-28 img"
      />
      <img
        src="../assets/image/heroImage7.png"
        alt="ball"
        class="absolute top-[60%] right-[0%] w-40 h-60 hidden lg:block animate-pulse"
      />
      <img
        src="../assets/image/heroImage8.png"
        alt="star"
        class="absolute top-0 right-[2%] lg:top-[80%] md:right-[30%] w-5 h-5 lg:w-10 lg:h-10 animate-pulse"
      />
      <img
        src="../assets/image/heroImage8.png"
        alt="star"
        class="absolute top-[25%] delay-300 left-[16%] w-10 h-10 hidden lg:block animate-pulse"
      />
      <img
        src="../assets/image/heroImage8.png"
        alt="star"
        class="absolute top-[15%] delay-300 right-[6%] w-8 h-8 hidden lg:block animate-pulse"
      />
    </div>
  </section>
</template>

<script setup></script>
