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

        <NavDarkModeToggler @darkModeEvent="changeIsDarkMode($event)" />

        <div
          class="sm:hidden p-1"
          :class="{ 'bg-gray-900 rounded-lg': !isDarkMode }"
        >
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
    changeIsDarkMode(darkMode) {
      this.isDarkMode = darkMode;
    }
  }
};
</script>
