<template>
  <div class="flex justify-center ">
    <div
      class="flex flex-col border-black w-4/5 mt-4"
      :class="[isOpen ? ['border-t-2', 'border-b-2'] : 'border-0']"
    >
      <div class="flex justify-between mt-4">
        <div class="flex items-center">
          <img :src="coin.iconUrl" alt="currency logo" class="w-6" />
          <p class="ml-4">
            {{ coin.name }} <span>({{ coin.symbol }})</span>
          </p>
        </div>
        <font-awesome-icon
          class="text-xl cursor-pointer"
          :icon="['fa', 'plus']"
          @click="isOpen = !isOpen"
        />
      </div>
      <transition name="fade">
        <div v-if="isOpen" class="w-4/5 py-4">
          <p>
            More Info about:
            <span
              class="text-blue-600 cursor-pointer"
              @click="$router.push(`/aboutcrypto/${coin.id}`)"
              >{{ coin.name }}</span
            >
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coin: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
