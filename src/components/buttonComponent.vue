<template>
    <button class="btnComp" :style="{backgroundColor: backgroundColor}">{{ name }}<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg></button>
</template>

<script>
export default {
    name: "btnComp",
    props: ["backgroundColor", "name"]
}
</script>

<style>
.btnComp{
    margin-top: 30px;
    width: 110px;
    height: 31px;
    border-radius: 3px;
    border: none;
    padding-top: 8px;
    padding-left: 8px;
    padding-right: 15px;
    padding-bottom: 8px;
    font-size: 14px;
    cursor: pointer;
    color: aliceblue;
}

.icon{
    width: 10.83px;
    height: 10px;
    margin-left: 8px;
}
</style>