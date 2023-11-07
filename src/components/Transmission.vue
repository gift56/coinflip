<template>
  <section class="w-full">
    <div class="container">
      <div class="w-full flex flex-col items-center justify-center gap-6">
        <h3 class="text-3xl font-extrabold md:text-5xl text-center">
          Receive transmissions
        </h3>
        <p class="text-base text-gray1 font-normal">
          Unsubscribe at any time.
          <RouterLink to="/" class="text-white"> Privacy policy↗ </RouterLink>
        </p>
        <div
          class="w-full h-14 md:w-[304px] shadow-inputshad rounded-lg border border-[#18C8FF] flex items-center justify-between"
        >
          <input type="text" />
          <img
            src="../assets/icon/arrowIcon.png"
            alt="arrow"
            class="group-hover:ml-3 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
