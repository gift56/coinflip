<template>
  <section class="w-full">
    <div class="container relative z-10">
      <div
        class="grid md:grid-cols-3 items-start justify-between gap-8 w-full py-20"
      >
        <div
          v-for="(item, index) in cardData"
          :key="index"
          v-motion
          :initial="{ opacity: 0, scale: 0 }"
          :visible="{
            opacity: 1,
            scale: 1,
            transition: {
              delay: 150,
            },
          }"
          class="flex flex-col gap-6 items-center justify-center py-5 px-3 bg-cardDark rounded-3xl transition-all duration-300 w-full"
        >
          <img
            :src="item.icon"
            :alt="item.title"
            :srcset="item.icon"
            class="w-12 h-12 md:w-20 md:h-20 rounded-full object-contain"
          />
          <h3 class="text-2xl font-bold md:text-3xl text-center">
            {{ item.title }}
          </h3>
          <p class="text-center text-gray1 text-base font-normal">
            {{ item.desc }}
          </p>
          <RouterLink
            to="/"
            class="flex items-center justify-center gap-1 group text-gray2 text-base font-semibold"
          >
            {{ item.linkText }}
            <img
              src="../assets/icon/arrowIcon.png"
              alt="arrow"
              class="group-hover:ml-3 transition-all duration-300"
            />
          </RouterLink>
        </div>
      </div>
      <img
        src="../assets/image/heroImage8.png"
        alt="star"
        class="absolute bottom-0 md:bottom-[10%] delay-300 left-[-5%] w-8 h-8 block animate-pulse"
      />
    </div>
  </section>
</template>

<script setup>
import { cardData } from "../data";
</script>
