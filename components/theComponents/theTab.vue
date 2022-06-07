<template>
  <div class="tabs tabs-boxed w-full">
    <!-- TODO: tabとw-1/4をclassにしたい -->
    <a href="/coordinates" :class="['tab', 'w-1/4', {'tab-active': isCoordinates}]">コーディネート</a>
    <a href="/pets" :class="['tab', 'w-1/4', {'tab-active': isPets}]">ペット</a>
    <a href="/items" :class="['tab', 'w-1/4', {'tab-active': isItems}]">アイテム</a>
    <a href="/shops" :class="['tab', 'w-1/4', {'tab-active': isShops}]">ショップ</a>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const isCoordinates = computed((): boolean => {
  return route.path === '/coordinates'
})
const isPets = computed((): boolean => {
  return route.path === '/pets'
})
const isItems = computed((): boolean => {
  return route.path === '/items'
})
const isShops = computed((): boolean => {
  return route.path === '/shops'
})
</script>