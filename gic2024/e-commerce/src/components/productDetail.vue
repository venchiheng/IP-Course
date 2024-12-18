<template>
    <div class="container">
        <button class="stock">In stock</button>
        <h2>Seeds of Change Organic Strawberry Yellow</h2>
        <span class="rating">&#11088 &#11088 &#11088 &#11088 &#11088 (5.0)</span>
        <div class="price">
            <span class="discount">$38 </span>
            <span class="og">$42</span>
        </div>
        <span class="ds1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, modi dolorum. Dolore, eveniet consectetur? Illo, officia sit officiis harum, aperiam sint et, voluptates perferendis nostrum voluptatum rerum incidunt in est.</span>
        <div class="btnContainer">
            <input class="input" type="number" placeholder="1">
            <button class="cart"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00436 6.41686L0.761719 3.17422L2.17593 1.76001L5.41857 5.00265H20.6603C21.2126 5.00265 21.6603 5.45037 21.6603 6.00265C21.6603 6.09997 21.6461 6.19678 21.6182 6.29L19.2182 14.29C19.0913 14.713 18.7019 15.0027 18.2603 15.0027H6.00436V17.0027H17.0044V19.0027H5.00436C4.45207 19.0027 4.00436 18.5549 4.00436 18.0027V6.41686ZM6.00436 7.00265V13.0027H17.5163L19.3163 7.00265H6.00436ZM5.50436 23.0027C4.67593 23.0027 4.00436 22.3311 4.00436 21.5027C4.00436 20.6742 4.67593 20.0027 5.50436 20.0027C6.33279 20.0027 7.00436 20.6742 7.00436 21.5027C7.00436 22.3311 6.33279 23.0027 5.50436 23.0027ZM17.5044 23.0027C16.6759 23.0027 16.0044 22.3311 16.0044 21.5027C16.0044 20.6742 16.6759 20.0027 17.5044 20.0027C18.3328 20.0027 19.0044 20.6742 19.0044 21.5027C19.0044 22.3311 18.3328 23.0027 17.5044 23.0027Z"></path></svg>Add to Cart</button>
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z"></path></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 17.8832V16L23 19L18 22V19.9095C14.9224 19.4698 12.2513 17.4584 11.0029 14.5453L11 14.5386L10.9971 14.5453C9.57893 17.8544 6.32508 20 2.72483 20H2V18H2.72483C5.52503 18 8.05579 16.3312 9.15885 13.7574L9.91203 12L9.15885 10.2426C8.05579 7.66878 5.52503 6 2.72483 6H2V4H2.72483C6.32508 4 9.57893 6.14557 10.9971 9.45473L11 9.46141L11.0029 9.45473C12.2513 6.5416 14.9224 4.53022 18 4.09051V2L23 5L18 8V6.11684C15.7266 6.53763 13.7737 8.0667 12.8412 10.2426L12.088 12L12.8412 13.7574C13.7737 15.9333 15.7266 17.4624 18 17.8832Z"></path></svg></button>
        </div>
        <span class="text1">Vendor: NestMart</span>
        <span class="text2">SKU: FWMCBEHRT</span>        
    </div>
</template>

<script>
export default{
    name: "productDetail"
}
</script>

<style scoped>
.container{
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    width: 50%;
}
.stock{
    width: 80px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #b5e0b5;
    color: #30a830;
    font-weight: bold;
}
.rating{
    color: gray;
    margin-bottom: 20px;
}
.discount{
    font-size: 60px;
    color:#30a830;
}
.og{
    margin-left: 30px;
    text-decoration: line-through;
    font-size: 25px;
    color: gray;
}
.ds1{
    color: gray;
    margin-top: 20px;
    margin-bottom: 60px;
}
.cart{
    background-color: #30a830;
    text-align: center;
    color: white;
}
.cart svg{
    color: white;
}
button{
    border: none;
    background-color: white;
    box-shadow: 2px 2px 2px lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}
.text1{
    color: gray;
    margin-bottom: 15px;
}
.text2{
    color: gray;
}
svg{
    width: 20px;
    height: 20px;
    color: gray;
}
.btnContainer{
    display: flex;
    gap: 10px;
    margin-bottom: 70px;
}
.input{
    padding: 5px;
    text-align: center;
    width: 100px;
    font-size: 15px;
    height: 30px;
    border: none;
    border-radius: 5px;
    border: 1px solid #30a830;
    font-weight: bold;
    cursor: pointer;
}
.container2{
    margin-top: 200px;
}
</style>