<template>
  <section class="w-full overflow-hidden lg:overflow-visible">
    <div class="container">
      <div
        class="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between gap-8 relative py-20"
      >
        <div class="w-full lg:flex-1 relative">
          <div
            class="w-[100px] h-[100px] md:w-[350px] md:h-[350px] bg-orangeBg rounded-full absolute top-0 left-0 md:left-[-20%] md:top-[-15%] blur-[50px] md:blur-[80px]"
          ></div>
          <img
            v-motion
            :initial="{ opacity: 0, x: -150 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: {
                delay: 100,
              },
            }"
            src="../assets/image/shieldImage.png"
            alt="shieldImage"
            class="relative"
          />
        </div>
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
            24/7 access to full service customer support
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
            We invest more resources than any other platform in making sure
            great support from real people is a click away, whenever you need
            it.
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
            class="text-lg font-semibold border w-fit px-4 py-2 rounded-xl"
            >Get Started</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
