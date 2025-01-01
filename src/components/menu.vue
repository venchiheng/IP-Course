<template>
    <div>
        <h3>Menu</h3>
        <RouterLink :to="`/page/${pageNumber}/section/1`"><button>Section 1</button></RouterLink>
        <RouterLink :to="`/page/${pageNumber}/section/2`"><button>Section 2</button></RouterLink>
        <RouterLink :to="`/page/${pageNumber}/section/3`"><button>Section 3</button></RouterLink>
        <RouterLink :to="`/page/${pageNumber}/section/4`"><button>Section 4</button></RouterLink>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
    name: "Appmenu",
    setup(){
        const route = useRoute();
        return{
            pageNumber: route.params.pageNumber,
            sectionId: route.params.sectionId,
        }
    }
}
</script>

<style scoped>
h3{
    margin-left: 30px;
}
div{
    background-color: violet;
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 15%;
}
button{
    border: 1px solid black;
    height: 50px;
    width: 100%;
    background-color: transparent;
    cursor: pointer;
    font-size: 17px;
}
</style>