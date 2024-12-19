<template>
    <Appheader></Appheader>
    <div>
      <Appmenu></Appmenu>
      <RouterView></RouterView>
    </div>

    <Appfooter></Appfooter>
</template>

<script>
import Appheader from '@/components/header.vue';
import Appfooter from '@/components/footer.vue';
import Appmenu from '@/components/menu.vue';

export default {
  components: {
    Appheader,
    Appfooter,
    Appmenu
  }
}
</script>

<style scoped>
div{
  display: flex;
}
</style>