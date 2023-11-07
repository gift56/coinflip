<template>
  <section class="w-full overflow-hidden lg:overflow-auto">
    <div class="container">
      <div class="w-full flex flex-col items-center justify-center gap-6 py-14">
        <h3
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 100,
            },
          }"
          class="text-3xl font-extrabold md:text-5xl text-center"
        >
          Receive transmissions
        </h3>
        <p
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{
            opacity: 1,
            y: 0,
            transition: {
              delay: 100,
            },
          }"
          class="text-sm md:text-base text-gray1 font-normal"
        >
          Unsubscribe at any time.
          <RouterLink to="/" class="text-white"> Privacy policy↗ </RouterLink>
        </p>
        <div
          v-motion
          :initial="{ opacity: 0, x: -150 }"
          :visible="{
            opacity: 1,
            x: 0,
            transition: {
              delay: 100,
            },
          }"
          class="w-full h-14 md:w-[304px] shadow-inputshad rounded-lg border border-[#18C8FF] flex items-center justify-between bg-bodyBg px-4"
        >
          <input
            type="text"
            placeholder="Email Address"
            class="w-full h-full outline-none text-sm font-normal text-gray1 bg-transparent"
          />
          <img src="../assets/icon/arrowIcon.png" alt="arrow" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
