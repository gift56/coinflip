<template>
  <footer class="w-full border-t border-[#2B2C3B] relative">
    <div class="container">
      <div
        class="w-full py-20 flex flex-col items-start justify-between md:flex-row gap-8"
      >
        <div class="w-full flex flex-col items-start justify-start gap-4">
          <RouterLink to="/">
            <img src="@/assets/image/logo.svg" alt="logo" />
          </RouterLink>
          <p class="text-sm font-normal text-white">
            CoinFlip, the world’s leading bitcoin ATM operator, makes it so
            flippin’ easy to buy and sell bitcoin via cash, card, or bank
            transfer. Sign up to get the latest in CoinFlip news, discounts, and
            more.
          </p>
          <p class="text-sm font-normal text-gray1">
            © 2021 GPD Holdings, LLC FinCEN MSB
          </p>
        </div>
        <div class="w-full flex flex-col items-start justify-start gap-3">
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
        <div class="w-full flex flex-col items-start justify-start gap-3">
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
