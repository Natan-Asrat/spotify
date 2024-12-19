<template>
    <section>
        <div @click="toggleDropdown" class="user-wrapper">
            <img :src="userStore.user.avatar" alt="" />
            <span>{{ userStore.user?.name }}</span>
            <ChevronDown  class="dropdown-icon" />
            
        </div>
        <div class="dropdown" v-if="isDropdownVisible">
            <button @click="goToAccount">
                Account
                <Icon icon="teenyicons:right-solid" />
            </button>
            <button @click="gotoProfile">Profile</button>
            <button @click="gotoSession">Private Session</button>
            <button @click="goToSettings">Settings</button>
            <button @click="logout">Logout</button>
        </div>
    </section>
    
</template>
<script setup>
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const goToAccount = () => {
  console.log('Navigating to account...');
};

const gotoProfile = () => {

}
const gotoSession = () => {

}
const logout = () => {

}
const goToSettings = () => {
  console.log('Navigating to settings...');
};
</script>
<style scoped lang="scss">
.user-wrapper {
    display: flex;
    cursor: pointer;
    align-items: center;
    padding: 3px 6px;
    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }
    span {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 1px;
    }
}
section {
    position: relative;
    border-radius: 50px;

}
.dropdown {
    width: 140px;
    display: flex;
    gap: 6px;
    letter-spacing: 1px;
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 10px;
    padding: 10px;
    border-radius: 10px;
    button {
        text-align: start;
        background-color: transparent;
        border: none;
        outline: none;
        font-size: 12px;
    }
}
</style>