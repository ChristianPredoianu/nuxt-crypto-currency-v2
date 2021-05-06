<template>
  <div v-if="foundCurrencyById && foundLinks" class="dark">
    <NavBar />
    <section
      class=" flex flex-col items-center pt-20 pb-16 border-black border-b-2 xl:py-32 "
    >
      <img :src="foundCurrencyById.iconUrl" alt="currency icon" class="w-24" />
      <h1 class="text-2xl mt-8 lg:text-3xl">
        {{ foundCurrencyById.name }}
      </h1>
      <div class="w-9/12 flex justify-around mt-16 md:w-2/4 xl:w-1/3">
        <div v-for="link in foundLinks" :key="link.id">
          <a :href="link.url" target="_blank">
            <font-awesome-icon
              class="text-3xl transition duration-200 transform hover:text-blue-800 hover:scale-110"
              :icon="['fab', 'twitter-square']"
              v-if="link.type === 'twitter'"
          /></a>
          <a :href="link.url" target="_blank">
            <font-awesome-icon
              class="text-3xl transition duration-200 transform hover:text-blue-800 hover:scale-110"
              :icon="['fab', 'instagram']"
              v-if="link.type === 'instagram'"
          /></a>
          <a :href="link.url" target="_blank">
            <font-awesome-icon
              class="text-3xl transition duration-200 transform hover:text-blue-800 hover:scale-110"
              :icon="['fab', 'youtube']"
              v-if="link.type === 'youtube'"
          /></a>
          <a :href="link.url" target="_blank">
            <font-awesome-icon
              class="text-3xl transition duration-200 transform hover:text-blue-800 hover:scale-110"
              :icon="['fab', 'reddit']"
              v-if="link.type === 'reddit'"
          /></a>
          <a :href="link.url" target="_blank"
            ><font-awesome-icon
              class="text-3xl transition duration-200 transform hover:text-blue-800 hover:scale-110"
              :icon="['fab', 'github']"
              v-if="link.type === 'github'"
          /></a>
          <a :href="link.url" target="_blank">
            <font-awesome-icon
              class="text-3xl transition duration-200 transform hover:text-blue-800 hover:scale-110"
              :icon="['fab', 'facebook']"
              v-if="link.type === 'facebook'"
          /></a>
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col items-center py-20 xl:pt-56 xl:pb-64">
        <h2 class="text-2xl md:text-3xl lg:text-4xl">
          What is <span class="font-bold">{{ foundCurrencyById.name }}</span> ?
        </h2>
        <p
          class="text-center mt-8 px-10 md:text-2xl md:px-16 lg:px-20 lg:text-left xl:px-32"
        >
          {{ replaceTagsInString(foundCurrencyById.description) }}
        </p>
      </div>
    </section>
    <section class=" text-gray-300 py-20 xl:py-40">
      <div class="flex flex-col items-center md:text-xl lg:text-2xl">
        <h3 class="text-2xl mb-6 md:text-3xl xl:mb-20">Stats</h3>
        <div class="w-4/5 flex flex-col mt-4 ">
          <div class="flex justify-between border-white border-b">
            <p class="text-gray-500 pb-2">Rank:</p>
            <p class="ml-2">{{ foundCurrencyById.rank }}</p>
          </div>
          <div class="flex justify-between mt-4 border-white border-b">
            <p class="text-gray-500 pb-2">Price:</p>
            <p class="ml-2">
              {{ formatCurrency(foundCurrencyById.price) }}
            </p>
          </div>
          <div class="flex justify-between mt-4 border-b">
            <p class="text-gray-500 pb-2">First seen:</p>
            <p class="ml-2">
              {{ formatTimestamp(foundCurrencyById.firstSeen) }}
            </p>
          </div>
          <div class="flex justify-between mt-4 border-b">
            <p class="text-gray-500 pb-2">Supply:</p>
            <p class="ml-2">
              {{ intFormatNumber(foundCurrencyById.circulatingSupply) }}
            </p>
          </div>
          <div class="flex justify-between mt-4 border-b">
            <p class="text-gray-500 pb-2">All time high price:</p>
            <p class="ml-2">
              {{ formatCurrency(foundCurrencyById.allTimeHigh.price) }}
            </p>
          </div>
          <div class="flex justify-between mt-4 border-b">
            <p class="text-gray-500 pb-2">All time high date:</p>
            <p class="ml-2">
              {{ formatTimestamp(foundCurrencyById.allTimeHigh.timestamp) }}
            </p>
          </div>
          <div class="flex justify-between mt-4">
            <p class="text-gray-500">Website:</p>
            <a href="" target="_blank">
              <font-awesome-icon
                class="text-2xl cursor-pointer transition duration-200 transform hover:text-blue-800 hover:scale-110"
                :icon="['fab', 'chrome']"
            /></a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import formatCurrency from "@/mixins/formatCurrency";
export default {
  mixins: [formatCurrency],
  data() {
    return {
      currencyData: [],
      links: ["facebook", "github", "reddit", "youtube", "instagram", "twitter"]
    };
  },

  async fetch() {
    await fetch("https://api.coinranking.com/v1/public/coins")
      .then(res => res.json())
      .then(data => (this.currencyData = data.data.coins));
  },

  methods: {
    replaceTagsInString(str) {
      return str
        .replace(/<p[^>]*>/g, "")
        .replace(/<\/?p[^>]*>/g, "")
        .replace(/<h3[^>]*>/g, "")
        .replace(/<\/?h3[^>]*>/g, "")
        .replace(/<a[^>]*>/g, "")
        .replace(/<\/?a[^>]*>/g, "");
    },
    intFormatNumber(number) {
      return new Intl.NumberFormat().format(number);
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `;
    }
  },

  computed: {
    foundCurrencyById() {
      return this.currencyData.find(
        currency => currency.id === parseInt(this.$route.params.id)
      );
    },
    foundLinks() {
      const links = this.foundCurrencyById.links.filter(link =>
        this.links.includes(link.type)
      );
      return links;
    }
  },
  mounted() {
    console.log(this.currencyData);
  }
};
</script>

<style scoped></style>
