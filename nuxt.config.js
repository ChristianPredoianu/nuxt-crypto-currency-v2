import axios from "axios";
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "CryptoInfo - A website for cryptocurrencies",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "CryptoInfo - A website for cryptocurrencies"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Poppins:wght@400;800&display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  colorMode: {
    classSuffix: ""
  },
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    ["@nuxtjs/tailwindcss"],
    ["@nuxtjs/color-mode"]
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    ["@nuxtjs/axios"],
    "@nuxtjs/axios",
    [
      "@nuxtjs/fontawesome",
      {
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faSortDown", "faSortUp", "faSearch", "faPlus", "faHome"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: [
              "faTwitterSquare",
              "faInstagram",
              "faYoutube",
              "faReddit",
              "faGithub",
              "faFacebook",
              "faChrome"
            ]
          }
        ]
      }
    ]
  ],

  axios: {},

  build: {},
  generate: {
    async routes() {
      return await axios
        .get("https://api.coinranking.com/v1/public/coins/")
        .then(res => {
          const routes = [];
          console.log(res.data.data);
          res.data.data.coins.forEach(element => {
            routes.push(`/aboutcrypto/${element.id}`);
          });
          return routes;
        });
    }
  }
};
