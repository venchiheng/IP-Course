<template>
    <div class="search">
        <div>All Categories <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path></svg> </div>
        <div class="vertical"></div>
        <div class="search-bar">
            <input type="text" placeholder="Search for items">
            <button class="sicon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg></button>
        </div>
    </div>
</template>

<script>
export default{
    name: "searchBox"
}
</script>

<style scoped>
svg{
    width: 15px;
    height: 15px;
}
.vertical{
    width: 4px;
    height: 20px;
    background-color: lightgray;
    border-radius: 5px;
}
.search{
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    gap: 20px;
    width: 800px;
    height: 50px;
    border: 1px solid #30a830;
    border-radius: 5px;
    display: flex;
    margin-right: 50px;
}
.search-bar{
    margin-left: 5px;
}
.search-bar input{
    width: 570px;
    height: 25px;
    border: none;
    border-radius: 5px;
    font-size: 15px;
}
.sicon{
    border: none;
    background-color: white;
}
</style>