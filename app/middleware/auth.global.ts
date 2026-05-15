const PUBLIC_PATHS = new Set([
  '/', '/about', '/process', '/projects', '/contact',
  '/ai-planner', '/signup', '/login', '/blog',
])

function isPublic(path: string) {
  if (PUBLIC_PATHS.has(path)) return true
  if (path.startsWith('/blog/')) return true
  return false
}

export default defineNuxtRouteMiddleware((to) => {
  if (isPublic(to.path)) return

  const user = useSupabaseUser()
  if (!user.value) {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.path)}`)
  }
})
