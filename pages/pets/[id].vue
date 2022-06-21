<template>
  <div class="flex items-center w-full my-4">
    <div class="w-1/4 mb-4">
      <div class="h-64 w-64 mx-auto">
        <img class="object-cover h-full w-full rounded-full" :src="pet.petIconSrc">
      </div>
      <button class="btn mx-auto my-2 gap-x-0.5 min-h-0 h-full flex p-2 bg-accent text-white">
        <UserAddIcon class="w-5"/>
        <span class="text-white">フォローする</span>
      </button>
    </div>
    <div class="w-3/4 p-2">
      <p class="my-2 text-2xl">{{pet.petName}}</p>
      <p class="text-lg">{{pet.introduction}}</p>
    </div>
  </div>
  <h2 class="text-2xl mt-4 mb-2">{{pet.petName}}のコーディネート一覧</h2>
  <div class="border-t-2 flex bg-neutral">
    <div class="content w-full flex flex-wrap justify-center gap-4 mx-4 my-4">
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
