<template>
  <div>
    <section>
      <div class="container mx-auto py-20 lg:py-40">
        <div class="mx-auto px-4 lg:w-3/6">
          <h1 class="text-3xl">
            Bitcoin and cryptocurrency for
            <span class="text-blue-500">beginners</span>
          </h1>
          <p class="mt-2">
            Get your information about the basics of cryprocurrencies from us.
            We take a deep dive into different cryptocurrencies so that you can
            be informed about them before you invest.
          </p>
        </div>
      </div>
    </section>
    <section>
      <div
        class="container mx-auto flex justify-center py-20 border-b border-gray-700"
      >
        <div
          class="w-4/5 flex flex-col items-center md:flex-row md:flex-wrap md:justify-between xl:w-4/5"
        >
          <CryptoCard
            v-for="coin in currencyData.slice(0, 6)"
            :key="coin.id"
            :coin="coin"
          />
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto py-20">
        <CryptoItem v-for="coin in currencyData" :key="coin.id" :coin="coin" />
      </div>
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
  }
};
</script>
