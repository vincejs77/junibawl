<template>
  <section id="app-navbar" class="">
    <div
      class="app-wrapper fixed z-[9999] top-0 left-0 right-0 border-b w-full h-[78px] sm:h-[98px] border-gray-300 py-0 mb-0 md:py-0 md:mb-0 xl:mb-0"
    >
      <!-- <div class="app-box-shadow-2"></div> -->
      <div
        class="max-w-[1200px] w-full mx-3 xl:mx-4 border-l border-r border-gray-300 bg-white px-4 sm:px-8 py-0 sm:py-10 flex items-center justify-between"
      >
        <NuxtLink
          to="/"
          class="inline-flex items-center text-lg sm:text-xl font-black text-black-800"
          >Bulabula AWAZI</NuxtLink
        >
        <nav
          :class="[
            isMobile
              ? 'absolute left-3 right-3 top-[78px] bg-white flex flex-col justify-center items-center space-y-4 p-8 app-box-shadow-1'
              : 'hidden menu gap-12 ml-0 flex-col lg:flex-row lg:flex',
            stateMenuMobile ? 'inline-block' : 'hidden',
          ]"
        >
          <NuxtLink
            to="/"
            @click="toggleMenu()"
            class="text-base font-semibold text-gray-600 transition duration-100 hover:text-indigo-500"
            >Articles</NuxtLink
          >

          <NuxtLink
            to="/about"
            @click="toggleMenu()"
            class="text-base font-semibold text-gray-600 transition duration-100 hover:text-indigo-500"
            >About</NuxtLink
          >

          <a
            href="mailto:junibawl@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            class="lg:hidden flex space-x-2 justify-center items-center px-4 py-3 font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-md outline-none hover:bg-indigo-600 md:text-base"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <span> Mail me </span>
          </a>
        </nav>

        <a
          href="mailto:junibawl@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden lg:flex space-x-2 justify-center items-center px-4 py-3 font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-md outline-none hover:bg-indigo-600 md:text-base"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>
          <span> Mail me </span>
        </a>
        <button
          type="button"
          @click="toggleMenu()"
          class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
        >
          <svg
            class="w-6 h-6 fill-current"
            style="transform: scale(-1, 1)"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            v-if="!stateMenuMobile"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            ></path>
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
let stateMenuMobile = ref(false);
let isMobile = ref(false);

/* Fonction qui toggle le menu si le mode mobile est vérifié*/
const toggleMenu = () => {
  if (isMobile.value) {
    stateMenuMobile.value = !stateMenuMobile.value;
    // console.log(stateMenuMobile.value);
  }
  return 0;
};

/* Condition pour vérifier l'ecran mobile ou tablette avec isMobile*/

if (window.screen.width < 1000) {
  isMobile.value = true;
} else {
  isMobile.value = false;
}

/* Évenement resize pour appliquer ou nom le mode mobile avec isMobile */
window.addEventListener("resize", () => {
  const screenSize = window.screen.width;
  if (screenSize < 1000) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
  // console.log(screenSize);
  // console.log(isMobile.value);
});
</script>
