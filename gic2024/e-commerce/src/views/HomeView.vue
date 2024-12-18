<template>
    <div class="container">
      <RouterView />
      <showCase></showCase>
      <menuComponent :title="'Featured Categories'" :nav="productStore.groups ? productStore.groups : []"/>
      <div class="categories">
        <category 
          v-for="(categoryItem, index) in categories" 
          :key="index" 
          :image="categoryItem.image" 
          :name="categoryItem.name" 
          :productCount="categoryItem.productCount" 
          :color="categoryItem.color"/> 
      </div>
      <div class="promotions">
        <promotion 
          v-for="(promotionItem, index) in promotions" 
          :key="index" 
          :title="promotionItem.title" 
          :image="promotionItem.image" 
          :color="promotionItem.color" 
          :buttonColor="promotionItem.buttonColor" 
          :btnName="promotionItem.btnName">
        </promotion>
      </div>
      <menuComponent :title="'Popular Products'" :nav="productStore.groups ? productStore.groups : []"/>
      <div class="products">
        <product class="items"
        v-for="(product, index) in products"
        :key="index"
        :name="product.name"
        :rating="product.rating"
        :size="product.size"
        :image="product.image"
        :price="product.price"
        :promotionAsPercentage="product.promotionAsPercentage"
        :categoryId="product.categoryId"
        :instock="product.instock"
        :countSold="product.countSold"
        :group="product.group"
        />
      </div>
    </div>
  </template>
  
  <script>
  import showCase from "@/components/showCase.vue";
  import category from "@/components/category.vue";
  import promotion from "@/components/promotion.vue";
  import product from "@/components/product.vue";
  import menuComponent from "@/components/menuComponent.vue";
  import { useProductStore } from "@/stores/product";
  import { onMounted } from "vue";
  import { mapState } from "pinia";
  export default {
    components: {
      showCase,
      category,
      promotion, 
      product,
      menuComponent
    },
    setup() {
      const productStore = useProductStore();
      onMounted(() => {
        productStore.fetchGroups();
        productStore.fetchCategories();
        productStore.fetchPromotions();
        productStore.fetchProducts();
      });
      return { productStore };
    },
    computed:{
      ...mapState(useProductStore, {
        groups: 'groups',
        categories: 'categories',
        promotions: 'promotions',
        products: 'products',
      })
    },
  };
  </script>
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
  .products {
      display: flex;
      justify-content: center;
      gap: 33px;
      font-family: 'Trebuchet MS', sans-serif;
      flex-wrap: wrap;
  }
  .items{
    max-width: 250px; 
    flex: 1 1 auto; 
    margin-top: 10px;
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid lightgray;
  }
  </style>