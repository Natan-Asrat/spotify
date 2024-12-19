<template>
    <div class="sidebar">
        <HeaderComponent @set-right-sidebar-collapsed="$emit('set-right-sidebar-collapsed', $event)" :isRightSidebarCollapsed="isRightSidebarCollapsed"/>
        <p class="description">
            Let friends and followers on Spotify know what you're listening to.
        </p>
        <ProfilesComponent/>
        <p class="description">
            Go to Settings > Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.
        </p>
        <button>SETTINGS</button>
    </div>
</template>
<script setup>
import HeaderComponent from './HeaderComponent.vue';
import ProfilesComponent from './ProfilesComponent.vue';
defineProps({
    isRightSidebarCollapsed: {
        type: Boolean
    }
})

</script>
<style lang="scss" scoped>
.right-sidebar {
    font-size: 16px;
}   
.sidebar {
    padding: 0 20px;
    color: white;
}
.description {
    font-size: 12px;
    margin-top: 8px;
    letter-spacing: 0.5px;
}
button {
    width: 100%;
    padding: 8px;
    font-size: 11px;
    font-weight: 600;
    border-radius: 15px;
    letter-spacing: 1px;
    outline: none;
    border: none;
}
</style>