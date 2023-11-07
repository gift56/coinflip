<template>
  <section class="w-full">
    <div class="container">
      <div
        class="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between gap-8 relative py-20"
      >
        <div
          class="w-full lg:flex-1 flex flex-col items-start justify-start gap-6"
        >
          <h3 class="text-3xl font-extrabold md:text-5xl">
            Take your first step into safe, secure crypto investing
          </h3>
          <p class="text-base text-gray1 font-normal">
            Separated they live in Bookmarks right at the coast of the famous
            Semantics, large language ocean Separated they live in Bookmarks
            right at the coast.
          </p>
          <RouterLink
            to="/"
            class="w-fit px-6 py-3 rounded-xl bg-btnLinear text-white outline-none text-lg font-semibold"
            >Get Started</RouterLink
          >
        </div>
        <div class="w-full lg:flex-1 flex items-center justify-center relative">
          <img
            src="../assets/image/caseImage.png"
            alt="shieldImage"
            class="relative z-20"
          />
          <div
            class="w-[70px] h-[70px] lg:w-[350px] lg:h-[350px] bg-lightBlueBg absolute bottom-[10%] right-0 rounded-full z-10 blur-[50px]"
          ></div>
          <div
            class="w-[70px] h-[70px] lg:w-[350px] lg:h-[350px] bg-purpleBg absolute bottom-[10%] right-0 rounded-full blur-[50px]"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
