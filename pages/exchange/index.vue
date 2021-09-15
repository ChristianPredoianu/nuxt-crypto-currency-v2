<template>
  <div>
    <section>
      <div class="container mx-auto border-b border-gray-700">
        <div class="py-32 text-center ">
          <h1 class="font-bold text-3xl">CryptInfo.com</h1>
          <span class="font-bold text-3xl pb-2">Exchange</span>

          <h2 class="mt-8">
            Powered by
            <a href="https://nomics.com/" target="_blank" class="cursor-pointer"
              >nomics.com</a
            >
          </h2>
        </div>
      </div>
    </section>

    <section class="py-40">
      <div class="container mx-auto">
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
            class="w-5/12 px-2 py-2 mr-4 md:w-3/12 xl:w-1/12"
            placeholder="Search"
            aria-label="Search currency"
            v-if="isSearchOpen"
            v-model="searchTerm"
          />
          <font-awesome-icon
            class="text-xl "
            :icon="['fas', 'search']"
            @click="isSearchOpen = !isSearchOpen"
          />
        </div>

        <div class="flex mt-12 lg:px-10">
          <div class="w-1/3 text-left pl-4 lg:w-1/6 lg:pl-0">
            <p class="">Currency</p>
          </div>
          <div class="w-1/3 flex flex-col items-center lg:w-1/6 ">
            <p>Price</p>
            <font-awesome-icon
              class="text-3xl mt-8 cursor-pointer"
              :class="{ 'text-green-500': selectedSort === 1 }"
              :icon="['fas', 'sort-up']"
              @click="sort('price', 'asc', 1)"
            />
          </div>
          <div
            class="w-1/3 flex flex-col items-center justify-between text-center lg:w-1/6"
          >
            <p>1d price change</p>
            <font-awesome-icon
              class="text-3xl cursor-pointer"
              :class="{ 'text-green-500': selectedSort === 2 }"
              :icon="['fas', 'sort-up']"
              @click="sort('price_change_pct', 'asc', 2)"
            />
          </div>
          <div
            class="flex flex-col items-center justify-between text-center lg:w-1/6"
            v-if="!mobileView"
          >
            <p>1d volume</p>
            <font-awesome-icon
              class="text-3xl cursor-pointer"
              :class="{ 'text-green-500': selectedSort === 3 }"
              :icon="['fas', 'sort-up']"
              @click="sort('volume', 'asc', 3)"
            />
          </div>
          <div
            class="flex flex-col items-center justify-between text-center lg:w-1/6"
            v-if="!mobileView"
          >
            <p>1d volume change</p>
            <font-awesome-icon
              class="text-3xl cursor-pointer"
              :class="{ 'text-green-500': selectedSort === 4 }"
              :icon="['fas', 'sort-up']"
              @click="sort('volume_change', 'asc', 4)"
            />
          </div>
          <div
            class="flex flex-col items-center justify-between text-center lg:w-1/6"
            v-if="!mobileView"
          >
            <p>1d volume change %</p>
            <font-awesome-icon
              class="text-3xl cursor-pointer"
              :class="{ 'text-green-500': selectedSort === 5 }"
              :icon="['fas', 'sort-up']"
              @click="sort('volume_change_pct', 'asc', 5)"
            />
          </div>
        </div>
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
      searchTerm: null,
      selectedSort: null
    };
  },

  async fetch() {
    this.currencyData = await fetch(
      "https://api.nomics.com/v1/currencies/ticker?key=4c494109a687bef4f73e1e017317e61b&per-page=50&page=1"
    ).then(res => res.json());
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 1023;
    },

    toggleActiveSort(sortArrow) {
      if (this.orderOption !== "") {
        this.selectedSort = sortArrow;
      } else {
        this.selectedSort = null;
      }
    },

    sort(by, option, arrowNum) {
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
      this.toggleActiveSort(arrowNum);
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
