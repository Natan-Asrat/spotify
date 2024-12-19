
<template>
    <main class="home-page">
        
        <NavbarWrapper class="nav-wrapper-component">
            <template v-slot:left>
                <ButtonNavigation />
            </template>
            <template v-slot:right>
                <UserComponent class="user-component"/>
            </template>
        </NavbarWrapper>
        <CategoriesComponent />

    </main>

</template>

<script setup lang="ts">
import UserComponent from '@/components/Desktop/TopNavbar/UserComponent.vue';

import ButtonNavigation from '@/components/Desktop/TopNavbar/ButtonNavigation.vue';
import NavbarWrapper from '@/components/Desktop/TopNavbar/NavbarWrapper.vue';
import CategoriesComponent from '@/components/Desktop/Body/CategoriesComponent.vue';
</script>


<style lang="scss" scoped>

main {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    height: 100vh;
    .nav-wrapper-component {
        height: 60px;
    }
}
</style>