<template>
  <div class="container mx-auto pl-4 pr-4 bg-white">
    <TheHeader />

    <!-- パンくずリストとシェアボタン -->
    <div class="flex justify-between">
      <div class="text-sm breadcrumbs">
        <ul>
          <li><a href="/">TOP</a></li>
          <!-- <li><a>今橋 陵</a></li>  -->
          <li><a>{{coordinateDetail.petName}}</a></li>
          <li>{{yearMonthDate(coordinateDetail.date)}}のコーディネート</li>
        </ul>
      </div>
      <div class="mt-2">
        <button class="btn w-24 bg-accent text-white min-h-0 h-full flex p-2">
          <ShareIcon class="w-5 mr-0.5 shrink-0"/>
          <span>シェアする</span>
        </button>
      </div>
    </div>

    <!-- ユーザー別のヘッダー -->
    <div class="flex justify-between items-center w-full my-4">
      <div class="flex items-center">
        <div class="h-16 w-16">
          <img class="object-cover h-full w-full rounded-full" :src="coordinateDetail.petIconSrc">
        </div>
        <div class="ml-4">
          <p class="text-2xl">{{coordinateDetail.petName}}</p>
        </div>
      </div>
      <div class="pt-2">
        <button class="btn gap-x-0.5 min-h-0 h-full flex p-2 bg-accent text-white">
          <UserAddIcon class="w-5"/>
          <span class="text-white">フォローする</span>
        </button>
      </div>
    </div>

    <!-- ボディ -->
    <div class="flex items-start bg-neutral">
      <!-- サブコンテンツ -->
      <div class="w-3/5">
        <CoordinateImage
          :coordinateImgSrc="coordinateDetail.coordinateImgSrc"
          :watchedCount="coordinateDetail.watchedCount"
          :itemTagPosition="coordinateDetail.itemTagPosition"
          :itemName="coordinateDetail.itemName"
        />
        
        <!-- TODO: 各種アクションボタン -->
        <div>

        </div>
        <!-- TODO: コメント欄 -->
        <div>

        </div>

      </div>
      <!-- メインコンテンツ -->
      <div class="w-2/5 p-4">
        <CoordinateDetail
          :petName="coordinateDetail.petName"
          :itemName="coordinateDetail.itemName"
          :description="coordinateDetail.description"
          :date="coordinateDetail.date"
        />
        <div class="w-full mt-4 px-4 py-4 bg-white border-2">
          <h1 class="text-lg">着用アイテム</h1>
          <div class="flex gap-2 items-center justify-center">
            <div class="flex flex-col items-center">
              <figure class="pt-2">
                <img
                  :src="coordinateDetail.itemImgSrc"
                  class="object-cover w-64 rounded-xl"
                />
              </figure>
              <p class="my-2 py-2">{{coordinateDetail.itemName}}</p>
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
<script setup lang="ts">
import { ShareIcon, UserAddIcon } from '@heroicons/vue/solid'
import CoordinateListJson from '@/assets/json/coordinateList.json'
import { yearMonthDate }from '@/utils/dateFormatters.ts'

const route = useRoute()
const coordinateId = route.params.id

const coordinateList = CoordinateListJson.coordinateList
const coordinateDetail = coordinateList.find(coordinateDetail => coordinateDetail.coordinateId === coordinateId)

</script>
<style lang="css">
</style>
