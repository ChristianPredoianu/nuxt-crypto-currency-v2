<template>
  <div>
    <header
      :class="isOpen ? 'bg-gray-900' : 'bg-black'"
      class="transition duration-1000 py-6 sm:flex sm:justify-between sm:items-center sm:px-4 "
    >
      <div
        class="flex items-center justify-between px-4 py-3 sm:p-0 sm:w-3/5 md:w-9/12 lg:w-3/4 lg:ml-4"
      >
        <p class="text-white text-l font-bold xl:text-2xl">CryptoInfo.</p>

        <div
          class="flex justify-between items-center mr-4 "
          @click="toggleDarkMode"
        >
          <h1 class="text-white">{{ isDarkMode }}</h1>
          <p class="mr-2 text-xs text-white">Dark Mode</p>
          <div
            class="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer"
            :class="{ 'bg-green-400': isDarkMode }"
          >
            <div
              class="bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"
              :class="{ 'translate-x-6': isDarkMode }"
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
        class="text-white px-2 pt-2 pb-4 sm:flex sm:p-0 lg:mr-8"
      >
        <a href="" class="block px-2 py-1">Link 1 </a>
        <a href="" class="block mt-1 px-2 py-1 sm:mt-0 sm:ml-2">Link 1 </a>
        <a href="" class="block mt-1 px-2 py-1 sm:mt-0 sm:ml-2">Link 1 </a>
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
      if (this.isDarkMode) {
        localStorage.setItem("darkMode", true);
      } else {
        localStorage.setItem("darkMode", false);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
