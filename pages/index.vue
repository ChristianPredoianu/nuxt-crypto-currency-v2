<template>
  <div class="min-h-screen ">
    <div class="xl:flex xl:justify-center">
      <section
        class="container mx-auto flex flex-col items-center justify-around min-h-screen -mt-8 sm:mt-4 md:flex-row md:items-center md:mt-56 md:min-h-full lg:mt-24
          xl:mt-48 "
      >
        <div class="flex flex-col">
          <div class="border-b-2 w-12 border-gray-700"></div>
          <div>
            <h1 class="text-2xl mt-4 md:text-4xl lg:text-6xl">
              We´re a digital
            </h1>
            <span class="text-xl md:2xl lg:text-4xl">info agency.</span>
          </div>

          <NuxtLink to="/exchange" custom v-slot="{ href, navigate }"
            ><p
              class="text-center mt-4 p-4 border-2 border-gray-700 cursor-pointer transition-colors duration-200 hover:text-gray-700 md:text-xl lg:w-4/12"
              :href="href"
              @click="navigate"
            >
              Get Started
            </p>
          </NuxtLink>
        </div>

        <div class="hidden md:flex md:justify-end xl:w-2/5">
          <img src="@/assets/images/watch.png" alt="mobile phone" />
        </div>

        <div class="md:hidden">
          <font-awesome-icon
            class="text-3xl cursor-pointer"
            :icon="['fas', 'sort-down']"
            @click="goDown"
          />
        </div>
      </section>
    </div>
    <section
      class="container mx-auto flex flex-col items-center pb-12 md:mt-56 md:pb-40 lg:flex-row lg:items-stretch lg:justify-around lg:mt-52 "
      ref="info"
    >
      <AboutUsCard
        headerText="Payoff"
        cardText="Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. "
      />

      <AboutUsCard
        headerText="Testing"
        cardText="Quickly aggregate B2B users and worldwide potentialities. Progressively plagiarize resource-leveling e-commerce through resource-leveling core competencies. "
      />

      <AboutUsCard
        headerText="Vision"
        cardText="Appropriately empower dynamic leadership skills after business portals. Globally myocardinh distinctive quality vectors. "
      />
      <!-- 
      <div
        class="w-3/4 px-8 py-16 mt-8 shadow-xl border border-gray-700 md:w-6/12 lg:w-3/12"
      >
        <h2
          class="inline-block text-xl pt-4 pb-2 border-b-2 align-text-top md:text-4xl"
        >
          Vision
        </h2>
        <p class="mt-4 md:text-xl">
          Our revolutionary feature set is unmatched, but our seamless
          performance and easy use is often considered an amazing achievement.
        </p>
      </div>
      <div
        class="w-3/4 px-8 py-16 mt-8 shadow-xl border border-gray-700 md:w-6/12 lg:w-3/12 "
      >
        <h2
          class="inline-block text-xl pt-4 pb-2 border-b-2 align-text-top md:text-4xl"
        >
          Vision
        </h2>
        <p class="mt-4 md:text-xl">
          Our revolutionary feature set is unmatched, but our seamless
          performance and easy use is often considered an amazing achievement.
        </p>
      </div> -->
    </section>
    <section class="flex justify-center py-10 px-10">
      <a href="https://nomics.com" target="_blank"
        ><p>
          Crypto Market Cap &#38; Pricing Data Provided By Nomics
        </p></a
      >
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goDown() {
      this.$refs.info.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
