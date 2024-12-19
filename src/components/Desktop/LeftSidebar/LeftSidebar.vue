<template>
    <nav>
        <header />
        <aside>
            <div class="fixed-height">
                <NavigationComponent/>
            </div>
            <div class="fixed-height">
                <ActionsComponent/>
            </div>
            <div class ="scrollable">
                <CategoriesComponent />

            </div>
            <div class="fixed-height">
                <PlayingComponent/>
            </div>
        </aside>

    </nav>
</template>
<script setup>
import ActionsComponent from './ActionsComponent.vue';
import CategoriesComponent from './CategoriesComponent.vue';
import NavigationComponent from './NavigationComponent.vue';
import PlayingComponent from './PlayingComponent.vue';
</script>
<style lang="scss" scoped>
header {
    height: 45px;
}

.scrollable {
    flex: 1;
    overflow-y: auto;
    height: 100%;
    max-height: 100%;
    direction: rtl;
}
.scrollable ul {
    max-height: 100%;
    margin: 0;
    direction: ltr;
}
.text {
    color: white
}
aside {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    overflow: auto

}
nav {
    display: flex;
    flex-direction: column;
}
</style>