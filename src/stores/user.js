import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {
            name: 'John Doe',
            avatar: 'https://placehold.co/50'
        }
    })
})