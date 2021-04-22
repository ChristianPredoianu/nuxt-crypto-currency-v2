<template>
  <div>
    <header
      :class="isOpen ? 'bg-gray-900' : 'bg-black'"
      class="transition duration-1000 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
    >
      <div class="flex items-center justify-between px-4 py-3 sm:p-0 lg:ml-4">
        <p class="text-white text-l font-bold xl:text-2xl">CryptoInfo.</p>

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
        class="text-white px-2 pt-2 pb-4 sm:flex sm:p-0 lg:mr-4"
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
      isOpen: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
