<template>
  <div class="w-full px-4 py-4 bg-white border-2">
    <h1 class="text-lg border-b pb-1">{{petName}}の{{itemName}}を使ったコーディネート</h1>
    <div class="my-2">
      <p class="my-2 break-words whitespace-pre-wrap">{{description}}</p>
    </div>
    <p class="text-sm text-transparent/50 border-t pt-1">{{date}}</p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  petName: String,
  itemName: String,
  description: String,
  date: String,
})
</script>
