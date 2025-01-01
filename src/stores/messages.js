import { defineStore } from 'pinia'

export const useMessageStore = defineStore('messages', {
    state: () => ({
      pageMessages: {}, 
      sectionMessages: {}, 
    }),
    actions: {
      setPageMessage(pageNumber, message) {
        this.pageMessages[pageNumber] = message;
      },
      setSectionMessage(sectionId, message) {
        this.sectionMessages[sectionId] = message;
      },
      getPageMessage(pageNumber) {
        return this.pageMessages[pageNumber] || '';
      },
      getSectionMessage(sectionId) {
        return this.sectionMessages[sectionId] || '';
      },
    },
});