<template>
    <div>
        <span>Welcome to page {{ $route.params.pageNumber }}</span>
    </div>
</template>

<script>
export default {
    name: "page",
}

</script>

<style scoped>
div{
    width: 100%;
    height: 400px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
span{
    font-size: 30px;
}
</style>