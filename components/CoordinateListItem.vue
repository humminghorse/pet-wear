<template>
  <div
    class="card bg-base-100 h-auto mt-2 shadow-xl"
    style="width: calc(33.333333% - 1rem)"
  >
    <a :href="'/detail/' + coordinateId">
      <figure class="px-2 pt-2">
        <img
          :src="coordinateImgSrc"
          class="rounded-xl object-contain h-48"
        />
      </figure>
    </a>
    <div class="card-body items-center text-center">
      <h3 class="text-sm -ml-24 -mt-4">着用中のアイテム</h3>
      <div class="flex items-center">
        <img
          :src="itemImgSrc"
          class="rounded-xl h-12 object-contain"
        />
        <p class="text-sm ml-4">
          {{ itemName }}
        </p>
      </div>
      <div class="card-actions mt-2">
        <button class="btn btn-primary w-full">
          アイテムの<br />詳細を見る
        </button>
        <button class="btn btn-primary w-full">
          この子の<br />他のコーディネートを見る
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  coordinateId: String,
  coordinateImgSrc: String,
  itemImgSrc: String,
  itemName: String,
  itemColor: String
})
</script>
