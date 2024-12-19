<template>
    <section class="mixes-container">
        <header>
            <span class="title">{{ title }}</span>
            <span class="see-all">See all</span>

        </header>
        <div class="mixes">
            <MixItem v-for="m in mixes" :mix="m" :key="m.id"/>
        </div>
    </section>
</template>
<script setup>
import MixItem from './MixItem.vue';
defineProps({
    title: {
        type: String
    },
    mixes: {
        type: Array
    }
})
</script>
<style lang="scss" scoped>
.title {
    font-size: 20px;
    font-weight: 1800px;
    font-style: bold;
    flex: 1;
    letter-spacing: 1px;
}
header{
    display: flex;
}
.mixes{
    display: flex;
    gap: 12px;
    flex-wrap: wrap; // This makes items wrap to the next line

    
}
</style>