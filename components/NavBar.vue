<template>
  <div>
    <header
      class="transition duration-1000 py-6 sm:flex sm:justify-between sm:items-center sm:px-4 border-b border-gray-700"
    >
      <div
        class="flex items-center justify-between px-4 py-3 sm:p-0 sm:w-3/6 md:w-6/12 lg:w-7/12 lg:ml-4 xl:w-2/3 3xl:w-3/4"
      >
        <NuxtLink to="/" custom v-slot="{ href, navigate }"
          ><p
            class="text-l font-bold cursor-pointer xl:text-2xl"
            :href="href"
            @click="navigate"
          >
            CryptoInfo.
          </p></NuxtLink
        >

        <div
          class="flex justify-between items-center mr-4 "
          @click="toggleDarkMode"
        >
          <p class="mr-2 text-xs ">Dark Mode</p>
          <div
            class="w-12 h-6 flex items-center bg-black rounded-full p-1 duration-300 ease-in-out cursor-pointer"
            :class="{ 'bg-green-500': isDarkMode }"
          >
            <div
              class="w-4 h-4 rounded-full shadow-md bg-white transform duration-300 ease-in-out"
              :class="{ 'translate-x-6': isDarkMode, 'bg-white': isDarkMode }"
            ></div>
          </div>
        </div>
        <div class="sm:hidden">
          <img
            src="@/assets/images/hamburger.png"
            alt="logo"
            class="block h-6 w-6 "
            @click="isOpen = !isOpen"
          />
        </div>
      </div>
      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="px-2 pt-2 pb-4 justify-end uppercase sm:flex sm:p-0 sm:6/12 md:5/12 3xl:mr-6"
      >
        <NuxtLink to="/exchange" custom v-slot="{ href, navigate }">
          <p
            class="block px-2 py-1 transition-colors duration-200 hover:text-blue-600 cursor-pointer"
            :href="href"
            @click="navigate"
          >
            Exchange
          </p></NuxtLink
        >
        <NuxtLink to="/aboutcrypto" tag="p" custom v-slot="{ href, navigate }">
          <p
            class="block mt-1 px-2 py-1 transition-colors duration-200 hover:text-blue-600 sm:mt-0 sm:ml-2 cursor-pointer"
            :href="href"
            @click="navigate"
          >
            Currency info
          </p></NuxtLink
        >
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isDarkMode: false
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.isDarkMode
        ? ($nuxt.$colorMode.preference = "dark-mode")
        : ($nuxt.$colorMode.preference = "light-mode");
    },

    getLocalColorMode() {
      const localColorMode = localStorage.getItem("nuxt-color-mode");
      localColorMode === "dark-mode"
        ? (this.isDarkMode = true)
        : (this.isDarkMode = false);
    }
  },

  mounted() {
    this.getLocalColorMode();
  }
};
</script>
