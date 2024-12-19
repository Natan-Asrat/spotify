<template>
    <div class="mix-wrapper">
        <div class="bg" />
        <div class="image-and-play">
            <img :src="mix.image" :alt="mix.name" />
            <button class="play-icon">
                <Icon class="icon" icon="line-md:play-filled"/>
            </button>
        </div>
        <span>{{ mix.name }}</span>
        <span>{{ mix.artists }}</span>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    mix: {
        type: Object
    }
})
</script>
<style scoped lang="scss">
.mix-wrapper {
    display: flex;
    width: 140px;
    padding: 10px;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    position: relative;
    cursor: pointer;
    &:hover .play-icon {
        visibility: visible; /* Make visible on hover */
        opacity: 1; /* Fade in */
    }
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .play-icon {
        border-radius: 50%;
        padding: 4px;
        height: 45%;
        aspect-ratio: 1 / 1;
        outline: none;
        border: none;
        position: absolute;
        bottom: 8px;
        right: 8px;
        visibility: hidden; /* Initially hidden */
        opacity: 0; /* Initially transparent */
        transition: opacity 0.3s ease;

        .icon {
            width: 70%;
            height: 70%;        
        }
    }
    .image-and-play {
        position: relative;
        width: 100px;
        height: 100px;
        margin-top: 24px;
        
        img {
            width: 95px;
            height: 95px;
        }
    }

}
</style>