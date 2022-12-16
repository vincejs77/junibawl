<template>
  <div class="home-view">
    <section class="app-wrapper border-t border-gray-300">
      <div class="app-container py-0 sm:py-24 border-l border-r border-gray-300">
        <div class="text-center pt-32 sm:pt-24">
          <h1
            class="flex justify-start w-full text-3xl font-black md:text-4xl md:text-center md:justify-center"
          >
            Information Systems and Digital Transformation
          </h1>
          <div class="flex justify-center items-center text-lg text-gray-500 mt-4">
            Bulabula AWAZI
            <div class="h-2 w-2 bg-indigo-700 rounded-full mx-4"></div>
            <span class="text-gray-400">Author</span>
          </div>
        </div>
        <div class="py-16 mx-auto">
          <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            <ArticleCard :key="article" v-for="article in articles" v-bind="article" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useArticlesStore } from "~/store/articles";
const title = ref("Home - Bulabula AWAZI");

useHead({
  title,
});

const articles = useArticlesStore().$state.articles;
</script>
