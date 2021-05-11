<template>
  <div>
    <section
      class="py-40 px-16 border-b border-gray-700 sm:px-20 md:w-4/5 md:m-auto md:px-0 xl:pl-0"
    >
      <h1 class="text-3xl">
        Bitcoin and cryptocurrency for
        <span class="text-blue-500">beginners</span>
      </h1>
      <p class="mt-8">
        Get your information about the basics of cryprocurrencies from us.
      </p>
      <p>
        We take a deep dive into different cryptocurrencies so that
      </p>
      <p>you can be informed about them before you invest.</p>
    </section>
    <section class="flex justify-center py-20 border-b border-gray-700">
      <div
        class="w-4/5 flex flex-col items-center md:flex-row md:flex-wrap md:justify-between xl:w-4/5"
      >
        <CryptoCard
          v-for="coin in currencyData.slice(0, 6)"
          :key="coin.id"
          :coin="coin"
        />
      </div>
    </section>
    <section class="py-20">
      <CryptoItem v-for="coin in currencyData" :key="coin.id" :coin="coin" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
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
  }
};
</script>
