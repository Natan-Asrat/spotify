<template>
    <ul class="categories left-navbar-components">
        <li class="category" v-for="category in categoriesStore.categories" :key="category.id">
           <span>{{ category.name }}</span>
        </li>
    </ul>
</template>

<script setup>
import { useCategoriesStore } from '@/stores/categories';
const categoriesStore = useCategoriesStore();
</script>