<template>
    <div class="messageContainer">
        <span class="txt">Message: </span>
        <input type="text" v-model="userMessage" name="message" id="message" placeholder="Enter message here">
        <button @click="saveMessage">Send</button>
    </div>
    <p>Message send from page: {{ message }}</p>
</template>

<script>
import { inject, ref, computed } from 'vue';
export default {
    name: "message",
    setup(){
        const setMessage = inject('setPageMessage'); 
        const getMessage = inject('getPageMessage');
        const scope = 'some-scope';
        const userMessage = ref('');

        const saveMessage = () => {
            setMessage(scope, userMessage.value);
        };

        const message = computed(() => getMessage(scope));
        return {
            userMessage,
            saveMessage,
            message,
        };
    }
}
</script>

<style scoped>
.txt{
    font-size: 20px;
    margin-right: 10px;
}
#message{
    width: 300px;
    height: 30px;
    text-align: center;
}
.messageContainer{
    margin-top: 20px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
button{
    height: 30px;
    width: 100px;
    margin-left: 10px;
}
</style>