<template>
    <div class="left-navbar-components">
        <section>
            <ul>
                <li @click="$router.push({name: 'home'})">
                    <Icon class="icon" icon="material-symbols:home" />
                    <span>Home</span>
                </li>
                <li @click="$router.push({name: 'search'})">
                    <Icon class="icon" icon="iconamoon:search" />
                    <span>Search</span>
                </li>
                <li>
                    <Icon class="icon" icon="fluent:library-32-regular" />
                    <span>Your Library</span>
                </li>
            </ul>
        </section>
    </div>
</template>
<script setup>
import {Icon} from '@iconify/vue';
</script>