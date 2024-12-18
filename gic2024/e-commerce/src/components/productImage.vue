<template>
    <div class="container">
        <img class="main" src="../assets/image/aespa.jpg" alt="main">
        <div class="arrayImg">
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22.0003 13.0001L22.0004 11.0002L5.82845 11.0002L9.77817 7.05044L8.36396 5.63623L2 12.0002L8.36396 18.3642L9.77817 16.9499L5.8284 13.0002L22.0003 13.0001Z"></path></svg></button>
            <img src="../assets/image/aespa2.jpg" alt="img1">
            <img src="../assets/image/aespa3.jpg" alt="img2">
            <img src="../assets/image/illit.jpg" alt="img3">
            <img src="../assets/image/newjeans.jpg" alt="img4">
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.99974 13.0001L1.9996 11.0002L18.1715 11.0002L14.2218 7.05044L15.636 5.63623L22 12.0002L15.636 18.3642L14.2218 16.9499L18.1716 13.0002L1.99974 13.0001Z"></path></svg></button>
        </div>
    </div>
</template>

<script>
export default{
    name: "productImage"
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
}
.main{
    width: 900px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
}
button{
    width: 50px;
    height: 30px;
    border: none;
    background-color: #30a830;
    border-radius: 20px;
}
svg{
    color: white;
    width: 20px;
    height: 20px;
}
.arrayImg{
    margin-top: 20px;
    display: flex;
    gap: 10px;
    align-items: center;
}
.arrayImg img{
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #30a830;
}
</style>