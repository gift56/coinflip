<template>
  <section
    className="w-full relative lg:h-[70vh] flex flex-col items-center justify-center"
  >
    <div
      class="flex flex-col w-full items-center justify-center gap-8 relative z-10 py-6"
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
    <div
      class="w-[70px] h-[70px] lg:w-[170px] lg:h-[251px] bg-blueBg absolute top-[-13%] left-[9%] rounded-full blur-[30px] lg:blur-[85px]"
    ></div>
    <div
      class="lg:w-[350px] lg:h-[350px] bg-purpleBg absolute bottom-[10%] right-0 rounded-full blur-[85px]"
    ></div>
    <div
      class="w-[70px] h-[70px] lg:w-[240px] lg:h-[240px] bg-lightBlueBg absolute bottom-[10%] right-0 rounded-full blur-[60px] lg:blur-[85px]"
    ></div>
    <div class="w-full overflow-hidden">
      <img
        src="../assets/image/heroCircle.svg"
        alt="heroImage"
        class="absolute top-[-25%]"
      />
      <img src="../assets/image/heroImage1.png" alt="coin" class="absolute top-[70%] lg:top-[-2%] left-[2%] lg:left-[5%] w-14 h-14 md:w-32 md:h-32" />
      <img src="../assets/image/heroImage2.png" alt="coin" class="absolute top-[60%] left-[5%] w-28 h-28 hidden lg:block" />
    </div>
  </section>
</template>

<script setup></script>
