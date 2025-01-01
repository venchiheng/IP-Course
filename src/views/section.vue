<template>
    <span>This is Section {{ this.$route.params.sectionId }} of Page {{ this.$route.params.pageNumber }}</span>
</template>

<script>
export default{
    name: "section"
}
</script>

<style>

</style>