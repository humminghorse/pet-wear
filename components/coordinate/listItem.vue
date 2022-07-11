<template>
  <div
    class="card bg-base-100 h-auto shadow-xl card-width"
  >
    <a :href="'/coordinates/' + coordinateId">
      <figure class="sm:px-2 sm:pt-2">
        <img
          :src="coordinateImgSrc"
          class="object-cover sm:rounded-xl sm:object-contain sm:h-48"
        />
      </figure>
    </a>
    <div class="card-body sm:items-center text-center">
      <h3 class="hidden sm:inline text-sm -mt-4">着用アイテム</h3>
      <a href="/items/1" class="flex gap-2 items-center sm:flex-row">
        <img
          :src="itemImgSrc"
          class="rounded-xl h-24 sm:h-12 object-contain w-1/3 sm:w-auto"
        />
        <p class="sm:text-sm ml-0 sm:ml-4 w-2/3 sm:w-auto text-left">
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
.card-width {
  @apply rounded-none;
  width: 100%;
}
/* @media (min-width: 640px) { */
@screen sm {
  .card-width {
    @apply rounded-xl;
    width: calc(33.333333% - 1rem);
  }
}
</style>