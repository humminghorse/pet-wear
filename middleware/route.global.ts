export default defineNuxtRouteMiddleware((to, from) => {
  console.log('defineNuxtRouteMiddleware')
    if (to.path === '/') {
    return navigateTo('/coordinates')
  }
})