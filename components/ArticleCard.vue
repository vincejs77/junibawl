<template>
  <div>
    <NuxtLink
      :to="link"
      class="group overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
    >
      <img :src="img" class="object-cover w-full h-64" alt="" />
      <div class="px-3 py-4 sm:p-5 border border-t-0 border-gray-300">
        <p class="mb-3 text-xs font-semibold tracking-wide uppercase">
          <NuxtLink
            :to="link"
            class="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {{ cat }}
          </NuxtLink>
          <span class="text-gray-600"> — {{ date }}</span>
        </p>
        <NuxtLink
          :to="link"
          aria-label="Category"
          class="inline-block line-clamp-2 my-3 mb-5 text-xl sm:text-2xl font-semibold transition-colors duration-200 group-hover:underline group-hover:text-indigo-500"
        >
          {{ title }}
        </NuxtLink>
        <p class="mb-2 text-gray-500 line-clamp-3">
          {{ desc }}
        </p>
        <NuxtLink
          :to="link"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-indigo-500 underline"
          >Learn more</NuxtLink
        >
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  cat: String,
  link: String,
  date: String,
  img: String,
  title: String,
  desc: String,
});
</script>
