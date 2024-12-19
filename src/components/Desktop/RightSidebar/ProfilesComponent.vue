<template>
    <div class="profiles">
        <ProfileItem v-for="profile in profilesStore.friends" :key="profile.id" :profile="profile"/>
    </div>
</template>
<script setup>

import ProfileItem from './ProfileItem.vue';
import { useFriendsStore } from '@/stores/friends';
const profilesStore = useFriendsStore();

</script>

<style lang="scss" scoped>
.profiles {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
}
</style>