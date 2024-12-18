<template>
    <div class="showCase">
            <div class="left">
                <h1>Don't miss amazing album deals</h1>
                <span>Sign up for our newsletter to get the latest deals</span>
                <div class="subscribe">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z"></path></svg>
                    <input type="email" placeholder="Enter your email">
                    <button>Subscribe</button>
                </div>
            </div>
            <img src="../assets/image/showCase.png" alt="showcase">
    </div>
</template>

<script>
export default{
    name: "showCase",
}
</script>

<style scoped>
.showCase{
    width: 80%;
    background-color: beige;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    font-family: 'Trebuchet MS', sans-serif;
    height: 500px;
}
.left{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 120px;
    margin-top: -50px;
    color: rgb(18, 18, 82);
}
.left h1{
    font-size: 60px;
    width: 70%;
    margin-bottom: 20px;
}
.left span{
    font-size: 17px;
    color: gray;
}
svg{
    width: 20px;
    height: 20px;
}
img{
    margin-left: 50px;
    width: 550px;
    height: 600px;
    margin-top: -20px;
}
.subscribe{
    margin-top: 40px;
    background-color: white;
    border: none;
    width: 45%;
    border-radius: 20px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.subscribe button{
    background-color: rgb(48, 168, 48);
    color: white;
    border: none;
    height: 100%;
    width: 30%;
    border-radius: 20px;
    font-size: 15px;
}
.subscribe input{
    margin-left: 5px;
    height: 90%;
    border: none;
    width: 60%;
}
.subscribe svg{
    color: gray;
    margin-left: 10px;
}

</style>