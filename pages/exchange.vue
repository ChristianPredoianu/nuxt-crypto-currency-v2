<template>
  <div class="bg-darkest-blue">
    <NavBar />

    <section>
      <div class="bg-black text-white py-32 text-center ">
        <h1 class="font-bold text-3xl ">CryptInfo.com</h1>
        <span
          class="font-bold text-3xl pb-2 border-b-2 border-solid border-red-700"
          >Exchange</span
        >

        <h2 class="mt-8">
          Powered by
          <a href="https://nomics.com/" target="_blank" class="cursor-pointer"
            >nomics.com</a
          >
        </h2>
      </div>
    </section>

    <section class="py-40">
      <div
        class="flex flex-wrap justify-between px-8 gap-8 text-center lg:flex-no-wrap"
      >
        <TopCoinExchange
          v-for="coin in currencyData.slice(0, 4)"
          :key="coin.id"
          :coin="coin"
          class="w-5/12 lg:w-2/12"
        />
      </div>
      <div class="flex justify-end items-center mt-12 mr-12 py-4 ">
        <p class="text-xl invisible">ghost element</p>
        <input
          type="search"
          class="w-4/12 px-2 mr-4 "
          placeholder="Search"
          aria-label="Search currency"
          v-if="isSearchOpen"
          v-model="searchTerm"
        />
        <font-awesome-icon
          class="text-xl text-white"
          :icon="['fas', 'search']"
          @click="isSearchOpen = !isSearchOpen"
        />
      </div>

      <div class="text-gray-400 pb-2 mt-12 lg:px-20">
        <ul class="flex px-8 text-center">
          <li class="w-4/12 lg:w-2/12">
            Currency
          </li>
          <li class="w-4/12 flex flex-col justify-between lg:w-2/12">
            Price
            <div class="mt-8">
              <font-awesome-icon
                class="text-3xl "
                :icon="['fas', 'sort-up']"
                @click="sort('price', 'asc')"
              />
            </div>
          </li>
          <li class="w-4/12 flex flex-col justify-between lg:w-2/12">
            24/h price change %
            <div class="">
              <font-awesome-icon
                class="text-3xl"
                :icon="['fas', 'sort-up']"
                @click="sort('price_change_pct', 'asc')"
              />
            </div>
          </li>
          <li v-if="!mobileView" class="lg:w-2/12">
            24/h volume
            <div class="flex flex-col ">
              <font-awesome-icon
                class="text-3xl"
                :icon="['fas', 'sort-up']"
                @click="sort('volume', 'asc')"
              />
            </div>
          </li>
          <li v-if="!mobileView" class="lg:w-2/12">
            24/h volume change
            <div class="flex flex-col ">
              <font-awesome-icon
                class="text-3xl"
                :icon="['fas', 'sort-up']"
                @click="sort('volume_change', 'asc')"
              />
            </div>
          </li>
          <li v-if="!mobileView" class="lg:w-2/12">
            24/h volume change %
            <div class="flex flex-col ">
              <font-awesome-icon
                class="text-3xl"
                :icon="['fas', 'sort-up']"
                @click="sort('volume_change_pct', 'asc')"
              />
            </div>
          </li>
        </ul>
        <div v-if="!searchTerm">
          <CoinExchange
            v-for="coin in sortedCurrencyData(currencyData)"
            :key="coin.id"
            :coin="coin"
          />
        </div>
        <div v-else>
          <CoinExchange
            v-for="coin in filteredCurrencyData"
            :key="coin.id"
            :coin="coin"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileView: true,
      currencyData: [],
      orderBy: "",
      orderOption: "",
      isSearchOpen: false,
      searchTerm: null
    };
  },

  async fetch() {
    this.currencyData = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=4c494109a687bef4f73e1e017317e61b&per-page=50&page=1"
    ).then(res => res.json());
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1024;
    },

    sort(by, option) {
      if (this.orderBy === by) {
        if (this.orderOption === "asc") {
          this.orderOption = "";
        } else if (this.orderOption === "") {
          this.orderOption = "asc";
        }
      } else {
        this.orderOption = option;
        this.orderBy = by;
      }
    },

    sortedCurrencyData(arr) {
      if (this.orderBy !== "price" && this.orderOption === "asc") {
        return arr.slice().sort((a, b) => {
          return b["1d"][this.orderBy] - a["1d"][this.orderBy];
        });
      }
      if (this.orderOption === "asc") {
        return arr.slice().sort((a, b) => {
          return b[this.orderBy] - a[this.orderBy];
        });
      }

      return arr;
    }
  },

  computed: {
    filteredCurrencyData() {
      const foundCurrency = this.currencyData.filter(coin =>
        coin.id.includes(this.searchTerm.toUpperCase())
      );

      return this.sortedCurrencyData(foundCurrency);
    }
  },

  mounted() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  }
};
</script>

<style lang="scss" scoped></style>
