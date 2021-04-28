<template>
  <div>
    <div
      class="bg-light-dark-blue text-white text-center flex px-8 py-2 border-b border-gray-600 lg:rounded-md lg:mt-2 lg:border-none"
    >
      <p class="w-4/12 lg:w-2/12">{{ coin.id }}</p>
      <p class="w-4/12 lg:w-2/12">{{ formatCurrency(coin.price) }}</p>

      <p
        class="w-4/12 lg:w-2/12"
        :class="
          coin['1d'].price_change_pct > 0 ? 'text-green-500' : 'text-red-500'
        "
      >
        {{ coin["1d"].price_change_pct }}
      </p>
      <p v-if="!mobileView" class="lg:w-2/12">
        {{ formatCurrency(coin["1d"].volume) }}
      </p>
      <p
        v-if="!mobileView"
        class="lg:w-2/12"
        :class="
          coin['1d'].volume_change > 0 ? 'text-green-500' : 'text-red-500'
        "
      >
        {{ parseInt(coin["1d"].volume_change).toLocaleString("en-IN") }}
      </p>
      <p
        v-if="!mobileView"
        class="lg:w-2/12"
        :class="
          coin['1d'].volume_change_pct > 0 ? 'text-green-500' : 'text-red-500'
        "
      >
        {{ coin["1d"].volume_change_pct }}
      </p>
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

//coinrankingb757a068d29044b6c56fc93a4efa20046ce0df40af674fbf
