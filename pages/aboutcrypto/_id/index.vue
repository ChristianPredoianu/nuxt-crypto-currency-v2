<template>
  <div v-if="foundCurrencyById && foundLinks">
    <section>
      <div
        class="container mx-auto flex flex-col items-center pt-20 pb-16 border-b border-gray-700 xl:py-32 "
      >
        <img
          :src="foundCurrencyById.iconUrl"
          alt="currency icon"
          class="w-24"
        />
        <h1 class="text-2xl mt-8 lg:text-3xl">
          {{ foundCurrencyById.name }}
        </h1>
        <div class="w-9/12 flex justify-around mt-16 md:w-2/4 xl:w-1/3">
          <SocialIcons v-for="link in foundLinks" :key="link.id" :link="link" />
        </div>
      </div>
    </section>

    <section>
      <div
        class="container mx-auto flex flex-col items-center py-20 xl:pt-56 xl:pb-64"
      >
        <h2 class="text-2xl text-center md:text-2xl lg:mb-6 lg:text-3xl">
          What is <span class="font-bold">{{ foundCurrencyById.name }}</span> ?
        </h2>
        <p
          v-if="foundCurrencyById.description !== null"
          class="mt-8 px-10 md:text-2xl md:px-16 lg:px-20 lg:text-left xl:px-32"
        >
          {{ replaceTagsInString(foundCurrencyById.description) }}
        </p>
        <p
          v-else
          class="text-center mt-8 px-10 md:text-2xl md:px-16 lg:px-20 lg:text-left xl:px-32"
        >
          No further description details avaliable for this currency at the
          moment. See stats section.
        </p>
      </div>
    </section>
    <section class="py-20 xl:py-40">
      <div
        class="container mx-auto flex flex-col items-center md:text-xl lg:text-2xl"
      >
        <h3 class="text-2xl mb-6 md:text-3xl xl:mb-20">Stats</h3>
        <div class="w-4/5 flex flex-col mt-4 ">
          <div class="flex justify-between border-b border-gray-700">
            <p class="pb-2">Rank:</p>
            <p class="ml-2">{{ foundCurrencyById.rank }}</p>
          </div>
          <div class="flex justify-between mt-4 border-b border-gray-700">
            <p class=" pb-2">Price:</p>
            <p class="ml-2">
              {{ formatCurrency(foundCurrencyById.price) }}
            </p>
          </div>
          <div class="flex justify-between mt-4 border-b border-gray-700">
            <p class=" pb-2">First seen:</p>
            <p class="ml-2">
              {{ formatTimestamp(foundCurrencyById.firstSeen) }}
            </p>
          </div>
          <div class="flex justify-between mt-4 border-b border-gray-700">
            <p class="pb-2">Supply:</p>
            <p class="ml-2">
              {{ intFormatNumber(foundCurrencyById.circulatingSupply) }}
            </p>
          </div>
          <div class="flex justify-between mt-4 border-b border-gray-700">
            <p class="pb-2">All time high price:</p>
            <p class="ml-2">
              {{ formatCurrency(foundCurrencyById.allTimeHigh.price) }}
            </p>
          </div>
          <div class="flex justify-between mt-4 border-b border-gray-700">
            <p class="pb-2">All time high date:</p>
            <p class="ml-2">
              {{ formatTimestamp(foundCurrencyById.allTimeHigh.timestamp) }}
            </p>
          </div>
          <div class="flex justify-between mt-4">
            <p>Website:</p>
            <a :href="foundCurrencyById.websiteUrl" target="_blank">
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
        .replace(/(<([^>]+)>)/gi, "")
        .replace(/&nbsp/g, "")
        .replace(/&#39;/g, "")
        .replace(/&rsquo;/g, "")
        .replace(/&rdquo;/g, "")
        .replace(/&quot;/g, "")
        .replace(/&ldquo;/g, "")
        .replace(/lsquo;/g, "");
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
  }
};
</script>
