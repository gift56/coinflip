<template>
  <section class="w-full">
    <div class="container">
      <div class="flex flex-col items-center justify-center gap-8 py-20 w-full">
        <div class="flex flex-col items-center justify-center gap-4 w-full">
          <h3
            class="text-3xl font-extrabold md:text-5xl flex flex-col items-center justify-center text-center"
          >
            <span>Buy and sell with the lowest</span>
            <span>fees in the industry</span>
          </h3>
          <p
            class="text-base text-gray1 font-normal lg:max-w-[580px] text-center"
          >
            Buy and sell 150+ cryptocurrencies with 20+ fiat currencies using
            bank transfers or your credit/debit card.
          </p>
          <RouterLink
            to="/"
            class="flex items-center justify-center gap-1 group text-gray2 text-base font-semibold"
          >
            Learn More
            <img
              src="../assets/icon/arrowIcon.png"
              alt="arrow"
              class="group-hover:ml-3 transition-all duration-300"
            />
          </RouterLink>
        </div>
        <div
          class="flex flex-col items-start justify-start bg-cardDark rounded-3xl transition-all duration-300 w-full"
        >
          <div
            v-for="graphInfo in graphData"
            :key="graphInfo.coinName"
            class="w-full py-3 px-2 border-b border-gray1 last:border-none grid grid-cols-2 lg:flex items-center justify-between"
          >
            <div class="w-full">
              <h4 class="text-lg font-bold text-white">{{ graphInfo.coinName }}</h4>
            </div>
            <div class="w-full"></div>
            <div class="w-full"></div>
            <div class="w-full"></div>
            <div class="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { graphData } from "../data";
</script>
