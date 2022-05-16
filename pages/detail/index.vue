<template>
  <!-- 参考: このページを真似している https://wear.jp/rairagdoll/18656729/ -->
  <!-- 参考: Flexbox cheat sheet https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet -->
  <!-- 参考: tailwind css Flex https://tailwindcss.com/docs/flex -->
  <div class="container mx-auto pl-4 pr-4 bg-white">
    <TheHeader />

    <!-- 横並びで両端に配置 -->
    <div class="flex flex-row justify-between">
      <!-- パンくずリスト -->
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a>TOP</a></li> 
          <li><a>たま</a></li> 
          <li>2022年4月1日のコーディネート</li>
        </ul>
      </div>
      <!-- シェアボタン -->
      <div class="mt-2">
        <!-- TODO: シェアアイコンをボタン内に追加 -->
        <!-- memo: btnクラスの高さ指定(min-heigh, height)を上書きして調整 -->
        <button class="btn min-h-0 h-full flex-row p-2">
          <!-- memo: 横幅を指定しないと、アイコンと文字が横並びにならない -->
          <ShareIcon class="w-5"/>
          <span>シェアする</span>
        </button>
      </div>
    </div>



    

    <TheFooter />
  </div>
</template>
<script>
// 参考: https://github.com/tailwindlabs/heroicons#vue
import { ShareIcon } from '@heroicons/vue/solid'
export default {
  components: { ShareIcon }
}
</script>
<style lang="css">
/* .bg-orange-sample {
  background-color: #e7541c;
}
.bg-blue-sample {
  background-color: #000099;
} */
</style>
