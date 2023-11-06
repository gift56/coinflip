<template>
  <section
    className="w-full relative h-screen flex flex-col items-center justify-center overflow-hidden"
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
        <img src="../assets/image/heroCircle.svg" alt="circle" class="w-full h-full object-cover" />
        <img src="../assets/image/heroImage1.png" alt="image" class="absolute top-[2%] left-[5%]">
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
