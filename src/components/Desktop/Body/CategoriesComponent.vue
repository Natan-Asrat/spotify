<template>
    <section>
        <p class="greeting">Good Morning</p>
        <div class="categories">
            <CategoryItem v-for="c in categoriesStore.categories.slice(0, 6)" :category="c" :key="c.id"/>
        </div>
    </section>
</template>
<script setup>
import CategoryItem from './CategoryItem.vue';
import { useCategoriesStore } from '@/stores/categories';
const categoriesStore = useCategoriesStore();
</script>
<style scoped lang="scss">
.greeting {
    font-size: 26px;
    font-weight: 1800px;
    font-style: bold;
    letter-spacing: 2px;
}
.categories {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 8px;
}
</style>