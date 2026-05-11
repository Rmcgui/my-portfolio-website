<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
const user = useSupabaseUser();
const supabase = useSupabaseClient();
const router = useRouter();

const handleLogout = async () => {
  await supabase.auth.signOut();
  await router.push('/');
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-12 px-6">
    <header class="flex justify-between items-center mb-8">
      <span class="text-sm text-gray-700">{{ user?.email }}</span>
      <button @click="handleLogout" class="text-sm underline text-gray-700 hover:text-blue-600">
        Log Out
      </button>
    </header>
    <h1 class="text-3xl font-bold">Dashboard</h1>
    <p class="mt-4 text-gray-600">Saved plans will appear here tomorrow.</p>
  </div>
</template>