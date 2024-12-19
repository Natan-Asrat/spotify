import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {
            name: 'John Doe',
            avatar: 'https://placehold.co/50'
        },
        mixes: [
            {
                name: 'Chill Mix',
                artists: 'Jullia Wolf, Khalid, and more',
                image: 'https://placehold.co/100'
            },
            {
                name: 'Pop Mix',
                artists: 'Jullia Wolf, Khalid, and more',
                image: 'https://placehold.co/100'
            },
            {
                name: 'Phieze Mix',
                artists: 'Jullia Wolf, Khalid, and more',
                image: 'https://placehold.co/100'
            },
            {
                name: 'Indie Mix',
                artists: 'Jullia Wolf, Khalid, and more',
                image: 'https://placehold.co/100'
            },
            {
                name: 'Daily Mix',
                artists: 'Jullia Wolf, Khalid, and more',
                image: 'https://placehold.co/100'
            },
            {
                name: 'Indie Mix',
                artists: 'Jullia Wolf, Khalid, and more',
                image: 'https://placehold.co/100'
            },
            {
                name: 'Daily Mix',
                artists: 'Jullia Wolf, Khalid, and more',
                image: 'https://placehold.co/100'
            },
        ],
        genres: [
            {
                name: 'Pop',
                image: 'https://placehold.co/200'
            },
            {
                name: 'Hiphop',
                image: 'https://placehold.co/200'
            },
            {
                name: 'Afro',
                image: 'https://placehold.co/200'
            },
            {
                name: 'Rap',
                image: 'https://placehold.co/200'
            }
        ]
    })
})