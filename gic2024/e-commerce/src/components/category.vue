<template>
    <RouterLink class="route" to="/categories/:categoryId">
    <div class="cat" :style="{backgroundColor: color}">
        <img :src="image" alt="Cat-Image" class="cat-img"/>
        <h4 class="name"> {{ name }}</h4>
        <p class="productCount"> {{ productCount }}</p>
    </div></RouterLink>
</template>

<script>
export default {
    name: "category",
    props: ["image", "name", "productCount", "color"]
}
</script>

<style scoped>
.route{
    text-decoration: none;
}
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
.name{
    margin-top: 5px;
    font-size: 13px;
    font-weight: 700;
    color: #253D4E;
    text-align: center;
}
.productCount{
    margin-top: -10px;
    font-size: 12px;
    font-weight: 400;
    color: rgb(173, 171, 171);
    text-align: center;
    font-weight: bold;
}

</style>




