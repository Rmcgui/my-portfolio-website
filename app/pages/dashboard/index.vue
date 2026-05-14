<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const router = useRouter()
const route = useRoute()

const showSavedToast = ref(route.query.saved === '1')

// Fetch the user's plans
/* const { data: plans, refresh } = await useFetch('/api/plans', {
  default: () => [],
}) */
const { data: plans } = await useFetch('/api/graphql', {
  method: 'POST',
  body: {
    query: `
      query DashboardPlans {
        myPlans {
          id
          title
          industry
          createdAt
        }
      }
    `,
  },
  // Extract the plans array out of the GraphQL response envelope
  transform: (res: any) => res?.data?.myPlans ?? [],
  default: () => [],
})

const handleLogout = async () => {
  await supabase.auth.signOut()
  await router.push('/')
}

const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <div class="max-w-4xl mx-auto py-12 px-6">
    <!-- Saved-toast banner -->
    <div
      v-if="showSavedToast"
      class="bg-green-50 border border-green-200 text-green-800 px-3 py-2 rounded mb-4 text-sm"
      role="status"
    >
      Plan saved.
    </div>

    <header class="flex justify-between items-center mb-8">
      <span class="text-sm text-gray-700">{{ user?.email }}</span>
      <button
        type="button"
        @click="handleLogout"
        class="text-sm underline text-gray-700 hover:text-blue-600"
      >
        Log Out
      </button>
    </header>

    <h1 class="text-3xl font-bold mb-6">My Plans</h1>

    <!-- Empty state -->
    <div v-if="!plans?.length" class="bg-white border rounded p-8 text-center">
      <p class="text-gray-600 mb-4">No plans yet.</p>
      <NuxtLink
        to="/ai-planner"
        class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generate a plan
      </NuxtLink>
    </div>

    <!-- Plans list -->
    <ul v-else class="space-y-3">
      <li v-for="plan in plans" :key="plan.id">
        <NuxtLink
          :to="`/dashboard/plans/${plan.id}`"
          class="block bg-white border rounded p-4 hover:border-blue-400 transition-colors"
        >
          <div class="flex justify-between items-start">
            <div>
              <div class="font-semibold">{{ plan.title }}</div>
              <div v-if="plan.industry" class="text-xs text-gray-500 mt-1">
                {{ plan.industry }}
              </div>
            </div>
            <div class="text-xs text-gray-500">
              {{ formatDate(plan.createdAt) }}
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>