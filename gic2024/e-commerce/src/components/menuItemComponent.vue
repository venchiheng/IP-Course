<template>
    <RouterLink to="/categories/:categoryId"><button class="menuItem">{{ title }}</button></RouterLink>
</template>

<script>
export default {
    name: "menuComponent",
    props: ["title"],
}
</script>

<style scoped>
.menuItem{
    margin-top: 27px;
    width: 100px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 17px;
}
</style>