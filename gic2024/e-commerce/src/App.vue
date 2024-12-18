<template>
  <div>
    <topMenu class="topMenu"></topMenu>
    <RouterView></RouterView>
  </div>
    
</template>
<script>
import topMenu from './components/topMenu.vue';
export default {
  components: {
    topMenu
  }
}
</script>
<style scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>