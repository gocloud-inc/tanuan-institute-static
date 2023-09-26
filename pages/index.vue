<script setup lang="ts">
    import hero from "~/assets/img/ti-home.jpg"

    useSeoMeta({
        title: 'Tanuan Institute Inc.',
        ogTitle: 'Tanuan Institute Inc.',
        description: 'Tanuan Institute envisions itself to be a world class institution dedicated to higher learning and modern research. It hopes to contribute to the humane and holistic development of the Filipino youth through toptier quality education.',
        ogDescription: 'Tanuan Institute envisions itself to be a world class institution dedicated to higher learning and modern research. It hopes to contribute to the humane and holistic development of the Filipino youth through toptier quality education.',
        ogImage: '~/assets/img/logo-thumb.png',
    })
    

    const heroBanner = {
        backgroundImage: `url(${hero})`,
    }
</script>

<template>
    <section class="hero-section pb-40 py-48 bg-gradient-to-t from-blue-50 via-pink-50 to-red-50 backdrop-blur-md relative bg-no-repeat bg-cover bg-center" :style="heroBanner">
        <div class="container text-center">
            <h1 class="flex flex-col text-5xl lg:text-7xl font-extrabold animate__animated animate__fadeInUp">
                <span class="leading-1 text-transparent bg-gradient-to-br bg-clip-text from-teal-50 via-indigo-50 to-sky-50">
                    Welcome to, 
                </span>

                <span class="leading-1 text-transparent bg-gradient-to-tr bg-clip-text from-blue-50 via-pink-50 to-red-50">
                    Tanuan Institute Inc.
                </span>
            </h1>

            <p class="lg:max-w-3xl lg:mx-auto mt-6 text-lg text-gray-50 md:text-xl animate__animated animate__fadeInUp">
                We offer a wide range of educational programs, from elementary to senior high school, as well as college and graduate courses.
            </p>

            <div class="flex flex-wrap justify-center mt-8 gap-4 animate__animated animate__fadeInUp">
                <NuxtLink to="/contact-us" class="button-primary max-sm:w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.001a4 4 0 0 1 3.771 2.666a1 1 0 0 1-1.84.774l-.045-.107a2 2 0 0 0-3.88.517L10.002 6v1.999L17.75 8a2.25 2.25 0 0 1 2.245 2.096l.005.154v9.496a2.25 2.25 0 0 1-2.096 2.245l-.154.005H6.25A2.25 2.25 0 0 1 4.005 19.9L4 19.746V10.25a2.25 2.25 0 0 1 2.096-2.245L6.25 8l1.751-.001V6A3.999 3.999 0 0 1 12 2.001zM12 13.5a1.499 1.499 0 1 0 0 2.997a1.499 1.499 0 0 0 0-2.997z" fill="currentColor" fill-rule="nonzero"/></svg>

                    Enroll Now
                </NuxtLink>
                <a href="tel:" class="button-secondary max-sm:w-full">
                    Contact Us
                </a>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="container flex flex-col items-center xl:flex-row">
            <div class="flex justify-center xl:w-1/2">
                <img class="h-auto w-auto sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-lg" src="~/assets/img/ti-about.webp" alt="">
            </div>

            <div class="flex flex-col text-center xl:text-start mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 class="section-title">
                    Welcome to Tanuan Institute Inc. Official Website
                </h2>

                <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    Tanuan Institute Inc. is a private educational institution located in Tanuan, Batangas, Philippines. We offer a wide range of educational programs, from elementary to senior high school, as well as college and graduate courses.
                </p>

                <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    We are committed to providing our students with the highest quality of education, and we believe that staying connected with our students is essential to providing that care.
                </p>

                <NuxtLink to="/about-us" class="button-ghost mt-6">
                    Read more

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.267 4.209a.75.75 0 0 0-1.034 1.086l6.251 5.955H3.75a.75.75 0 0 0 0 1.5h14.734l-6.251 5.954a.75.75 0 0 0 1.034 1.087l7.42-7.067a.996.996 0 0 0 .3-.58a.758.758 0 0 0-.001-.29a.995.995 0 0 0-.3-.578l-7.419-7.067Z"/></svg>
                </NuxtLink>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="container flex lg:flex-col flex-col-reverse items-center xl:flex-row">
            <div class="flex flex-col text-center xl:text-start mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 class="section-title">
                    What programs & courses does Tanuan Institute Inc. offer?
                </h2>

                <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    Choosing the right program can help you set your future goals and visualize where you want to be. Whether you want to be an engineer, a teacher, an accountant, or you want to level up in your profession, making yourself informed with the right choices will surely back you up in the future.
                </p>

                <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                    Are you ready to map your career with Tanuan Institute Inc.? Make the best decision in choosing the right path for you, click through the list of programs offered by Pampanga Institute Inc. below:
                </p>

                <NuxtLink to="/about-us" class="button-ghost mt-6">
                    See programs

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M13.267 4.209a.75.75 0 0 0-1.034 1.086l6.251 5.955H3.75a.75.75 0 0 0 0 1.5h14.734l-6.251 5.954a.75.75 0 0 0 1.034 1.087l7.42-7.067a.996.996 0 0 0 .3-.58a.758.758 0 0 0-.001-.29a.995.995 0 0 0-.3-.578l-7.419-7.067Z"/></svg>
                </NuxtLink>
            </div>

            <div class="flex justify-center xl:w-1/2">
                <img class="h-auto w-auto sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-lg" src="~/assets/img/ti-programs.webp" alt="">
            </div>
        </div>
    </section>

    <section class="py-24 bg-green-800">
        <div class="container">
            <div class="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-3">
                <div class="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="500">
                    <div class="bg-gray-50 w-fit rounded-xl p-4 shadow-sm border border-gray-200">
                        <svg class="w-8 h-8 relative" viewBox="0 0 30 30" fill="none">
                            <path d="M29.6931 14.2283L22.7556 6.87823C22.3292 6.426 21.6175 6.40538 21.1652 6.83212C20.7137 7.25851 20.6927 7.9706 21.1195 8.42248L27.3284 15L21.1195 21.5783C20.6927 22.0302 20.7137 22.7419 21.1652 23.1687C21.3827 23.3738 21.6606 23.4754 21.9374 23.4754C22.2363 23.4754 22.5348 23.3569 22.7557 23.1233L29.6932 15.7729C30.1022 15.339 30.1023 14.6618 29.6931 14.2283Z" fill="#2D3748"/><path d="M8.88087 21.578L2.67236 15L8.88087 8.42215C9.30726 7.97028 9.28664 7.25812 8.83476 6.83179C8.38323 6.4054 7.67073 6.42603 7.2444 6.87791L0.306858 14.2279C-0.102245 14.6614 -0.102245 15.3391 0.306858 15.7726L7.24475 23.123C7.466 23.3574 7.76413 23.4755 8.06302 23.4755C8.33976 23.4755 8.61767 23.3735 8.83476 23.1684C9.28705 22.742 9.30726 22.0299 8.88087 21.578Z" fill="#2D3748"/><path d="M16.8201 3.08774C16.2062 2.99476 15.6317 3.41622 15.5379 4.03011L12.2379 25.6302C12.1441 26.2445 12.566 26.8186 13.1803 26.9124C13.238 26.921 13.295 26.9252 13.3516 26.9252C13.898 26.9252 14.3773 26.5266 14.4624 25.97L17.7624 4.3699C17.8562 3.7556 17.4343 3.1815 16.8201 3.08774Z" fill="#4299E1"/>
                        </svg>
                    </div>

                    <h1 class="mt-4 text-xl font-semibold text-gray-50">Student Corners</h1>

                    <p class="mt-2 text-gray-100">
                        Taking on technological advancements that have been developing faster than ever.
                    </p>
                </div>

                <div class="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1000">
                    <div class="bg-gray-50 w-fit rounded-xl p-4 shadow-sm border border-gray-200">
                        <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
                            <path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#2D3748"/><path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#4299E1"/><path d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z" fill="#4299E1"/>
                        </svg>
                    </div>

                    <h1 class="mt-4 text-xl font-semibold text-gray-50">Careers</h1>

                    <p class="mt-2 text-gray-100">
                        Creating tools to solve the challenges of your business’ everyday operations.
                    </p>
                </div>

                <div class="flex flex-col justify-center items-center" data-aos="fade-up" data-aos-duration="1500">
                    <div class="bg-gray-50 w-fit rounded-xl p-4 shadow-sm border border-gray-200">
                        <svg class="w-8 h-8" viewBox="0 0 30 30" fill="none">
                            <g clip-path="url(#clip0)"><path d="M26.599 4.339a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM7.151 25.661a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM23.486 13.163a8.636 8.636 0 00-1.19-2.873l1.123-1.123-2.592-2.59L19.705 7.7a8.636 8.636 0 00-2.873-1.19V4.921h-3.664v1.586a8.634 8.634 0 00-2.873 1.19l-1.122-1.12-2.592 2.589 1.123 1.123a8.636 8.636 0 00-1.19 2.873H4.922l-.002 3.663h1.592A8.626 8.626 0 007.704 19.7l-1.127 1.127 2.59 2.591 1.128-1.127a8.623 8.623 0 002.873 1.19v1.597h3.664v-1.597a8.628 8.628 0 002.873-1.19l1.128 1.128 2.59-2.592-1.127-1.127a8.627 8.627 0 001.19-2.873h1.593v-3.664h-1.593zM15 19.256a4.255 4.255 0 110-8.511 4.255 4.255 0 010 8.51z" fill="#4299E1"/><path d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z" fill="#2D3748"/><path d="M12.582 25.078c0 .324.263.586.586.586h3.664a.586.586 0 00.586-.586v-1.136a9.179 9.179 0 002.199-.911l.802.802a.586.586 0 00.829 0l2.59-2.592a.586.586 0 000-.828l-.802-.802a9.169 9.169 0 00.911-2.199h1.132a.586.586 0 00.586-.585v-3.664a.586.586 0 00-.586-.586h-1.132a9.17 9.17 0 00-.911-2.199l.797-.797a.587.587 0 000-.829l-2.592-2.59a.586.586 0 00-.829 0l-.795.797a9.177 9.177 0 00-2.2-.912V4.922a.586.586 0 00-.585-.586h-3.664a.586.586 0 00-.586.586v1.126a9.169 9.169 0 00-2.199.91l-.796-.795a.586.586 0 00-.828 0l-2.592 2.59a.585.585 0 000 .828l.797.797a9.173 9.173 0 00-.911 2.199h-1.13a.586.586 0 00-.586.585l-.002 3.664a.585.585 0 00.586.586h1.132c.207.77.512 1.507.911 2.2l-.801.8a.586.586 0 000 .83l2.59 2.59a.586.586 0 00.829 0l.801-.801a9.185 9.185 0 002.2.911v1.136zm-1.97-3.28a.586.586 0 00-.732.078l-.713.714-1.761-1.763.712-.713a.586.586 0 00.078-.732 8.02 8.02 0 01-1.11-2.679.586.586 0 00-.572-.462H5.507l.002-2.492h1.005a.586.586 0 00.572-.463 8.022 8.022 0 011.11-2.678.586.586 0 00-.078-.733l-.708-.708 1.763-1.761.707.707c.196.196.5.228.733.078a8.016 8.016 0 012.678-1.11.586.586 0 00.463-.573v-1h2.492v1c0 .277.193.515.463.573a8.024 8.024 0 012.678 1.11c.232.15.537.118.732-.078l.708-.707 1.762 1.761-.708.708a.586.586 0 00-.078.732 8.027 8.027 0 011.11 2.679c.058.27.297.463.573.463h1.007v2.492h-1.007a.586.586 0 00-.573.462 8.02 8.02 0 01-1.11 2.679.586.586 0 00.078.732l.713.713-1.761 1.762-.714-.713a.586.586 0 00-.732-.078 8.027 8.027 0 01-2.678 1.11.586.586 0 00-.463.573v1.011h-2.492v-1.01a.586.586 0 00-.463-.574 8.021 8.021 0 01-2.678-1.11z" fill="#2D3748"/><path d="M19.841 15A4.847 4.847 0 0015 10.158 4.847 4.847 0 0010.158 15 4.847 4.847 0 0015 19.841 4.847 4.847 0 0019.841 15zm-8.51 0A3.674 3.674 0 0115 11.33 3.674 3.674 0 0118.67 15 3.674 3.674 0 0115 18.67 3.674 3.674 0 0111.33 15z" fill="#2D3748"/><path d="M20.395 2.216a.59.59 0 00.415-.172.593.593 0 00.171-.415.59.59 0 00-.586-.586.589.589 0 00-.586.586.589.589 0 00.586.587zM9.63 27.794a.59.59 0 00-.586.586.59.59 0 00.586.586.59.59 0 00.586-.586.59.59 0 00-.586-.585z" fill="#4299E1"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs>
                        </svg>
                    </div>

                    <h1 class="mt-4 text-xl font-semibold text-gray-50">Going Around</h1>

                    <p class="mt-2 text-gray-100">
                        Transforming our company, services, and products with the ever changing industry terrain.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24">
        <div class="container">
            <div class="text-center">
                <h2 class="section-title">Our Latest News & Events</h2>
            </div>

            <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                <div>
                    <div class="relative">
                        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="~/assets/img/blog/1.jpg" alt="">

                        <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                            <img class="object-cover object-center w-10 h-10 rounded-full" src="~/assets/img/logo-thumb.png" alt="">

                            <div class="mx-4">
                                <h3 class="text-sm text-gray-700 dark:text-gray-200">Tanuan Instiute</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Admin</p>
                            </div>
                        </div>
                    </div>

                    <p class="mt-6 text-sm text-gray-500">September 25, 2023</p>

                    <h4 class="mt-1 text-xl font-semibold text-gray-800 dark:text-white">
                        Tanauan Institute Inc. Launches New STEM Program
                    </h4>

                    <hr class="w-32 my-6 text-blue-500">

                    <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                        Tanauan Institute Inc. is excited to announce the launch of its new STEM program! This program will provide students with the skills and knowledge they need to succeed in the growing STEM fields. The program will offer a variety of courses in science, technology, engineering, and mathematics. Students will also have the opportunity to participate in hands-on projects and internships.
                    </p>

                    <a href="#" class="inline-block mt-4 text-green-700 underline hover:text-green-600">Read more</a>
                </div>

                <div>
                    <div class="relative">
                        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="~/assets/img/blog/2.jpg" alt="">

                        <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                            <img class="object-cover object-center w-10 h-10 rounded-full" src="~/assets/img/logo-thumb.png" alt="">

                            <div class="mx-4">
                                <h3 class="text-sm text-gray-700 dark:text-gray-200">Tanuan Institute</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Admin</p>
                            </div>
                        </div>
                    </div>

                    <p class="mt-6 text-sm text-gray-500">October 15, 2023</p>
                    <h4 class="mt-1 text-xl font-semibold text-gray-800 dark:text-white">
                        Tanauan Institute Inc. Hosts Annual Sports Festival
                    </h4>

                    <hr class="w-32 my-6 text-blue-500">

                    <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                        Description: Tanauan Institute Inc. will be hosting its annual Sports Festival on October 15, 2023! The festival will feature a variety of sports and activities for students of all ages and abilities. There will also be food vendors and entertainment. The Sports Festival is a great way for students to get involved in physical activity and have fun.
                    </p>

                    <a href="#" class="inline-block mt-4 text-green-700 underline hover:text-green-600">Read more</a>
                </div>

                <div>
                    <div class="relative">
                        <img class="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="~/assets/img/blog/3.jpg" alt="">

                        <div class="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                            <img class="object-cover object-center w-10 h-10 rounded-full" src="~/assets/img/logo-thumb.png" alt="">

                            <div class="mx-4">
                                <h3 class="text-sm text-gray-700 dark:text-gray-200">Tanuan Institute</h3>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Admin</p>
                            </div>
                        </div>
                    </div>

                    <p class="mt-6 text-sm text-gray-500">February 22, 2024</p>
                    <h4 class="mt-1 text-xl font-semibold text-gray-800 dark:text-white">
                        Tanauan Institute Inc. Celebrates 91st Foundation Day
                    </h4>

                    <hr class="w-32 my-6 text-blue-500">

                    <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                        Tanauan Institute Inc. will be celebrating its 91st Foundation Day on February 22, 2024! The celebration will feature a variety of activities for students, faculty, staff, and alumni. There will also be a special ceremony to honor the school's history and accomplishments. The Foundation Day celebration is a great way for the Tanauan Institute Inc. community to come together and celebrate the school's success.
                    </p>

                    <a href="#" class="inline-block mt-4 text-green-700 underline hover:text-green-600">Read more</a>
                </div>
            </div>
        </div>
    </section>

    <section class="py-24 bg-gray-50">
        <div class="container">
            <div class="grid lg:grid-cols-4 sm:grid-cols-1 gap-6 lg:gap-12 items-center justify-center lg:max-w-6xl mx-auto sm:max-w-none">
                <div class="col-span-2 rounded-xl" data-aos="fade-up">
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Ftanauaninstituteincofficial%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" style="border:none;overflow:hidden;width:-webkit-fill-available;" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div class="col-span-2" data-aos="fade-up">
                    <span class="text-base text-green-600">Facebook Feed</span>
                    <h4 class="section-title mt-1">
                        Stay Connected and Stay Updated: Tanuan Institute Inc.
                    </h4>

                    <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                        This Facebook page is a great way to stay connected with Tanuan Institute Inc. We post regular updates on our services, our faculty and staff, and our student activities. We also use our page to answer questions from students, parents, and the community.
                    </p>
                    <p class="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                        If you are a student of Tanuan Institute Inc., or if you are just interested in learning more about our school, we encourage you to follow our Facebook page. We look forward to staying connected with you!
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>