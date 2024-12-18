<template>
    <header class="menuContainer">
        <nav>
            <ul>
                <li class="feature"> {{ title }}</li>
                <RouterLink class="route" to="/categories/:categoryId"><li>All</li></RouterLink>
                <RouterLink class="route" to="/categories/:categoryId" v-for="(item, index) in nav" :key="index"><li class="options">{{ item }}</li></RouterLink>
              </ul>
        </nav>
    </header>
  </template>
  <script>
  export default {
    name: 'menuComponent',
    props: ["title", "nav"],
  }
  </script>
  <style scoped>
  .menuContainer {
    width: 85%;
    margin-top: 20px;
    margin-left: -30px;
    display: flex;
    flex-direction: column;
    font-family: 'Trebuchet MS', sans-serif;
  }
  ul {
    list-style: none;
    display: flex;
  }
  .route{
    text-decoration: none;
  }
  li {
    color: white;
    text-decoration: none;
    color: #0c3548;
  }
  .options{
    margin-left: 20px;
    margin-right: 30px;
  }
  .feature {
    margin-right: auto;
    font-size: 20px;
    font-weight: bold;
  }
  </style>