
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
        <div class="container">
            <CategoriesComponent />
            <YourMixes />

        </div>
    </main>

</template>

<script setup lang="ts">
import UserComponent from '@/components/Desktop/TopNavbar/UserComponent.vue';

import ButtonNavigation from '@/components/Desktop/TopNavbar/ButtonNavigation.vue';
import NavbarWrapper from '@/components/Desktop/TopNavbar/NavbarWrapper.vue';
import CategoriesComponent from '@/components/Desktop/Body/CategoriesComponent.vue';
import YourMixes from '@/components/Desktop/Body/YourMixes.vue';
</script>


<style lang="scss" scoped>

main {
    display: flex;
    flex-direction: column;
    padding: 0 40px;
    min-height: 100vh;
    margin: 0px;
    .nav-wrapper-component {
        height: 60px;
    }
}
.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>