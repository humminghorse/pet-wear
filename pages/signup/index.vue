<template>
  <!-- タイトル -->
  <h1 class="mt-4 text-2xl ml-2 sm:ml-0">会員登録</h1>

  <!-- body -->
  <div class="mt-4 flex justify-center">
    <!-- memo: grid-auto-flow: column;で横並びにしている。 overflow-x: auto;で横スクロールを可能にしている。-->
    <ul class="steps">
      <li class="step step-primary">アカウント作成</li>
      <li class="step">ペット登録</li>
      <li class="step">利用開始</li>
    </ul>
  </div>
  
  <h2 class="mt-4 text-xl">まずはあなたの情報を入力してください。</h2>
  <div class="mt-4">
    <!-- TODO: バリデーションとエラーメッセージ -->
    <form class="flex flex-col gap-y-2">
      <div>
        <label for="name">名前</label>
        <input id="name" type="text" placeholder="鈴木一郎" class="ml-2 border" />
      </div>
      <div>
        <label for="email">メールアドレス</label>
        <input id="email" type="email" placeholder="xxx@example.com" class="ml-2 border" />
      </div>
      <div>
        <label for="password">パスワード</label>
        <input id="password" type="password" placeholder="xxxxxxxx" class="ml-2 border" />
      </div>
    </form>
  </div>
</template>
<script setup lang="ts">
</script>
