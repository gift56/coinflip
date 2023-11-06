<template>
  <section
    className="w-full relative h-screen flex flex-col items-center justify-center"
  >
    <div
      class="flex flex-col w-full items-center justify-center gap-8 relative z-10"
    >
      <h1 class="text-3xl font-extrabold md:text-6xl lg:text-7xl text-center">
        We make crypto <br class="hidden lg:block" />
        clear and simple
      </h1>
      <p class="lg:max-w-[580px] text-center text-base font-normal text-gray1">
        Buy, sell, and grow your crypto with CoinFlip, the platform dedicated to
        every trader at every level.
      </p>
      <RouterLink to="/">
        <button
          type="button"
          class="w-fit px-6 py-3 rounded-xl bg-btnLinear text-white outline-none text-lg font-semibold"
        >
          Get Started
        </button>
      </RouterLink>
    </div>
    <div class="w-full absolute h-full top-0">
      <div class="relative w-full h-full">
        <div
          class="w-[170px] h-[251px] bg-blueBg absolute top-[-13%] left-[9%] rounded-full blur-[85px]"
        ></div>
        <div class="w-full h-full relative overflow-hidden">
          <img
            src="../assets/image/circle1.png"
            alt="image"
            class="absolute w-[80%] h-[500px] object-cover top-[8%] rotate-[9deg]"
          />
          <img
            src="../assets/image/circle2.png"
            alt="image"
            class="absolute w-[2000px] h-[700px] object-cover left-[5%] top-[3%] rotate-[9deg]"
          />
          <img
            src="../assets/image/circle3.png"
            alt="image"
            class="absolute w-[2000px] h-[1000px] object-cover top-[-25%] rotate-[3deg]"
          />
          <img
            src="../assets/image/circle3.png"
            alt="image"
            class="absolute w-[4000px] h-[1000px] object-cover top-[-45%] rotate-[3deg]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
