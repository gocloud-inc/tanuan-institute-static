<template>
    <footer class="bg-gray-800">
        <div class="container py-12">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div>
                    <p class="font-semibold text-gray-400">Quick Link</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <NuxtLink to="/" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Home</NuxtLink>
                        <NuxtLink to="/about-us" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Discover TI</NuxtLink>
                        <NuxtLink to="/services" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Admission</NuxtLink>
                        <NuxtLink to="/how-we-work" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Academics</NuxtLink>
                        <NuxtLink to="/contact-us" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">News & Events</NuxtLink>
                        <NuxtLink to="/contact-us" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Contact Us</NuxtLink>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400">Services</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Student Corner</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Careers</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Going Around</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Unified School Online Enrollment</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">SHS Online Enrollment</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">College & MAED Online Enrollment</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400">Portal</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">K12 Student Portal</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">SHS Student Portal</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">College Student Portal</a>
                    </div>
                </div>

                <div>
                    <p class="font-semibold text-gray-400">Contact Us</p>

                    <div class="flex flex-col items-start mt-5 space-y-2">
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">J. Gonzales Street, Barangay 4, Tanauan City, 4232 Batangas, Philippines</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Admin Office (043) 778-1742</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">College Department (043)784-3828</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">Registrar Office (043) 784-1611</a>
                        <a href="#" class="text-gray-50 transition-colors duration-300 hover:underline hover:text-blue-50">tanauan.institute@yahoo.com</a>
                    </div>
                </div>
            </div>
            
            <hr class="my-6 border-gray-500 md:my-10">
            
            <div class="flex flex-col items-center justify-between sm:flex-row">
                <p class="mt-4 text-sm text-gray-300 sm:mt-0">© Copyright 2023 Tanuan Institute Inc. All Rights Reserved.</p>

                <div class="flex mt-3 -mx-2 sm:mt-0">
                    <NuxtLink to="/terms-and-conditions" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Terms of Use</NuxtLink>
                    <NuxtLink to="/privacy-policy" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Privacy Policy</NuxtLink>
                    <a href="#" class="mx-2 text-sm text-gray-300 transition-colors duration-300 hover:text-gray-200">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
</template>