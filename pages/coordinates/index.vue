<template>
  <TheTab />

  <!-- タイトル -->
  <h1 class="mt-4 text-2xl ml-2 sm:ml-0">コーディネート一覧</h1>

  <!-- body -->
  <p class="mt-2 text-right mr-2 sm:mr-0">{{FilteredCoordinateList.length}}件</p>
  <div class="border-t-2 flex items-start bg-neutral">
    <div class="hidden sm:inline control-panel bg-white flex-auto m-4 p-2 w-1/12">
      <!-- <BaseRadio
        radioTitle="ペットの種類"
        radioName="radio-pet-type"
        v-bind:labelTexts="['犬', '猫']"
      />
      <BaseRadio
        radioTitle="ペットの色"
        radioName="radio-pet-color"
        v-bind:labelTexts="['白', '黒', '茶']"
      />
      <BaseRadio
        radioTitle="アイテムの種類"
        radioName="radio-item-type"
        v-bind:labelTexts="['首輪', '服', 'その他']"
      /> -->
      <BaseRadio
        radioTitle="アイテムの色"
        radioName="radio-item-color"
        :radioItems="itemColors"
        :checkedValue="checkedItemColor"
        @update:checkedValue='newValue => {checkedItemColor = newValue}'
      />
    </div>
    <div class="content flex flex-wrap sm:gap-4 sm:mx-4 sm:my-4 sm:w-3/4">
      <template v-for="coordinateListItem in  FilteredCoordinateList" :key="coordinateListItem.coordinateId">
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
    <div class="sm:hidden w-20 h-10 text-white bg-black bg-opacity-50 fixed bottom-4 right-4"> 
      絞り込み
    </div>
  </div>
</template>
<script setup lang="ts"> // 参考: Nuxt3におけるscript setupの基本的な使い方とFAQ(https://zenn.dev/coedo/articles/86bc31acb4ea47)
import CoordinateListJson from '@/assets/json/coordinateList.json'
import ItemColorsJson from '@/assets/json/itemColors.json'
const itemColors = ItemColorsJson.itemColors
const checkedItemColor = ref<String>('')

const coordinateList = ref(CoordinateListJson.coordinateList)
const FilteredCoordinateList = ref(CoordinateListJson.coordinateList)

watch(checkedItemColor, () => {
  FilteredCoordinateList.value = coordinateList.value.filter(item => item.itemColor === checkedItemColor.value)
})
</script>
