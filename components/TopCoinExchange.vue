<template>
  <div>
    <div class="bg-light-dark-blue text-white py-4 px-2 lg:rounded-md ">
      <p>{{ coin.id }}</p>
      <p>{{ formatCurrency(coin.price) }}</p>
      <p
        :class="
          coin['1d'].price_change_pct > 0 ? 'text-green-500' : 'text-red-500'
        "
      >
        {{ coin["1d"].price_change_pct }}
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
  }
};
</script>

<style lang="scss" scoped></style>
