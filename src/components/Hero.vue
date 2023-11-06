<template>
  <section
    className="w-full relative h-screen flex flex-col items-center justify-center"
  >
    <div
      class="flex flex-col w-full items-center justify-center gap-8 relative"
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
          class="w-fit px-4 py-1 rounded-xl bg-btnLinear text-white outline-none text-lg font-semibold"
        >
          Get Started
        </button>
      </RouterLink>
    </div>
  </section>
</template>

<script>
export default {};
</script>
