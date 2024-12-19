<template>
    <div class="container">
        <h1>Header</h1>
        <div>
            <RouterLink to="/page/1"><button>Page 1</button></RouterLink>
            <RouterLink to="/page/2"><button>Page 2</button></RouterLink>
            <RouterLink to="/page/3"><button>Page 3</button></RouterLink>
        </div>
    </div>
</template>

<script>
export default{
    name:"Appheader",
}
</script>

<style scoped>
.container{
    background-color: violet;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
}
button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 15px;
}
</style>