<template>
  <div>
    <div class="bg-indigo-200 top-0 h-1 z-[99999] fixed left-0 right-0">
      <NuxtLoadingIndicator color="#6366f1" :height="h" />
    </div>
    <ClientOnly>
      <NuxtLayout :name="navbar"> </NuxtLayout>
    </ClientOnly>
    <NuxtPage />
    <NuxtLayout :name="footer"> </NuxtLayout>
  </div>
</template>

<script setup>
const h = 4;
const footer = "footer";
const navbar = "navbar";
</script>
