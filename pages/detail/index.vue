<template>
  <!-- 参考: このページを真似している https://wear.jp/rairagdoll/18656729/ -->
  <!-- 参考: Flexbox cheat sheet https://www.webcreatorbox.com/tech/css-flexbox-cheat-sheet -->
  <!-- 参考: tailwind css Flex https://tailwindcss.com/docs/flex -->
  <div class="container mx-auto pl-4 pr-4 bg-white">
    <TheHeader />

    <!-- 横並びで両端に配置 -->
    <div class="flex flex-row justify-between">  <!-- memo: flexと指定したらflex-directionはrowが初期値なので、flex-rowの指定は省略できる -->
      <!-- パンくずリスト: https://daisyui.com/components/breadcrumbs/#breadcrumbs -->
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a>TOP</a></li>
          <li><a>今橋 陵</a></li>
          <li><a>みる</a></li> 
          <li>2022年4月1日のコーディネート</li>
        </ul>
      </div>
      <!-- シェアボタン -->
      <div class="mt-2">
        <!-- memo: btnクラス(https://daisyui.com/components/button/#button)の高さ指定(min-heigh, height)を上書きして調整 -->
        <!-- 疑問: プロパティ指定に推奨される順番ってある？(flex関連を先とか、サイズ関連を先とか) 統一できていればOK? -->
        <button class="btn w-24 bg-accent text-white min-h-0 h-full flex p-2">
          <!-- memo: 横幅を指定しないと、アイコンと文字が横並びにならない -->
          <ShareIcon class="w-5 mr-0.5 shrink-0"/>
          <span>シェアする</span>
        </button>
      </div>
    </div>

    <!-- ユーザー別のヘッダー -->
    <div class="flex flex-row justify-between items-center w-full my-4">
      <div class="flex flex-row items-center">
        <!-- ユーザーアイコン -->
        <!-- 疑問: divタグ必要？(imgタグに直接h,wを指定すれば済む。構造上のひとかたまりを示すために入れる？(それなら、user-iconみたいな分かりやすいclass名をつけた方が良さそう)) -->
        <div class="h-16 w-16">
          <!-- memo: object-coverとh,wを指定して画像のトリムをしないと横長の丸になる https://www.webcreatorbox.com/tech/object-fit -->
          <img class="object-cover h-full w-full rounded-full" src="~/assets/image/miru.jpg">
        </div>
        <!-- ユーザー名 -->
        <div class="ml-4">
          <!-- memo: pかspanかで迷ったけど、意味をもつテキストの固まりはpになるらしい -->
          <p class="text-2xl">みる</p>
        </div>
      </div>
      <!-- フォローボタン -->
      <!-- 疑問: 最後の子要素の位置だけを右端に指定できない？(他の子要素をグルーピングして、親要素にjustify-content: space-between;を指定することで、やりたいことは実現できた) -->
      <div class="pt-2">
        <!-- 疑問:  stroke-white fill-whiteでは白塗りにならず、text-whiteで白塗りになった。なぜ？ -->
        <button class="btn gap-x-0.5 min-h-0 h-full flex flex-row p-2 bg-accent text-white">
          <!-- memo: 横幅を指定しないと、アイコンと文字が横並びにならない -->
          <UserAddIcon class="w-5"/>
          <span class="text-white">フォローする</span>
        </button>
      </div>
    </div>

    <!-- body -->
    <div class="flex items-start bg-neutral">
      <!-- content_sub -->
      <div class="w-3/5">
        <!-- コーディネート画像 -->
        <CoordinationImage
          :coordinationImagePath='"/assets/image/miru-red-collar.jpg"'
          :watchedCount="158"
          :itemTagPosition="{ left: '58%', top:'40%' }"
        />
        
        <!-- TODO: 各種アクションボタン -->
        <div>

        </div>
        <!-- TODO: コメント欄 -->
        <div>

        </div>

      </div>
      <!-- content_main -->
      <div class="w-2/5 p-4">
        <!-- コーディネート詳細 -->
        <CoordinationDetail
          :petName="CoordinationDetailJson.coordinationDetail.petName"
          :itemName="CoordinationDetailJson.coordinationDetail.itemName"
          :description="CoordinationDetailJson.coordinationDetail.description"
          :date="CoordinationDetailJson.coordinationDetail.date"
        />
        <!-- TODO: 着用アイテム -->
        <div class="w-full mt-4 px-4 py-4 bg-white border-2">
          <h1 class="text-lg">着用アイテム</h1>
          <div class="flex gap-2">
            <div class="flex flex-col items-center">
            <figure class="pt-2">
              <img
                src="https://japan.cnet.com/storage/2019/09/20/d1fff7d2c7917d61b02c687ff70ce1a6/RABO0924-1.jpg"
                class="object-cover w-64 rounded-xl"
              />
            </figure>
            <p class="my-2 py-2">Catlog(Red)</p>
          </div>
          <div class="flex flex-col items-center">
            <figure class="pt-2">
              <img
                src="https://japan.cnet.com/storage/2019/09/20/d1fff7d2c7917d61b02c687ff70ce1a6/RABO0924-1.jpg"
                class="object-cover w-64 rounded-xl"
              />
            </figure>
            <p class="my-2 py-2">Catlog(Red)</p>
          </div>
          </div>
        </div>
        <!-- TODO: タグ -->
        <div>
          
        </div>
      </div>
    </div>

    <TheFooter />
  </div>
</template>
<script setup lang="ts"> // 参考: https://zenn.dev/coedo/articles/86bc31acb4ea47
// 参考: https://github.com/tailwindlabs/heroicons#vue
import { ShareIcon, UserAddIcon } from '@heroicons/vue/solid'
import CoordinationDetailJson from '@/assets/json/coordinationDetail.json'
import CoordinationImage from '../../components/CoordinationImage.vue'
const coordinationDetail = CoordinationDetailJson.coordinationDetailJson
</script>
<style lang="css">
</style>
