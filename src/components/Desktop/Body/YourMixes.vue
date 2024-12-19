<template>
    <section class="mixes-container">
        <header>
            <span class="title">Your Mixes</span>
            <span class="see-all">See all</span>

        </header>
        <div class="mixes">
            <MixItem v-for="m in userStore.mixes" :mix="m" :key="m.id"/>
        </div>
    </section>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import MixItem from './MixItem.vue';
const userStore = useUserStore();
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