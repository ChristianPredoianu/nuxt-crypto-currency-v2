<template>
  <div>
    <div
      class="bg-blue-800 text-white flex justify-center py-2  border-b border-gray-600"
    >
      <p class="text-start w-4/12 lg:w-1/6">{{ coin.id }}</p>
      <p class="w-4/12 lg:w-1/6">{{ formatCurrency(coin.price) }}</p>
      <p
        class="text-center rounded-md w-3/12 lg:w-1/6"
        :class="coin['1d'].price_change_pct > 0 ? 'bg-green-500' : 'bg-red-500'"
      >
        {{ coin["1d"].price_change_pct }}
      </p>
      <p v-if="!mobileView" class="lg:w-1/6">1.254</p>
      <p v-if="!mobileView" class="lg:w-1/6">1.785</p>
      <p v-if="!mobileView" class="lg:w-1/6">1.785</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coin: {
      type: Object
    }
  },
  data() {
    return {
      mobileView: true
    };
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1024;
    },
    formatCurrency(num) {
      return new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD"
      }).format(num);
    }
  },

  mounted() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
};
</script>

<style lang="scss" scoped></style>

//coinrankingb757a068d29044b6c56fc93a4efa20046ce0df40af674fbf
