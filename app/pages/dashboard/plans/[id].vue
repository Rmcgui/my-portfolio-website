<script setup lang="ts">
const route = useRoute()
const router = useRouter()
const planId = route.params.id as string

// Fetch the full plan (this hits the [id].get.ts endpoint, which returns everything)
const { data: plan, error: fetchError } = await useFetch(`/api/plans/${planId}`)

const title = ref(plan.value?.title ?? '')
const titleError = ref('')
const saving = ref(false)
const saveError = ref('')
const showDeleteConfirm = ref(false)
const deleting = ref(false)

const handleSave = async () => {
  titleError.value = ''
  saveError.value = ''

  if (!title.value.trim()) {
    titleError.value = 'Title cannot be empty.'
    return
  }

  saving.value = true
  try {
    await $fetch(`/api/plans/${planId}`, {
      method: 'PATCH',
      body: { title: title.value.trim() },
    })
    await router.push('/dashboard')
  } catch (e: any) {
    saveError.value = e?.data?.statusMessage ?? 'Failed to save changes'
  } finally {
    saving.value = false
  }
}

const handleDelete = async () => {
  deleting.value = true
  try {
    await $fetch(`/api/plans/${planId}`, { method: 'DELETE' })
    await router.push('/dashboard')
  } catch (e: any) {
    saveError.value = e?.data?.statusMessage ?? 'Failed to delete plan'
    showDeleteConfirm.value = false
  } finally {
    deleting.value = false
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto py-12 px-6">
    <NuxtLink to="/dashboard" class="text-sm text-blue-600 hover:underline">
      ← Back to dashboard
    </NuxtLink>

    <!-- Error fetching plan (e.g. 404 from RLS) -->
    <div v-if="fetchError" class="mt-6 bg-red-50 border border-red-200 text-red-800 p-4 rounded">
      <p>{{ fetchError.statusMessage || 'Could not load this plan.' }}</p>
    </div>

    <template v-else-if="plan">
      <h1 class="text-2xl font-bold mt-4 mb-6">Edit Plan</h1>

      <!-- Title editor -->
      <div class="mb-6">
        <label for="title" class="block text-sm font-medium mb-1">Title</label>
        <input
          id="title"
          v-model="title"
          type="text"
          class="w-full border rounded px-3 py-2"
        />
        <p v-if="titleError" class="text-red-600 text-sm mt-1">{{ titleError }}</p>
      </div>

      <!-- Plan details (read-only for now) -->
      <div class="mb-6 bg-white border rounded p-4 text-sm">
        <h2 class="font-medium mb-2">Plan summary</h2>
        <p v-if="plan.industry" class="text-gray-700">
          <strong>Industry:</strong> {{ plan.industry }}
        </p>
        <p class="text-gray-700">
          <strong>Pages:</strong> {{ plan.pages?.length ?? 0 }}
        </p>
        <p class="text-xs text-gray-500 mt-2">
          Created {{ new Date(plan.created_at).toLocaleDateString() }}
        </p>
      </div>

      <!-- Save / Delete actions -->
      <div class="flex gap-2">
        <button
          type="button"
          :disabled="saving"
          @click="handleSave"
          class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {{ saving ? 'Saving…' : 'Save' }}
        </button>
        <button
          type="button"
          :disabled="deleting"
          @click="showDeleteConfirm = true"
          class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
        >
          Delete
        </button>
      </div>

      <p v-if="saveError" class="text-red-600 text-sm mt-3" role="alert">
        {{ saveError }}
      </p>

      <!-- Delete confirmation -->
      <div
        v-if="showDeleteConfirm"
        class="mt-6 p-4 border border-red-200 bg-red-50 rounded"
      >
        <p class="mb-3 text-sm">Are you sure? This cannot be undone.</p>
        <div class="flex gap-2">
          <button
            type="button"
            :disabled="deleting"
            @click="handleDelete"
            class="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 disabled:opacity-50"
          >
            {{ deleting ? 'Deleting…' : 'Yes, delete' }}
          </button>
          <button
            type="button"
            :disabled="deleting"
            @click="showDeleteConfirm = false"
            class="px-3 py-1 border border-gray-300 text-sm rounded hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </template>
  </div>
</template>