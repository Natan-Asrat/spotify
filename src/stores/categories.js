import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [
            {
                name: 'Chill Mix',
            },
            {
                name: 'Insta hits',
            },
            {
                name: 'Your Top Songs 2021'
            },
            {
                name: 'Mellow Songs'
            },
            {
                name: 'Anime Lofi & Chillhop Music'
            },
            {
                name: 'BG Afro "Select" Values'
            },
            {
                name: 'Afro "Select" Vibes'
            },
            {
                name: 'Happy Hits'
            },
            {
                name: 'Deep Focus'
            },
            {
                name: 'Instrumental Study'
            }    
        ],
    })
})