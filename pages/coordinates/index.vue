<template>
  <TheTab />

  <!-- タイトル -->
  <h1 class="mt-4 text-2xl">コーディネート一覧</h1>

  <!-- body -->
  <p class="mt-2 text-right">{{FilteredCoordinateList.length}}件</p>
  <div class="border-t-2 flex items-start bg-neutral">
    <div class="control-panel bg-white flex-auto m-4 p-2 w-1/12">
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
    <div class="content flex flex-wrap gap-4 mx-4 my-4 w-3/4">
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
