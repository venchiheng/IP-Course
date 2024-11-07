<template>
    This is my first Vue.Js project
<RouterView />
  <div class="categories">
    <category v-for="(category,index) in category" 
      :key="index" 
      :image="category.image" 
      :title="category.title" 
      :items="category.items"
      :backgroundColor="category.backgroundColor">
    </category> 
  </div>
  <div class="promotions">
    <promotion v-for="(promotion,index2) in promotion"
      :key="index2"
      :title="promotion.title"
      :promoimage="promotion.promoimage"
      :color="promotion.color"
      :btnColor="promotion.btnColor"
      :btnName="promotion.btnName">
    </promotion>
  </div>
</template>

<script>
import category from './components/category.vue';
import promotion from './components/promotion.vue';
export default {
  components: { 
    category,
    promotion
  },
  data(){
    return{
      category: [
        {image:'https://i.pinimg.com/736x/b3/c5/5b/b3c55be7ba73d96395256ffa37f3d27f.jpg',title: 'Siren-RIIZE', items: '77 items', backgroundColor: '#FFE3E3'},
        {image:'https://i.pinimg.com/736x/c2/cc/40/c2cc402c737699232aaa890d23117b69.jpg',title: 'Supernova-aespa', items: '190 items', backgroundColor: '#C6E7FF'},
        {image:'https://i.pinimg.com/736x/08/65/a3/0865a38b67e4c7ddda637653ade75870.jpg',title: 'I\'ve-IVE', items: '144 items', backgroundColor: '#F3F3E0'},
        {image:'https://i.pinimg.com/736x/fa/76/32/fa763228c216f079f311aa03b45ef96a.jpg',title: 'Drama-aespa', items: '120 items', backgroundColor: '#FDDBBB'},
        {image:'https://i.pinimg.com/564x/68/09/b8/6809b82ddf8eafb50b4293c5eb74d0ac.jpg',title: 'Ditto-Newjeans', items: '168 items', backgroundColor: '#C5D3E8'},
        {image:'https://i.pinimg.com/736x/a2/a3/93/a2a39390ffd8a1265ea214b9ff070ee8.jpg',title: 'Try Again-Jaehyun', items: '80 items', backgroundColor: '#CBD2A4'},
        {image:'https://i.pinimg.com/736x/7c/76/58/7c76588037b438dbf20809d09aaaa96d.jpg',title: 'Chill Kill-Red Velvet', items: '143 items', backgroundColor: '#EDDFE0'},
        {image:'https://i.pinimg.com/736x/15/7f/a5/157fa52f907e6e5d5f679e17f4c585b9.jpg',title: 'Super Real Me-ILLIT', items: '90 items', backgroundColor: '#CBDCEB'},
        {image:'https://i.pinimg.com/736x/56/57/8f/56578f9d7091d4b600d80648bad48cb1.jpg',title: 'WALK-NCT 127', items: '127 items', backgroundColor: '#DEE5D4'},
        {image:'https://i.pinimg.com/736x/59/35/cf/5935cfbacf3f38790483bacc34f3cfcd.jpg',title: 'Talk Saxy-RIIZE', items: '770 items', backgroundColor: '#E5D9F2'},
      ],
      promotion: [
        {title:'All Time Hit: aespa - Japanese Debut Single [Hot Mess] (Random Ver.)',promoimage:'https://i.pinimg.com/736x/f7/9b/ea/f79bead250cab3cb48570c62a389d9c2.jpg',color:'#F07998',btnColor:'#3BB77E',btnName:'Shop Now'},
        {title:'New Release: Pre Order IZNA-[N/a] The First Mini Album Now (Random Ver.)',promoimage:'https://i.pinimg.com/736x/ab/97/f1/ab97f1b95061cb511f07362a6eb5c58c.jpg',color:'#BB99F7',btnColor:'#0D92F4',btnName:'Order Now'},
        {title:'Trending: NewJeans - Double Single [How Sweet & Bubble Gum] (Random Ver.)',promoimage:'https://i.pinimg.com/736x/1f/74/fc/1f74fc8c883aa2af4dbc9955676bac42.jpg',color:'#7D8ABC',btnColor:'#003161',btnName:'See more'}
      ]
    };
  }
};
</script>

<style>
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
