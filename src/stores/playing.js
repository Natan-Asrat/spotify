import { defineStore } from "pinia";

export const usePlayingStore = defineStore("playing", {
    state: () => ({
        currentSong: {
            name: 'Play it Safe',
            artist: 'The Weeknd',
            album: {
                images: [
                    'https://placehold.co/500'
                ]
            }
        }
    }),
});