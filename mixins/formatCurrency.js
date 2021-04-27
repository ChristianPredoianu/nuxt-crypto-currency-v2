export default {
  methods: {
    formatCurrency(num) {
      return new Intl.NumberFormat("en-us", {
        style: "currency",
        currency: "USD"
      }).format(num);
    }
  }
};
