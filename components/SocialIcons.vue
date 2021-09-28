<template>
  <div>
    <a :href="link.url" target="_blank">
      <font-awesome-icon
        class="text-3xl transition duration-200 transform hover:text-blue-800 hover:scale-110"
        :icon="[
          'fab',
          link.type === 'twitter' ? `${link.type}-square` : link.type
        ]"
    /></a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
