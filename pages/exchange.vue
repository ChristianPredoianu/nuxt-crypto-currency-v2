<template>
  <div class="bg-blue-900">
    <NavBar />
    <section>
      <div class="bg-black text-white py-32 text-center ">
        <h1 class="font-bold text-3xl ">CryptInfo.com</h1>
        <span
          class="font-bold text-3xl pb-2 border-b-2 border-solid border-red-700"
          >Exchange</span
        >
        <h2 class="mt-8">
          Powered by
          <a href="https://nomics.com/" target="_blank" class="cursor-pointer"
            >nomics.com</a
          >
        </h2>
      </div>
    </section>
    <section class="mt-4">
      <div class="flex flex-wrap justify-center gap-2">
        <TopCoinExchange
          v-for="coin in coinData"
          :key="coin.id"
          :coin="coin"
          class="w-5/12"
        />
      </div>
      <div class="py-10">
        <div class="pt-4 pb-2">
          <ul class="flex justify-center  text-gray-400">
            <li class="w-4/12 lg:w-1/6">Currency</li>
            <li class="w-4/12 lg:w-1/6">Price</li>
            <li class="lg:w-1/6">24/h change</li>
            <li v-if="!mobileView" class="lg:w-1/6">24/h high</li>
            <li v-if="!mobileView" class="lg:w-1/6">24/h low</li>
            <li v-if="!mobileView" class="w-4/12 lg:w-1/6">24/h volume</li>
          </ul>
        </div>
        <CoinExchange v-for="coin in coinData" :key="coin.id" :coin="coin" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileView: true,
      coinData: []
    };
  },

  async fetch() {
    this.coinData = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=4c494109a687bef4f73e1e017317e61b&per-page=50&page=1"
    ).then(res => res.json());
    console.log(this.coinData[0]);
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1024;
    }
  },

  mounted() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
};
</script>

<style lang="scss" scoped></style>
