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
    align-items: center;
    justify-content: space-between;
    padding: 5px 40px;

    .mid {
        flex: 1;
    }
}
</style>