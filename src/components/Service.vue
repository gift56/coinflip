<template>
  <section class="w-full">
    <div class="container">
      <div
        class="grid md:grid-cols-3 items-start justify-between gap-8 w-full py-20"
      >
        <div
          v-for="(item, index) in cardData"
          :key="index"
          class="flex flex-col items-center justify-center p-5 bg-cardDark rounded-3xl transition-all duration-300 w-full"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
import { cardData } from '../data';

export default {};
</script>
