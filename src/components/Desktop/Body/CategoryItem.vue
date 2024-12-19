<template>
    <div class="category-wrapper">
        <div class="bg" />
        <img :src="category.image" :alt="category.name" />
        <span>{{ category.name }}</span>
        <button class="play-icon">
            <Icon class="icon" icon="line-md:play-filled"/>
        </button>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';
defineProps({
    category: {
        type: Object
    }
})
</script>
<style scoped lang="scss">
.category-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    cursor: pointer;
    .play-icon {
        border-radius: 50%;
        padding: 4px;
        height: 80%;
        outline: none;
        border: none;
        aspect-ratio: 1; 
        padding: 4px;
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s ease;

        margin-right: 8px;
        .icon {
            width: 70%;
            height: 70%;
        }
    }
    &:hover .play-icon {
        visibility: visible; 
        opacity: 1; 
    }
    img {
        width: 60px;
        height: 60px;
    }
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    span {
        letter-spacing: 1px;
        font-size: 12px;
        flex: 1;
    }
}
</style>