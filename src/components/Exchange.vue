<template>
  <section class="w-full relative">
    <div class="container relative z-10">
      <div class="flex flex-col items-center justify-center gap-8 py-20 w-full">
        <div class="flex flex-col items-center justify-center gap-4 w-full">
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
            class="text-3xl font-extrabold md:text-5xl lg:flex lg:flex-col items-center justify-center text-center"
          >
            <span>Buy and sell with the lowest</span>
            <span>fees in the industry</span>
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
          class="flex flex-col px-3 items-start justify-start bg-cardDark rounded-3xl transition-all duration-300 w-full overflow-hidden"
        >
          <div
            v-for="(graphInfo, index) in graphData"
            :key="graphInfo.coinName"
            v-motion
            :initial="{ opacity: 0, x: -150 }"
            :visible="{
              opacity: 1,
              x: 0,
              transition: {
                delay: 100 * index,
              },
            }"
            class="w-full py-3 px-2 border-b border-[#2B2C3B] last:border-none grid gap-4 lg:gap-0 grid-cols-2 lg:flex items-center justify-between"
          >
            <div class="w-full">
              <h4 class="text-lg font-bold md:text-xl text-white">
                {{ graphInfo.coinName }}
              </h4>
            </div>
            <div class="w-full flex items-start justify-start">
              <h5 class="text-lg font-bold md:text-xl text-gray2">
                {{ graphInfo.prefix }}
              </h5>
            </div>
            <div class="w-full flex lg:items-end lg:justify-end">
              <h5 class="text-lg font-bold md:text-xl text-white">
                {{ graphInfo.rate }}
              </h5>
            </div>
            <div class="w-full flex lg:items-end lg:justify-end">
              <h6
                class="text-lg font-bold md:text-xl"
                :class="
                  { 'text-[#0DBB7C]': graphInfo.status === 'good' } || {
                    'text-[#FF8282]': graphInfo.status === 'bad',
                  }
                "
              >
                {{ graphInfo.percentage }}
              </h6>
            </div>
            <div
              class="w-full flex lg:items-center lg:justify-center pr-4 lg:pr-0 lg:pl-4"
            >
              <img
                :src="graphInfo.graphImage"
                :alt="graphInfo.coinName"
                class="w-full object-contain"
              />
            </div>
            <div class="w-full">
              <RouterLink
                to="/"
                class="flex items-center justify-center gap-1 group text-white text-base font-semibold"
              >
                Trade Now
                <img
                  src="../assets/icon/arrowIcon.png"
                  alt="arrow"
                  class="group-hover:ml-3 transition-all duration-300"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[150px] h-[150px] md:w-[300px] md:h-[300px] bg-blueLinearBg rounded-full absolute top-[-10%] lg:top-0 right-0 blur-[80px]"
    ></div>
  </section>
</template>

<script setup>
import { graphData } from "@/data";
</script>
