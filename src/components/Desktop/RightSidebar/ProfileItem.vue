<template>
    <div class="profile-container">
        <img :src="profile.image" :alt="profile.name"/>
        <div class="texts">
            <p>{{ profile.name }}</p>
            <p>@{{ profile.username }}</p>
        </div>
        
    </div>
</template>
<script setup>
defineProps({
    profile: {
        type: Object
    }
})
</script>
<style lang="scss" scoped>
.profile-container {
    display: flex;
    img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
    }
    p {
        font-size: 10px;
        margin: 0;
        font-weight: 100;
        letter-spacing: 2px;
    }
    .texts {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 4px;
    }
}
</style>