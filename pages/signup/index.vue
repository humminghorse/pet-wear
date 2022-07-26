<template>
  <!-- タイトル -->
  <h1 class="mt-4 text-2xl ml-2 sm:ml-0">会員登録</h1>

  <!-- body -->
  <div class="mt-4 flex justify-center">
    <!-- memo: grid-auto-flow: column;で横並びにしている。 overflow-x: auto;で横スクロールを可能にしている。-->
    <ul class="steps grid-cols-3 grid-rows-3 grid-flow-row">
      <li class="step step-primary">アカウント作成</li>
      <li class="step">ペット登録</li>
      <li class="step">利用開始</li>
      <!-- TODO: 以下のliは削除する -->
      <li class="step step-primary">コーディネート投稿</li>
      <li class="step">コーディネート検索</li>
      <li class="step">ペット検索</li>
      <li class="step step-primary">ペットのフォロー</li>
      <li class="step">アイテム検索</li>
      <li class="step">アイテム購入</li>
    </ul>
  </div>
  
  <h2 class="mt-4 text-xl">まずはあなたの情報を入力してください。</h2>

</template>
<script setup lang="ts">
</script>
