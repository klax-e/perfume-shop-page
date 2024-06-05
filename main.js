const app = Vue.createApp({
  data() {
    return {
      companyName: "Perfumes",
      perfumeData: [
        {
          id: 1,
          name: "Amaniam Rose Perfume",
          countInStock: 10,
          image: "./images/products-images/product-2.webp",
          color: "#972d41",
          price: 50,
          description:
            "A rich, elegant fragrance with notes of rose and jasmine, perfect for evening wear.",
          reviewCount: 100,
          rating: 4.25,
        },
        {
          id: 2,
          name: "Sky high Perfume",
          countInStock: 2,
          image: "./images/products-images/product-3.webp",
          color: "#34c1da",
          price: 80,
          description:
            "An uplifting scent with fresh, citrusy notes ideal for daytime wear.",
          reviewCount: 200,
          rating: 3.9,
        },
        {
          id: 3,
          name: "French Lavander Perfume",
          countInStock: 100,
          image: "./images/products-images/product-1.webp",
          color: "#2069a4",
          price: 20,
          description:
            "A calming, soothing fragrance with lavender and vanilla notes, perfect for relaxing.",
          reviewCount: 500,
          rating: 5, 
        },
      ],
      selectedPerfume: 2,
      cart: 0,
    };
  },
  methods: {
    changePerfume(index) {
      this.selectedPerfume = index;
    },

    addToCart() {
      this.cart = this.cart + 1;
    },
  },
  computed:{
    numberOfStars(){
      return Array.from({ length: 5 }, (_, index) => index + 1)
    }
  }
});
