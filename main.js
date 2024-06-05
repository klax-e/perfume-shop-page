const app = Vue.createApp({
  data() {
    return {
      companyName:"Perfumes",
      perfumeData: [
        {
          id: 1,
          name: "Amaniam Rose Perfume",
          countInStock: 10,
          image: "./images/products-images/product-2.webp",
          color: "#972d41",
          price: 50,
          description: "A rich, elegant fragrance with notes of rose and jasmine, perfect for evening wear.",
          sizes: ["50ml", "100ml"],
          reviewCount: 2,
          rating: 4.25
        },
        {
          id: 2,
          name: "Sky high Perfume",
          countInStock: 2,
          image: "./images/products-images/product-3.webp",
          color: "#34c1da",
          price: 80,
          description: "An uplifting scent with fresh, citrusy notes ideal for daytime wear.",
          sizes: ["30ml", "60ml", "100ml"],
          reviewCount: 2,
          rating: 4.9
        },
        {
          id: 3,
          name: "French Lavander Perfume",
          countInStock: 100,
          image: "./images/products-images/product-1.webp",
          color: "#2069a4",
          price: 20,
          description: "A calming, soothing fragrance with lavender and vanilla notes, perfect for relaxing.",
          sizes: ["50ml", "100ml", "200ml"],
          reviewCount: 2,
          rating: 4.05
        }
        
      ],
      selectedPerfume: 2,
      cart: 0,
    };
  },
});
