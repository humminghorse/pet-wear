<template>
  <!-- 参考: このページを真似している https://wear.jp/coordinate/?tag_ids=600 -->
  <!-- 参考: containerクラス https://tailwindcss.jp/docs/container#app -->
  <div class="container mx-auto pl-4 pr-4 bg-white">
    <TheHeader />
    <div class="tabs tabs-boxed w-full">
      <a class="tab w-1/4 tab-active">コーディネート</a>
      <a class="tab w-1/4">ペット</a>
      <a class="tab w-1/4">アイテム</a>
      <a class="tab w-1/4">ショップ</a>
    </div>
    <div class="border-b-2">
      <h1 class="mt-4 text-2xl">コーディネート一覧</h1>
      <p class="mt-2 text-right">{{coordinateListCount}}件</p>
    </div>

    <!-- body -->
    <div class="flex items-start bg-neutral">
      <div class="control-panel bg-white flex-auto m-4 p-2 w-1/12">
        <!-- <Radio
          radioTitle="ペットの種類"
          radioName="radio-pet-type"
          v-bind:labelTexts="['犬', '猫']"
        />
        <Radio
          radioTitle="ペットの色"
          radioName="radio-pet-color"
          v-bind:labelTexts="['白', '黒', '茶']"
        />
        <Radio
          radioTitle="アイテムの種類"
          radioName="radio-item-type"
          v-bind:labelTexts="['首輪', '服', 'その他']"
        /> -->
        <Radio
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
            :itemImgSrc="coordinateListItem.itemImgSrc"
            :itemName="coordinateListItem.itemName"
            itemColor=""
          />
        </template>
      </div>
    </div>

    <TheFooter />
  </div>
</template>
<script setup lang="ts">
import CoordinateListJson from '@/assets/json/coordinateList.json'
import ItemColorsJson from '@/assets/json/itemColors.json'
const itemColors = ItemColorsJson.itemColors
const checkedItemColor = ref<String>('')


const coordinateList = ref(CoordinateListJson.coordinateList)
const FilteredCoordinateList = ref(CoordinateListJson.coordinateList)
const coordinateListCount = FilteredCoordinateList.value.length

watch(checkedItemColor, () => {
  FilteredCoordinateList.value = coordinateList.value.filter(item => item.itemColor === checkedItemColor.value)
})

</script>
<style lang="css">
/* .bg-orange-sample {
  background-color: #e7541c;
}
.bg-blue-sample {
  background-color: #000099;
} */
</style>
