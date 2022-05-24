<template>
  <div class="w-full relative">
    <!-- TODO: 縦長にトリムしたい -->
    <img class="object-cover h-600 w-full" :src='coordinationImageUrl()'>
    <!-- 参考: 【HTML・CSS】画像の上に画像や文字を重ねる方法 https://public-constructor.com/display-icon-on-image/ -->
    <!-- 参考: CSSのposition: absoluteとrelativeとは https://uxmilk.jp/63409 -->
    <div class="w-20 h-6 pd-2 bg-black bg-opacity-50 absolute bottom-1 left-1">
      <div class="w-full h-full flex items-center justify-center gap-1 text-white text-xs">
        <EyeIcon class="w-4"></EyeIcon>
        <p>{{watchedCount}}</p>
      </div>
    </div>
    <!-- アイテムタグ -->
    <!-- TODO: タグの位置を動的に設定する -->
    <!-- tailwindのtop-n のnの値では足りなさそう -->
    <a
      class="w-24 h-6 pd-2 absolute flex items-center justify-center bg-black bg-opacity-75 text-white text-xs"
      :style='itemTagPosition'
    >
      <p>Catlog(Red)</p>
    </a>
  </div>
</template>
<script setup lang="ts">
import { EyeIcon } from '@heroicons/vue/solid'
const props = defineProps({
  coordinationImagePath: String,
  watchedCount: Number,
  itemTagPosition: Object
})
// 参考: Nuxt3 img v-bind:srcで画像が表示されない時の解決法 https://zenn.dev/one_dock/articles/77cd256c887204
const coordinationImageUrl = (): string => {
  return new URL(props.coordinationImagePath, import.meta.url).href
}
</script>
