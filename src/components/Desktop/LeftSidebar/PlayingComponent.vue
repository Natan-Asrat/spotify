<template>
    <div class="left-navbar-components playing">
        <section>
            <img :src="playingStore.currentSong?.album.images[0]" alt="">
            <div class="song-detail-container">
                <h3 class="song-name">{{ playingStore.currentSong?.name }}</h3>
                <h3 class="song-artist">{{ playingStore.currentSong?.artist }}</h3>
            </div>
            
        </section>
    </div>
</template>
<script setup>
import { usePlayingStore } from '@/stores/playing';
const playingStore = usePlayingStore();
</script>
