<template>
  <div>
    <h1>This is my first Vue.js project</h1>
    <RouterView />

    <div class="categories">
    <category 
      v-for="(categoryItem, index) in groupCategories" 
      :key="index" 
      :image="categoryItem.image" 
      :name="categoryItem.name" 
      :productCount="categoryItem.productCount" 
      :color="categoryItem.color">
    </category> 
  </div>

  <div class="promotions">
    <promotion 
      v-for="(promotionItem, index) in groupPromotions" 
      :key="index" 
      :title="promotionItem.title" 
      :image="promotionItem.image" 
      :color="promotionItem.color" 
      :buttonColor="promotionItem.buttonColor" 
      :btnName="promotionItem.btnName">
    </promotion>
  </div>
    </div>
</template>

<script>
import axios from "axios";
import category from "./components/category.vue";
import promotion from "./components/promotion.vue";
import { mapState } from "pinia";
import { useProductStore } from "./stores/product";

export default {
  components: {
    category,
    promotion, 
  },
  data() {
    return {
      categories: [],
      promotions: [],
      currentGroupName: 'Group B'
    };
  },
  computed: {
    ...mapState(useProductStore, {
    popularProducts: 'getPopularProducts', 
    }),
    groupCategories() {
      const store = useProductStore();
      return store.getCategoriesByGroup(this.currentGroupName); 
    },
    groupPromotions() {
      const store = useProductStore();
      return store.getProductsByGroup(this.currentGroupName); 
    },
  },
  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
  },
  methods: {
    fetchCategories() {
      axios
        .get("http://localhost:3000/api/categories")
        .then((response) => {
          this.categories = response.data; 
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    fetchPromotions() {
      axios
        .get("http://localhost:3000/api/promotions")
        .then((response) => {
          this.promotions = response.data; 
        })
        .catch((error) => {
          console.error("Error fetching promotions:", error);
        });
    },
  },
};
</script>

<style scoped>
.categories {
    display: flex; 
    gap: 15px;
    font-family: 'Trebuchet MS', sans-serif; 
}

.promotions {
    display: flex;
    gap: 15px;
    font-family: 'Trebuchet MS', sans-serif;
}
</style>
