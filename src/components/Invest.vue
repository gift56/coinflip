<template>
  <section class="w-full relative">
    <div class="container relative z-10">
      <div class="flex flex-col w-full items-center justify-center gap-8 py-20">
        <h1 class="text-2xl font-extrabold md:text-5xl text-center">
          A crypto investment <br class="hidden lg:block" />
          platform that invests in you
        </h1>
        <p
          class="lg:max-w-[580px] text-center text-base font-normal text-gray1"
        >
          We invest more resources than any other platrom in making sure great
          support from real people is a click away, whenever you need it.
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
    </div>
    <img
      src="../assets/image/heroImage4.png"
      alt="star"
      class="absolute top-[0%] left-[6%] w-10 h-10 hidden lg:block animate-pulse"
    />
    <img src="../assets/image/looper.svg" alt="looper" class="absolute right-0 top-0 h-[760px]" />
  </section>
</template>

<script></script>
