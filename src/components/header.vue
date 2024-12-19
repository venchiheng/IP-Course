<template>
    <div class="container">
        <h1>Header</h1>
        <div>
            <button @click="navigateToPage(1)">Page 1</button>
            <button @click="navigateToPage(2)">Page 2</button>
            <button @click="navigateToPage(3)">Page 3</button>
        </div>
    </div>
</template>

<script>
export default{
    name:"Appheader",
    methods:{
        navigateToPage(pageNumber){
            this.$router.push(`/page/${pageNumber}`);
        }
    }
}
</script>

<style scoped>
.container{
    background-color: aquamarine;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
}
</style>