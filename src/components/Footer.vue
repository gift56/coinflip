<template>
  <footer class="w-full border-t border-[#2B2C3B] relative overflow-hidden">
    <div class="container relative z-10">
      <div
        class="w-full py-20 flex flex-col items-start justify-between md:flex-row gap-8"
      >
        <div class="w-full flex flex-col items-start justify-start gap-6">
          <RouterLink to="/">
            <img src="@/assets/image/logo.svg" alt="logo" />
          </RouterLink>
          <p class="text-sm font-normal text-white max-w-[400px]">
            CoinFlip, the world’s leading bitcoin ATM operator, makes it so
            flippin’ easy to buy and sell bitcoin via cash, card, or bank
            transfer. Sign up to get the latest in CoinFlip news, discounts, and
            more.
          </p>
          <p class="text-sm font-normal text-gray1">
            © 2021 GPD Holdings, LLC FinCEN MSB
          </p>
        </div>
        <div class="w-full flex flex-col gap-6 lg:flex-row items-start">
          <div class="w-full flex flex-col items-start justify-start gap-6">
            <h3 class="text-sm font-bold text-white">Company</h3>
            <ul class="w-full flex flex-col items-start justify-start gap-4">
              <li
                v-for="(text, index) in links"
                :key="index"
                class="cursor-pointer text-sm font-normal text-gray1"
              >
                {{ text }}
              </li>
            </ul>
          </div>
          <div class="w-full flex flex-col items-start justify-start gap-6">
            <h3 class="text-sm font-bold text-white">
              Privacy Policy and Terms of Service
            </h3>
            <ul class="w-full flex flex-col items-start justify-start gap-4">
              <li
                v-for="(text, index) in termlinks"
                :key="index"
                class="cursor-pointer text-sm font-normal text-gray1"
              >
                {{ text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-full bg-footerlightBlueBg absolute top-[50%] left-[-2%] blur-[100px]"
    ></div>
    <img src="../assets/image/heroCircle.svg" alt="heroImage" class="absolute top-0 animate-ping">
  </footer>
</template>

<script setup>
const links = ["About", "Career", "Press", "News", "Merch"];
const termlinks = [
  "CoinFlip Privacy Policy",
  "CoinFlip Biometrics Privacy Policy",
  "CoinFlip Financial Privacy Notice",
  "CoinFlip Terms of Service",
  "CoinFlip Trade Desk Terms of Service",
];
</script>
