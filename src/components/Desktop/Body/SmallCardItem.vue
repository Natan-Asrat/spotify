<template>
    <div class="small-card-wrapper">
        <img :src="card.image" :alt="card.name"/>
        <span>{{ card.name }}</span>
    </div>
</template>
<script setup>
defineProps({
    card: {
        type: Object
    }
})
</script>
<style lang="scss" scoped>
.small-card-wrapper {
    width: 140px;
    height: 140px;
    position: relative;
    span {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 16px;
        letter-spacing: 1px;
        font-style: bold;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
}
</style>