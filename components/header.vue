<template>
    <nav class="navbar px-6 lg:px-12 py-8 mx-auto fixed top-0 w-full z-20 lg:flex lg:justify-between lg:items-center">
        <div class="flex items-center justify-between">
            <NuxtLink to="/" class="flex items-center gap-2">
                <img class="w-16 h-16" src="~/assets/img/logo-thumb.png" width="32" height="32" alt="Tanuan Institute Inc.">
                <div class="lg:flex flex-col hidden">
                    <div class="text-lg text-gray-50 font-semibold uppercase leading-none font-serif">Tanuan Institute Inc.</div>
                    <div class="text-sm text-gray-50 text-medium">Quality Education with Quality Service</div>
                </div>
            </NuxtLink>

            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
                <button @click="toggleDrawer" type="button" class="text-gray-50 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5.75A.75.75 0 0 1 2.75 5h15.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 5.75Zm0 12a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75ZM2.75 11a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5H2.75Z"/></svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="nav-menu px-8 py-6 transition-all duration-300 ease-in-out bg-white shadow-md lg:shadow-none lg:mt-0 lg:p-0 lg:top-0 lg:bg-transparent lg:relative lg:w-auto lg:flex lg:items-center hidden">
            <div class="flex flex-col text-center justify-center space-y-8 lg:mt-0 lg:flex-row lg:space-y-0">
                <NuxtLink to="/" class="text-gray-50 lg:font-medium lg:mx-6 hover:text-blue-500">Home</NuxtLink>
                <NuxtLink to="/about-us" class="text-gray-50 lg:font-medium lg:mx-6 hover:text-blue-500">Discover TI</NuxtLink>
                <NuxtLink to="/services" class="text-gray-50 lg:font-medium lg:mx-6 hover:text-blue-500">Admission</NuxtLink>
                <NuxtLink to="/services" class="text-gray-50 lg:font-medium lg:mx-6 hover:text-blue-500">Academics</NuxtLink>
                <NuxtLink to="/projects" class="text-gray-50 lg:font-medium lg:mx-6 hover:text-blue-500">Student Corner</NuxtLink>
                <NuxtLink to="/contact-us" class="text-gray-50 lg:font-medium lg:mx-6 hover:text-blue-500">Contact Us</NuxtLink>
            </div>
        </div>
    </nav>
    
    <DrawerNavMenu v-show="isDrawerOpen" @click="toggleDrawer" />
</template>

<script setup>
import { ref } from 'vue';

const isDrawerOpen = ref(false);

const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
};
</script>

<style lang="css" scoped>
    nav.stay-sticky {
        @apply bg-white py-4 text-gray-700 shadow-md transition-all duration-300 ease-in-out;
    }

    nav.stay-sticky * {
        @apply text-gray-700;
    }
</style>