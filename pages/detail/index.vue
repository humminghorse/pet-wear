<template>
  <!-- 参考: このページを真似している https://wear.jp/rairagdoll/18656729/ -->
  <div class="container mx-auto pl-4 pr-4 bg-white">
    <TheHeader />

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
        <button class="btn">シェアする</button>
      </div>
    </div>



    

    <TheFooter />
  </div>
</template>
<style lang="css">
/* .bg-orange-sample {
  background-color: #e7541c;
}
.bg-blue-sample {
  background-color: #000099;
} */
</style>
