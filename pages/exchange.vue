<template>
  <div class="bg-darkest-blue">
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

    <section class="py-12 ">
      <div class="flex flex-wrap justify-center gap-2 lg:flex-no-wrap lg:gap-8">
        <TopCoinExchange
          v-for="coin in coinsData.slice(0, 4)"
          :key="coin.id"
          :coin="coin"
          class="w-5/12 lg:w-2/12"
        />
      </div>
      <div class="text-gray-400 pt-12 pb-2 lg:px-20">
        <ul class="flex px-8 text-center">
          <li class="w-4/12 lg:w-2/12">Currency</li>
          <li class="w-4/12 lg:w-2/12">Price</li>
          <li class="w-4/12 lg:w-2/12">24/h price change %</li>
          <li v-if="!mobileView" class="lg:w-2/12">24/h volume</li>
          <li v-if="!mobileView" class="lg:w-2/12">24/h volume change</li>
          <li v-if="!mobileView" class="lg:w-2/12">24/h volume change %</li>
        </ul>
        <CoinExchange v-for="coin in coinsData" :key="coin.id" :coin="coin" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileView: true,
      coinsData: []
    };
  },

  async fetch() {
    this.coinsData = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=4c494109a687bef4f73e1e017317e61b&per-page=50&page=1"
    ).then(res => res.json());
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1024;
    }
  },

  mounted() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
    console.log(this.coinsData);
  }
};
</script>

<style lang="scss" scoped></style>
