<template>
    <div>
        <span>Welcome to page {{ pageNumber }}</span>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: "page",
    setup(){
        const route = useRoute()
        return {
            pageNumber: route.params.pageNumber,
        }
    }
}

</script>

<style scoped>
div{
    width: 100%;
    height: 400px;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: center;
}
span{
    font-size: 30px;
}
</style>