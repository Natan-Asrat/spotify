<template>
    <div class="navbar-wrapper">
        <slot class="left" name="left"/>
        <div class="mid">
            <slot />

        </div>
        <slot name="right"/>
        
    </div>
</template>
<style lang="scss" scoped>
.navbar-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;

    .mid {
        flex: 1;
    }
}
</style>