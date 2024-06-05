const app = Vue.createApp({
  data() {
    return {
      perfumeData: [
        {
          id: 1,
          name: "Amaniam Rose Perfume",
          countInStock: 10,
          image: "./images/products-images/product-2.webp",
          color: "#972d41",
          price: 50,
        },
        {
          id: 2,
          name: "Sky high Perfume",
          countInStock: 2,
          image: "./images/products-images/product-3.webp",
          color: "#34c1da",
          price: 80,
        },
        {
          id: 3,
          name: "French Lavander Perfume",
          countInStock: 100,
          image: "./images/products-images/product-1.webp",
          color: "#2069a4",
          price: 20,
        },
      ],
      selectedPerfume: 1,
      cart: 0,
    };
  },
});
