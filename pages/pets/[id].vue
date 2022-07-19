<template>
  <!-- パンくずリストとシェアボタン -->
  <!-- TODO: コンポーネント化  -->
  <div class="sm:flex sm:justify-between">
    <nav class="text-sm breadcrumbs">
      <ul>
        <li><a href="/pets">ペット一覧</a></li>
        <li>{{pet.petName}}</li>
      </ul>
    </nav>
    <div class="flex flex-row-reverse mt-2">
      <button class="btn w-24 bg-accent text-white min-h-0 h-full flex p-2">
        <ShareIcon class="w-5 mr-0.5 shrink-0"/>
        <span>シェアする</span>
      </button>
    </div>
  </div>

  <div class="flex gap-6 items-center w-full my-4">
    <div class="w-1/3 md:w-1/4 mb-4 shrink-0">
      <div class="aspect-square mx-auto">
        <img class="object-cover h-full w-full rounded-full" :src="pet.petIconSrc">
      </div>
      <button class="btn mx-auto my-2 gap-x-0.5 min-h-0 h-full flex p-2 bg-accent text-white">
        <UserAddIcon class="w-5"/>
        <span class="hidden sm:inline text-white">フォローする</span>
      </button>
    </div>
    <div class="p-2 grow">
      <p class="my-2 text-2xl">{{pet.petName}}</p>
      <p class="text-lg">{{pet.introduction}}</p>
    </div>
  </div>
  <div>
    <!-- 右側にマージンが入らない？ -->
    <table class="table-auto w-full mx-2">
      <!-- 先頭列をヘッダーにする場合、thead, tbodyは入れられない？ -->
      <tr>
        <th class="border px-4 py-2 bg-neutral">種別</th><td class="border px-4 py-2">{{pet.petBreed}}</td>
      </tr>
      <tr>
        <th class="border px-4 py-2 bg-neutral">誕生日</th><td class="border px-4 py-2">{{pet.petBirthday}}</td>
      </tr>
      <tr>
        <th class="border px-4 py-2 bg-neutral">性別</th><td class="border px-4 py-2">{{pet.profile.gender}}</td>
      </tr>
      <tr>
        <th class="border px-4 py-2 bg-neutral">体重</th><td class="border px-4 py-2">{{pet.profile.weight}}</td>
      </tr>
      <tr>
        <th class="border px-4 py-2 bg-neutral">毛の色</th><td class="border px-4 py-2">{{pet.profile.furColor}}</td>
      </tr>
      <tr>
        <th class="border px-4 py-2 bg-neutral">瞳の色</th><td class="border px-4 py-2">{{pet.profile.eyeColor}}</td>
      </tr>
      <tr>
        <th class="border px-4 py-2 bg-neutral">好きな食べ物</th><td class="border px-4 py-2">{{pet.profile.favoriteFood}}</td>
      </tr>
      <tr>
        <th class="border px-4 py-2 bg-neutral">好きなおもちゃ</th><td class="border px-4 py-2">{{pet.profile.favoriteToy}}</td>
      </tr>
    </table>
  </div>
  <h2 class="ml-2 sm:ml-0 text-2xl mt-4 mb-2">{{pet.petName}}のコーディネート一覧</h2>
  <div class="border-t-2 flex bg-neutral">
    <div class="content w-full flex flex-wrap justify-center sm:gap-4 sm:mx-4 sm:my-4">
      <template v-for="coordinateListItem in  coordinateList" :key="coordinateListItem.coordinateId">
        <CoordinateListItem
          :coordinateId="coordinateListItem.coordinateId"
          :coordinateImgSrc="coordinateListItem.coordinateImgSrc"
          :petId="coordinateListItem.petId"
          :itemImgSrc="coordinateListItem.itemImgSrc"
          :itemName="coordinateListItem.itemName"
          itemColor=""
        />
      </template>
    </div>
  </div>

  <a href="/" class="mt-2 text-accent color">トップへ戻る</a>
</template>
<script setup lang="ts">
import { ShareIcon, UserAddIcon } from '@heroicons/vue/solid'
import PetsJson from '@/assets/json/pets.json'
import CoordinateListJson from '@/assets/json/coordinateList.json'

const route = useRoute()
const petId = route.params.id
const pet = PetsJson.pets.filter(pet => pet.petId === petId)[0]

const coordinateList = CoordinateListJson.coordinateList.filter(coordinate => coordinate.petId === petId)


</script>
<style lang="css">
</style>
