<template>
    <div class="container">
        <span>Home > Vegetables & tubers > Seeds of Change Organic</span>
        <div class="detail">
            <productImage></productImage>
            <productDetail></productDetail>
        </div>
        <div class="container2">
            <div class="dsContainer">
                <button>Description</button>
                <button>Additional Information</button>
                <button>Reviews</button>
            </div>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque, consequuntur, iusto saepe commodi expedita exercitationem iste aliquid vel ratione repellendus ut! Blanditiis autem est eius perferendis exercitationem voluptatem placeat.</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque, consequuntur, iusto saepe commodi expedita exercitationem iste aliquid vel ratione repellendus ut! Blanditiis autem est eius perferendis exercitationem voluptatem placeat.</span>
        </div>
    </div>
</template>

<script>
import productImage from '@/components/productImage.vue';
import productDetail from '@/components/productDetail.vue';
export default{
    components: {
        productImage,
        productDetail
    }
}
</script>

<style scoped>
.container{
    font-family: 'Trebuchet MS', sans-serif; 
    width: 80%;
}
span{
    width: 100%;
    margin-bottom: 20px;
    color: gray;
}
.detail{
    display: flex;
}
.container2{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 2px 2px lightgray;
}
.container2 span{
    margin-left: 20px;
    color: gray;
}
.container2 button{
    background-color: white;
    border: none;
    width: 200px;
    border-radius: 20px;
    font-size: 15px;
    height: 40px;
    color: gray;
    font-weight: bold;
    box-shadow: 2px 2px 2px lightgray;
}
.dsContainer{
    display: flex;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
}
</style>