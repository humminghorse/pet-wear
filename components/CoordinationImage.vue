<template>
  <div class="w-full">
    <!-- TODO: 縦長にトリムしたい -->
    <img class="object-cover h-600 w-full" :src='coordinationImageUrl()'>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  coordinationImagePath: String
})
// 参考: Nuxt3 img v-bind:srcで画像が表示されない時の解決法 https://zenn.dev/one_dock/articles/77cd256c887204
const coordinationImageUrl = (): string => {
  return new URL(props.coordinationImagePath, import.meta.url).href
}
</script>
