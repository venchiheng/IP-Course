<template>
    <div>
        <h3>Menu</h3>
        <button>Section 1</button>
        <button>Section 2</button>
        <button>Section 3</button>
        <button>Section 4</button>
    </div>
</template>

<script>
export default {
    name: "Appmenu"
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
    background-color: transparent;
    cursor: pointer;
    font-size: 17px;
}
</style>