<template>
    <Appheader></Appheader>
    <RouterView></RouterView>
    <Appfooter></Appfooter>
</template>

<script>
import Appheader from '@/components/header.vue';
import Appfooter from '@/components/footer.vue';

export default {
  components: {
    Appheader,
    Appfooter,
  }
}
</script>

<style scoped>
</style>