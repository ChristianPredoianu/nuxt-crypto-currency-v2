<template>
  <div
    class="flex flex-col w-3/4 px-8 py-16 mt-8 border border-gray-700 md:w-6/12 lg:w-3/12 shadow-xl "
  >
    <h2
      class="inline-block text-xl pt-4 pb-2 border-b-2 align-text-top md:text-2xl"
    >
      {{ headerText }}
    </h2>

    <p class="mt-4 md:text-lg">
      {{ cardText }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      required: true
    },
    cardText: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
