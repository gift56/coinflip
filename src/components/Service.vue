<template>
  <section class="w-full">
    <div class="container">
      <div
        class="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between gap-8 relative py-20"
      >
        <div class="w-full lg:flex-1 relative">
          <img src="../assets/image/shieldImage.png" alt="shieldImage" class="relative" />
        </div>
        <div class="w-full lg:flex-1 flex flex-col items-start justify-start gap-6">
          <h3 class="text-3xl font-extrabold md:text-5xl">
            24/7 access to full service customer support
          </h3>
          <p class="text-base text-gray1 font-normal">
            We invest more resources than any other platform in making sure
            great support from real people is a click away, whenever you need
            it.
          </p>
          <RouterLink
            to="/"
            class="text-lg font-semibold border w-fit px-4 py-2 rounded-xl"
            >Get Started</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
