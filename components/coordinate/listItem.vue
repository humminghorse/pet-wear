<template>
  <div
    class="card bg-base-100 h-auto mt-1 mb-1 shadow-xl card-width"
  >
    <a :href="'/coordinates/' + coordinateId">
      <figure class="px-2 pt-2">
        <img
          :src="coordinateImgSrc"
          class="rounded-xl object-contain h-48"
        />
      </figure>
    </a>
    <div class="card-body items-center text-center">
      <!-- TODO: ブラウザのサイズを変えているときに崩れる -->
      <h3 class="text-sm -mt-4">着用アイテム</h3>
      <a href="/items/1" class="flex flex-col sm:flex-row">
        <img
          :src="itemImgSrc"
          class="rounded-xl h-12 object-contain"
        />
        <p class="text-sm ml-0 sm:ml-4">
          {{ itemName }}
        </p>
      </a>
      <!-- <div class="hidden sm:inline card-actions mt-2">
        <a :href="'/pets/' + petId" class="btn btn-primary w-full">
          この子の<br />他のコーディネートを見る
        </a>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  coordinateId: String,
  coordinateImgSrc: String,
  petId: String,
  itemImgSrc: String,
  itemName: String,
  itemColor: String
})
</script>
<style scoped>
@media (max-width: 639px) {
  .card-width {
    width: calc(50% - 1rem);
  }
}
@media (min-width: 640px) {
  .card-width {
    width: calc(33.333333% - 1rem);
  }
}
</style>