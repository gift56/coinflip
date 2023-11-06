<template>
  <header class="w-full sticky top-0 z-40 bg-transparent">
    <div class="container">
      <div class="w-full flex items-center justify-between gap-6 py-6">
        <RouterLink to="/">
          <img src="@/assets/image/logo.svg" alt="logo" />
        </RouterLink>
        <nav class="hidden lg:flex items-center justify-start gap-6">
          <RouterLink
            v-for="link in navLinks"
            :key="link.text"
            :to="link.href"
            class="text-base font-medium w-fit px-3 py-2 rounded-md transition-all duration-300"
            >{{ link.text }}</RouterLink
          >
        </nav>
        <div class="hidden lg:flex items-center justify-start gap-6">
          <RouterLink to="/" class="text-lg font-semibold border w-fit px-4 py-1 rounded-xl"
            >Sign in</RouterLink
          >
          <RouterLink to="/">
            <button type="button" class="w-fit px-4 py-1 rounded-xl bg-btnLinear text-white outline-none text-lg font-semibold">
              Sign up
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
const navLinks = [
  {
    href: "/",
    text: "Buy / Sell",
  },
  {
    href: "/",
    text: "Grow",
  },
  {
    href: "/",
    text: "Markets",
  },
  {
    href: "/",
    text: "Business",
  },
  {
    href: "/",
    text: "Support",
  },
];
export default {
  data() {
    return {
      navLinks,
    };
  },
};
</script>
