<template>
  <div class="w-full relative">
    <!-- TODO: 縦長にトリムしたい -->
    <img class="object-cover h-600 w-full" :src="coordinateImgSrc">
    <!-- 参考: 【HTML・CSS】画像の上に画像や文字を重ねる方法 https://public-constructor.com/display-icon-on-image/ -->
    <!-- 参考: CSSのposition: absoluteとrelativeとは https://uxmilk.jp/63409 -->
    <div class="w-20 h-6 bg-black bg-opacity-50 absolute bottom-1 left-1">
      <div class="w-full h-full flex items-center justify-center gap-1 text-white text-xs">
        <EyeIcon class="w-4 h-4 shrink-0"></EyeIcon>
        <p>{{watchedCount}}</p>
      </div>
    </div>
    <!-- アイテムタグ -->
    <!-- TODO: daisyのtooltipを使う https://daisyui.com/components/tooltip/ -->
    <!-- TODO: https://daisyui.com/components/button/#icon-at-end -->
    <a
      class="w-auto py-1 px-2 absolute flex items-center justify-start bg-black bg-opacity-75 text-white text-xs item-tag cursor-pointer"
      :style='itemTagPosition'
    >
      <span class='truncate item-text'>{{itemName}}</span>
    </a>
  </div>
</template>
<script setup lang="ts">
import { EyeIcon } from '@heroicons/vue/solid'
const props = defineProps({
  coordinateImgSrc: String,
  watchedCount: Number,
  itemTagPosition: Object,
  itemName: String
})
</script>
<style lang="css">
.item-tag {
  max-width: 10rem;
}
.item-tag:hover > .item-text {
  @apply text-clip overflow-auto whitespace-normal;
  /* overflow: auto;
  text-overflow: ellipsis;
  white-space: nowrap; */
}
</style>
