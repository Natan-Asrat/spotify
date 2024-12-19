import { defineStore } from "pinia";

export const useFriendsStore = defineStore("friends", {
    state: () => ({
        friends: [
            {
                name: 'Alia',
                username: 'alia',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Jannatul',
                username: 'jannatul',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Nate',
                username: 'nate',
                image: 'https://placehold.co/50'
            }
        ],
    }),
});