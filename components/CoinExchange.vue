<template>
  <div class="lg:px-10">
    <div
      class="shadow text-center flex py-4 border border-gray-600 lg:rounded-md lg:mt-2"
    >
      <div class="w-1/3 text-center flex items-center pl-4 lg:w-1/6 ">
        <img :src="coin.logo_url" alt="coin logo" class="w-4" />
        <p class="ml-4 text-center">
          {{ coin.id }}
        </p>
      </div>
      <div class="w-1/3 lg:w-1/6">
        <p>{{ formatCurrency(coin.price) }}</p>
      </div>
      <div class="w-1/3 lg:w-1/6">
        <p
          :class="
            coin['1d'].price_change_pct > 0 ? 'text-green-500' : 'text-red-500'
          "
        >
          {{ coin["1d"].price_change_pct }}
        </p>
      </div>
      <div class="lg:w-1/6" v-if="!mobileView">
        <p>
          {{ formatCurrency(coin["1d"].volume) }}
        </p>
      </div>
      <div class="lg:w-1/6" v-if="!mobileView">
        <p
          :class="
            coin['1d'].volume_change > 0 ? 'text-green-500' : 'text-red-500'
          "
        >
          {{ formatCurrency(coin["1d"].volume_change) }}
        </p>
      </div>
      <div class="lg:w-1/6" v-if="!mobileView">
        <p
          :class="
            coin['1d'].volume_change_pct > 0 ? 'text-green-500' : 'text-red-500'
          "
        >
          {{ coin["1d"].volume_change_pct }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import formatCurrency from "@/mixins/formatCurrency";
export default {
  mixins: [formatCurrency],
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
      this.mobileView = window.innerWidth <= 1023;
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
