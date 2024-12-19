<template>
    <div class="header-container" :class="{ collapsed: isRightSidebarCollapsed }">
        <h2 class="text">Friend Activity</h2>
        <Icon icon="cil:user-follow" class="icon" />
        <X @click="$emit('set-right-sidebar-collapsed', true)" class="icon"/>
    </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { X } from "lucide-vue-next";
defineProps({
    isRightSidebarCollapsed: {
        type: Boolean
    }
})
</script>
<style lang="scss" scoped>
.header-container {
    font-size: 18px; 
    align-items: center;
    display: flex;
    padding: 10px 0;
    height: 25px;
    max-height: 25px;
    gap: 5px;
}
.text {
    flex: 1;
    font-size: 12px;
    padding: 0;
    color: white;
    margin: 0;
    height: 14px;
    text-align: left;
}
.icon {
    color: white;
    width: 20px;
    height: 20px;
}
</style>