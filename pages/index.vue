<template>
  <div class="min-h-screen bg-black">
    <NavBar />
    <div class="xl:flex xl:justify-center">
      <section
        class="flex flex-col items-center justify-around min-h-screen -mt-8 sm:mt-4 md:flex-row md:items-center md:justify-around md:mt-56 md:min-h-full lg:mt-24
         xl:justify-between xl:mt-48 xl:w-11/12"
      >
        <div class="text-white flex flex-col ">
          <div class="border-b-2 border-red-700 w-12"></div>
          <div>
            <h1 class="text-white text-2xl mt-4 md:text-4xl lg:text-6xl">
              We´re a digital
            </h1>
            <span class="text-xl md:2xl lg:text-4xl">info agency.</span>
          </div>

          <a
            href=""
            class=" border-2 border-red-700 text-center mt-4 p-4 hover:bg-red-700 transition-colors duration-500 ease-in-out md:text-xl lg:w-4/12"
            >Get Started</a
          >
        </div>

        <div class="hidden md:flex xl:w-2/5">
          <img src="@/assets/images/watch.png" alt="mobile phone" />
        </div>

        <div class="md:hidden">
          <img
            src="@/assets/images/arrow-down.png"
            alt="arrow"
            @click="goTo"
            class="cursor-pointer "
          />
        </div>
      </section>
    </div>
    <section
      class="flex flex-col items-center pb-12 text-white md:mt-56 md:pb-40 lg:flex-row lg:justify-around lg:mt-52 "
      ref="info"
    >
      <div class="bg-red-600 w-3/4 px-8 py-16 mt-8 md:w-6/12 lg:w-3/12 ">
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
      <div class="bg-gray-800 w-3/4 px-8 py-16 mt-8 md:w-6/12 lg:w-3/12">
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
      <div class="bg-gray-900 w-3/4 px-8 py-16 mt-8 md:w-6/12 lg:w-3/12">
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
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goTo() {
      this.$refs.info.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
