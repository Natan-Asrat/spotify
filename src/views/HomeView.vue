
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
            <MixesComponent title="Your Mixes" :mixes="recentlyPlayed"/>
            <MixesComponent title="Made for you" :mixes="yourMixes"/>
            <MixesComponent title="Recently played" :mixes="madeForYou"/>
            <MixesComponent title="Jump back in" :mixes="jumpBackIn"/>

        </div>
    </main>

</template>

<script setup lang="ts">
import UserComponent from '@/components/Desktop/TopNavbar/UserComponent.vue';

import ButtonNavigation from '@/components/Desktop/TopNavbar/ButtonNavigation.vue';
import NavbarWrapper from '@/components/Desktop/TopNavbar/NavbarWrapper.vue';
import CategoriesComponent from '@/components/Desktop/Body/Home/CategoriesComponent.vue';
import { useUserStore } from '@/stores/user';
import MixesComponent from '@/components/Desktop/Body/Home/MixesComponent.vue';

const userStore = useUserStore();
const recentlyPlayed = [...userStore.mixes].splice(1, 2);
const yourMixes = [...userStore.mixes].splice(0, 2);
const madeForYou = [...userStore.mixes].splice(2, 1);
const jumpBackIn = [...userStore.mixes].splice(1, 2);

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
    margin-bottom: 60px;
}
</style>