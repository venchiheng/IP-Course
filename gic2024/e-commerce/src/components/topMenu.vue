<template>
        <div class="Container">
            <div class="header">
                <div class="logo-container">
                    <img src="../assets/image/logo.jpg" alt="logo" class="logo">
                    <div class="text">
                        <h2>SKIBIDI</h2>
                        <p>Album & Merch</p>
                    </div>
                </div>
                <searchBox/>
                <div class="right">
                    <menuItemComponent v-for="(menuItem, index) in menuItems"
                    :key="index"
                    :title="menuItem.title"/>
                </div>
            </div>
            <div class="hl"></div>
            <div class="mini-header">
                <div class="browse"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3C2.44772 3 2 3.44772 2 4V10C2 10.5523 2.44772 11 3 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H3ZM4 9V5H9V9H4ZM3 13C2.44772 13 2 13.4477 2 14V20C2 20.5523 2.44772 21 3 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H3ZM4 19V15H9V19H4ZM13 4C13 3.44772 13.4477 3 14 3H21C21.5523 3 22 3.44772 22 4V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V4ZM15 5V9H20V5H15ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H21C21.5523 21 22 20.5523 22 20V14C22 13.4477 21.5523 13 21 13H14ZM15 19V15H20V19H15Z"></path></svg> Browse All Categories <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg></div>
                <div class="btnContainer">
                    <button class="hot"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 14.6345 19.2697 13.8032 19 13.0296C17.3333 14.6765 16.0667 15.5 15.2 15.5C19.1954 8.5 17 5.5 11 1.5C11.5 6.49951 8.20403 8.77375 6.86179 10.0366C5.40786 11.4045 4.5 13.3462 4.5 15.5C4.5 19.6421 7.85786 23 12 23ZM12.7094 5.23498C15.9511 7.98528 15.9666 10.1223 13.463 14.5086C12.702 15.8419 13.6648 17.5 15.2 17.5C15.8884 17.5 16.5841 17.2992 17.3189 16.9051C16.6979 19.262 14.5519 21 12 21C8.96243 21 6.5 18.5376 6.5 15.5C6.5 13.9608 7.13279 12.5276 8.23225 11.4932C8.35826 11.3747 8.99749 10.8081 9.02477 10.7836C9.44862 10.4021 9.7978 10.0663 10.1429 9.69677C11.3733 8.37932 12.2571 6.91631 12.7094 5.23498Z"></path></svg> Hot Deals</button>
                    <menuItemComponent class="menuCon" v-for="(mini, index) in minis"
                    :key="index"
                    :title="mini.title"/>
                    <div class="logo-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.9381 8H21C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8ZM3 10V14H4V10H3ZM20 10V14H21V10H20ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path></svg>
                        <div class="text">
                            <h2>012 345 678</h2>
                            <p>24 / 7 Support Center</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="hl"></div>
        </div>
</template>

<script>
import searchBox from './searchBox.vue';
import menuItemComponent from './menuItemComponent.vue';
export default{
    name: "header",
    components: {searchBox, menuItemComponent},
    data(){
        return{
            menuItems: [
                {title: 'Account'},
                {title: 'Compare'},
                {title: 'Wishlist'},
                {title: 'Cart'},
            ],
            minis: [
                {title: 'Home'},
                {title: 'Food'},
                {title: 'Vegetable'},
                {title: 'Drink'},
                {title: 'Cookies'},
                {title: 'Meat'},
                {title: 'Bakery'}
            ]   
        }
    }
}
</script>

<style scoped>
.Container{
    width: 80%;
    font-family: 'Trebuchet MS', sans-serif;
}
.header{
    display: flex;
    justify-content: space-between;
}
.logo-container{
    display: flex;
    align-items: center;
}
.logo{
    width: 80px;
    height: 80px;
}
.hot{
    margin-left: 25px;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    font-size: 17px;
}
.hot svg{
    color: rgb(48, 168, 48);
}
.text h2{
    margin-bottom: -15px;
    color: rgb(48, 168, 48);
    text-align: center;
}
.text p{
    text-align: center;
    font-size: 14px;
    color: gray;
}
.logo-container svg{
    width: 35px;
    height: 35px;
    margin-right: 10px;
    margin-left: 170px;
}
.logo-container .text{
    color: gray;
}
.right{
    display: flex;
    justify-content: space-evenly;
}
svg{
    width: 20px;
    height: 20px;
}
.mini-header{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.menuCon{
    width: 100px;
}
.hl{
    width: 100%;
    height: 2px;
    background-color: lightgray;
    margin-bottom: 15px;
    margin-top: 15px;
}
.browse{
    background-color: rgb(48, 168, 48);
    color: white;
    align-items: center;
    width: 210px;
    height: 50px;
    padding: 10px;
    display: flex;
    gap: 5px;
    border-radius: 5px;
}
.btnContainer{
    width: 80%;
    display: flex;
}

</style>