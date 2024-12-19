import { defineStore } from 'pinia';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [
            {
                name: 'Chill Mix',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Insta hits',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Your Top Songs 2021',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Mellow Songs',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Anime Lofi & Chillhop Music',
                image: 'https://placehold.co/50'
            },
            {
                name: 'BG Afro "Select" Values',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Afro "Select" Vibes',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Happy Hits',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Deep Focus',
                image: 'https://placehold.co/50'
            },
            {
                name: 'Instrumental Study',
                image: 'https://placehold.co/50'
            }    
        ],
        genres: [
            {
                name: 'Podcasts',
                image: 'https://placehold.co/200'
            },
            {
                name: 'Charts',
                image: 'https://placehold.co/200'
            },{
                name: 'Discover',
                image: 'https://placehold.co/200'
            },
            {
                name: 'Concerts',
                image: 'https://placehold.co/200'
            },{
                name: 'R&B',
                image: 'https://placehold.co/200'
            },
            {
                name: 'Frequency',
                image: 'https://placehold.co/200'
            },{
                name: 'Soul',
                image: 'https://placehold.co/200'
            },
            {
                name: 'Workout',
                image: 'https://placehold.co/200'
            },{
                name: 'Equal',
                image: 'https://placehold.co/200'
            },
            {
                name: 'Alternative',
                image: 'https://placehold.co/200'
            },
        ]
    })
})