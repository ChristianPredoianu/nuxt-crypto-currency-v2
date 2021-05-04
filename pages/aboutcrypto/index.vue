<template>
  <div>
    <NavBar />
    <section class="py-40 px-16 sm:px-20 md:w-4/5 md:m-auto md:px-0  xl:pl-0 ">
      <h1 class="text-3xl">
        Bitcoin and cryptocurrency for
        <span class="text-red-600">beginners</span>
      </h1>
      <p class="mt-8">
        Get your information about the basics of cryprocurrencies from us.
      </p>
      <p>
        We take a deep dive into different cryptocurrencies so that
      </p>
      <p>you can be informed about them before you invest.</p>
    </section>
    <section class=" flex justify-center bg-gray-400 py-20 ">
      <div
        class="w-4/5 flex flex-col items-center md:flex-row md:flex-wrap md:justify-between  xl:w-4/5"
      >
        <CryptoCard
          v-for="coin in currencyData.slice(0, 6)"
          :key="coin.id"
          :coin="coin"
        />
      </div>
    </section>
    <section class="py-20 ">
      <CryptoItem v-for="coin in currencyData" :key="coin.id" :coin="coin" />
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currencyData: []
    };
  },

  async fetch() {
    await fetch("https://api.coinranking.com/v1/public/coins")
      .then(res => res.json())
      .then(data => (this.currencyData = data.data.coins));
  },

  mounted() {
    console.log(this.currencyData);
  }
};
</script>

<style lang="scss" scoped></style>
