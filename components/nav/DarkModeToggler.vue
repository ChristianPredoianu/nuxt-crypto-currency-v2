<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    };
  },

  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.isDarkMode
        ? ($nuxt.$colorMode.preference = "dark-mode")
        : ($nuxt.$colorMode.preference = "light-mode");

      this.$emit("darkModeEvent", this.isDarkMode);
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

<style lang="scss" scoped></style>
