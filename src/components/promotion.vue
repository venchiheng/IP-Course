<template>
    <div class="promotionContainer" :style="{backgroundColor: color}">
        <div class="tt">
            <p class="promotitle">{{ title }}</p>
            <buttonComponent @click="shopNow" :backgroundColor="btnColor" :name="btnName"></buttonComponent>
        </div>
        <img :src="promoimage" alt="image promotion" class="promo-img">
    </div>
</template>

<script>
import buttonComponent from './buttonComponent.vue';
export default{
    name: "promotion",
    props: ["color", "title", "promoimage", "btnColor","btnName"],
    components:{
    buttonComponent,
    },
    methods: {
        shopNow(){
            alert("Let's shop: " +this.title);
        }
    }
}
</script>

<style>
.promotionContainer{
    margin-top: 50px;
    width: 492px;
    height: 300px;
    border-radius: 10px;
    padding: 15px;
    display: flex;
}
.tt{
    margin-left: 20px;
    width: 240px;
    margin-top: 50px;
}
.promotitle{
    font-size: 20px;
    font-weight: 700;
    color: #253D4E;
    margin-bottom: 10px;
}
.promo-img{
    margin-left: 10px;
    margin-top: 30px;
    width: 220px;
    height: 220px;
    border-radius: 10px;
}
</style>