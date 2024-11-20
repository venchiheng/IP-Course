<template>
    <div class="cat" :style="{backgroundColor: backgroundColor}">
        <img :src="image" alt="Cat-Image" class="cat-img"/>
        <h4 class="title"> {{ title }}</h4>
        <p class="items"> {{ items }}</p>
    </div>
</template>

<script>
export default {
    name: "category",
    props: ["image", "title", "items", "backgroundColor"]
}
</script>

<style>
.cat {
    margin-top: 20px;
    width: 136px;
    height: 177px;
    border-radius: 10px;
    text-align: center;
    padding: 5px;
}
.cat-img{
    width: 120px;
    height: 120px;
    border-radius: 10px;
}
.title{
    margin-top: 5px;
    font-size: 13px;
    font-weight: 700;
    color: #253D4E;
    text-align: center;
}
.items{
    margin-top: -10px;
    font-size: 12px;
    font-weight: 400;
    color: #B6B6B6;
    text-align: center;
}

</style>




