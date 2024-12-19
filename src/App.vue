<template>
  <div class="main-container">
    <LeftSidebar class="sidebar left"/>
    <div class="middle-container" :class="{ expanded: isRightSidebarCollapsed }">
      <RouterView />
    </div>
    <RightSidebar ref="rightSidebar" :isRightSidebarCollapsed="isRightSidebarCollapsed" @set-right-sidebar-collapsed="setRightSidebarCollapsed" class="sidebar right" :class="{ collapsed: isRightSidebarCollapsed }"/>
  </div>
</template>
<script setup>
import LeftSidebar from './components/Desktop/LeftSidebar/LeftSidebar.vue'
import RightSidebar from './components/Desktop/RightSidebar/RightSidebar.vue'
import { ref, watch} from 'vue'
const rightSidebar = ref(null)

const isRightSidebarCollapsed = ref(false)
watch(isRightSidebarCollapsed, (value) => {
  if(value){
    setTimeout(() => {
      rightSidebar.value.$el.style.display = 'none';
    }, 290)
  } 
})
const setRightSidebarCollapsed = (value) => {
  isRightSidebarCollapsed.value = value
}
</script>
<style lang="scss" scoped>
$right-sidebar-bgcolor: black;
$left-sidebar-bgcolor: black;
$middle-content-bgcolor: white;

.sidebar {
  flex-shrink: 0;
  height: 100vh;
  max-width: 190px;
  &.left {
    flex: 1;
    background-color: $left-sidebar-bgcolor;
  }
  &.right {
    flex: 1;
    background-color: $right-sidebar-bgcolor;
    transition: all 0.3s ease;
    &.collapsed {
      flex: 0;
      width: 0;
      opacity: 0;
      overflow: hidden;
    }
  }
}

.main-container {
  display: flex;
  height: 100vh;
  width: 100%;
  position: relative; 
  overflow: hidden;
}

.middle-container {
  flex:3;
  transition: flex 0.3s ease;
  background-color: $middle-content-bgcolor;
  overflow-y: auto;
  &.expanded {
    flex: 4;
  }
}

</style>