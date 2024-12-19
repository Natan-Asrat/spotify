<template>
    <div class="button-wrapper">
        <button @click="$router.go(-1)">
            <div class="nav-button-wrapper">
                <Icon class="icon" icon="ion:chevron-back-sharp" />                
            </div>
        </button>
        <button>
            <div class="nav-button-wrapper">
                <Icon class="icon" icon="ion:chevron-forward-sharp" />
            </div>
        </button>
    </div>
</template>
<script setup>
import { Icon } from '@iconify/vue';

</script>
<style scoped lang="scss">
.nav-button-wrapper {
    padding: 3px;
    opacity: 50%;
    border-radius: 50%;
    .icon {
        width: 20px;
        height: 20px;
        background-color: transparent;
    }
}
.button-wrapper {
    display: flex;
    gap: 10px;
    button {
        background-color: transparent;
        border: none;
        outline: none;
    }
}

</style>