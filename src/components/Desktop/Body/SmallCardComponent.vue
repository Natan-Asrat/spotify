<template>
    <section class="small-container">
        <p class="title">{{ title }}</p>
        <div class="cards">
            <SmallCardItem v-for="c in cards" :card="c" :key="c.id"/>
        </div>
    </section>
</template>
<script setup>
import SmallCardItem from './SmallCardItem.vue';

defineProps({
    title: {
        type: String
    },
    cards: {
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
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
    padding-bottom: 5px;
    grid-auto-rows: 1fr;
}

</style>