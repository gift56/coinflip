<template>
  <section class="w-full">
    <div class="container">
      <div
        class="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between gap-8 relative py-20"
      >
        <div
          class="w-full lg:flex-1 flex flex-col items-start justify-start gap-6"
        >
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
            class="text-3xl font-extrabold md:text-5xl"
          >
            Take your first step into safe, secure crypto investing
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
            class="text-base text-gray1 font-normal"
          >
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast.
          </p>
          <RouterLink
            to="/"
            v-motion
            :initial="{ opacity: 0, scale: 0 }"
            :visible="{
              opacity: 1,
              scale: 1,
              transition: {
                delay: 100,
              },
            }"
            class="w-fit px-6 py-3 rounded-xl bg-btnLinear text-white outline-none text-lg font-semibold"
            >Get Started</RouterLink
          >
        </div>
        <div
          class="w-full lg:flex-1 flex items-center justify-center relative"
        >
          <img
            v-motion
            :initial="{ opacity: 0, x: 150 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: {
                delay: 100,
              },
            }"
            src="../assets/image/caseImage.png"
            alt="shieldImage"
            class="relative z-20"
          />
          <div
            class="w-[90px] h-[90px] lg:w-[300px] lg:h-[300px] bg-lightBlueBg absolute bottom-[10%] right-0 rounded-full z-10 blur-[50px]"
          ></div>
          <div
            class="w-[90px] h-[90px] lg:w-[350px] lg:h-[350px] bg-purpleBg absolute bottom-[10%] right-0 rounded-full blur-[50px]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
