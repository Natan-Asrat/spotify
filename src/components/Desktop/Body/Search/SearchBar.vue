<template>
    <div class="search-bar-wrapper">
        <Search class="icon"/>
        <input type="text" placeholder="Artists, songs or podcasts"/>
    </div>

</template>
<script setup>
import { Search } from 'lucide-vue-next';
</script>
<style scoped lang="scss">
.search-bar-wrapper {
    max-width: 300px;
    margin-left: 34px;
    background: white;
    border-radius: 40px;
    display: flex;
    padding: 3px 8px;
    input {
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
    }
}
</style>