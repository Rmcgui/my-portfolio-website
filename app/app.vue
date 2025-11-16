<template>
  <div class="min-h-screen flex flex-col">
    <StructuredData />
    <Navbar />
    <main class="flex-grow">
      <NuxtLayout>
      <NuxtPage />
      </NuxtLayout>
    </main>
    <Footer />
  </div>
</template>

<script setup>
// This component wraps all pages with the navbar and footer
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
</style>