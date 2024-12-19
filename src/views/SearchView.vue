<template>
    <main class="search-page">
        
        <NavbarWrapper class="nav-wrapper-component">
            <template v-slot:left>
                <ButtonNavigation />
            </template>
            <template v-slot>
                <SearchBar/>
            </template>
            <template v-slot:right>
                <UserComponent class="user-component"/>
            </template>
        </NavbarWrapper>
        <div class="container">
            <MixesComponent title="Recent searches" :mixes="recentlyPlayed"/>
            <WideComponent title="Your top genres" :cards="genres" />
        </div>

    </main> 
</template>

<script setup>
import SearchBar from '@/components/Desktop/Body/Search/SearchBar.vue';
import UserComponent from '@/components/Desktop/TopNavbar/UserComponent.vue';
import ButtonNavigation from '@/components/Desktop/TopNavbar/ButtonNavigation.vue';
import NavbarWrapper from '@/components/Desktop/TopNavbar/NavbarWrapper.vue';
import { useUserStore } from '@/stores/user';
import MixesComponent from '@/components/Desktop/Body/MixesComponent.vue';
import WideComponent from '@/components/Desktop/Body/WideComponent.vue';

const userStore = useUserStore();
const recentlyPlayed = [...userStore.mixes].splice(1, 2);
const genres = userStore.genres

</script>

<style lang="scss" scoped>

main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0px;
    .nav-wrapper-component {
        height: 60px;
    }
}
.container {
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    padding: 0 40px;
    gap: 40px;
    margin-bottom: 60px;
}
</style>