<template>
    <div>
        <span>Welcome to page {{ this.$route.params.pageNumber }}</span>
        <span>...............</span>
        <section></section>
        <RouterView></RouterView>
        <message></message>
    </div>
</template>

<script>
import section from './section.vue';
import message from '@/components/message.vue';
import { provide,reactive } from 'vue';
export default {
    name: "page",
    components: {
        section,
        message
    },
    setup() {
    const messages = reactive({});

    const setPageMessage = (scope, message) => {
      messages[scope] = message;
    };

    const getPageMessage = (scope) => {
      return messages[scope] || '';
    };

    const getMessageSender = (scope) => {
      return senders[scope] || '';
    };

    provide('setPageMessage', setPageMessage);
    provide('getPageMessage', getPageMessage);
    provide('getMessageSender', getMessageSender);
  },
}

</script>

<style scoped>
div{
    width: 100%;
    height: 400px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
span{
    font-size: 30px;
}
</style>