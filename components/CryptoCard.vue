<template>
  <div
    class="w-3/5 flex flex-col items-center mt-8 bg-gray-200 pt-6 rounded-lg md:w-4/12 md:m-4 md:ml-0 xl:w-1/4 2xl:w-3/12 "
  >
    <img :src="coin.iconUrl" alt="currency icon" class="w-20" />
    <p class="py-12 2xl:text-2xl">
      {{ coin.name }} <span>({{ coin.symbol }})</span>
    </p>
    <button
      class="w-full bg-blue-700 text-white py-4 rounded-b-lg cursor-pointer"
      @click="$router.push(`/aboutcrypto/${coin.id}`)"
    >
      More info
    </button>
  </div>
</template>

<script>
export default {
  props: {
    coin: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped></style>
