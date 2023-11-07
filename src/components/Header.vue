<template>
  <header class="w-full bg-transparent">
    <div class="container relative z-40">
      <nav class="w-full flex items-center justify-between gap-6 py-6">
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
          <RouterLink
            to="/"
            class="text-lg font-semibold border w-fit px-4 py-2 rounded-xl"
            >Sign in</RouterLink
          >
          <RouterLink to="/">
            <button
              type="button"
              class="w-fit px-4 py-2 rounded-xl bg-btnLinear text-white outline-none text-lg font-semibold"
            >
              Sign up
            </button>
          </RouterLink>
        </div>
        <span @click="toggleMenu" v-if="!isMenuOpen" class="lg:hidden text-2xl">
          <i class="fa-solid fa-bars"></i>
        </span>
        <div
          class="lg:hidden flex flex-col h-screen bg-black/20 gap-7 absolute top-0 w-full z-40 transition-all duration-300"
          :class="{ 'left-0': isMenuOpen, '-left-full': !isMenuOpen }"
        >
          <nav
            ref="menuRef"
            className="flex flex-col h-full bg-cardDark gap-5 p-4 w-[250px]"
          >
            <div className="w-full flex items-center justify-end">
              <span @click="toggleMenu" className="text-dark text-2xl">
                <i class="fa-solid fa-xmark"></i>
              </span>
            </div>
            <RouterLink
              v-for="link in navLinks"
              :key="link.text"
              :to="link.href"
              @click="toggleMenu"
              class="text-base font-medium text-dark"
              >{{ link.text }}</RouterLink
            >

            <RouterLink
              to="/"
              class="text-lg font-semibold border w-fit px-4 py-2 rounded-xl"
              >Sign in</RouterLink
            >
            <RouterLink to="/">
              <button
                type="button"
                class="w-fit px-4 py-2 rounded-xl bg-btnLinear text-white outline-none text-lg font-semibold"
              >
                Sign up
              </button>
            </RouterLink>
          </nav>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenuOnClickOutside = (event) => {
  if (
    isMenuOpen.value &&
    menuRef.value &&
    !menuRef.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("mousedown", closeMenuOnClickOutside);
});

// Clean up the event listener when the component is unmounted
onUnmounted(() => {
  document.removeEventListener("mousedown", closeMenuOnClickOutside);
});

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
</script>
