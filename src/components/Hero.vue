<template>
  <section
    className="w-full relative lg:h-[70vh] flex flex-col items-center justify-center"
  >
    <div
      class="flex flex-col w-full items-center justify-center gap-8"
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
      class="w-[170px] h-[251px] bg-blueBg absolute top-[-13%] left-[9%] rounded-full blur-[85px]"
    ></div>
    <div
      class="w-[350px] h-[350px] bg-purpleBg absolute bottom-[10%] right-0 rounded-full blur-[85px]"
    ></div>
    <div
      class="w-[240px] h-[240px] bg-lightBlueBg absolute bottom-[10%] right-0 rounded-full blur-[85px]"
    >
  </div>
  </section>
</template>

<script setup></script>
