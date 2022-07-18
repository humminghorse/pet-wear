<template>
  <div
    class="card bg-base-100 h-auto shadow-xl items-center card-width"
  >
    <a :href="'/pets/' + petId">
      <figure class="sm:px-2 sm:pt-2">
        <img
          :src="petIconSrc"
          class="object-cover sm:rounded-xl sm:object-contain sm:h-48"
        />
      </figure>
    </a>
    <span class="text-xl">{{petName}}</span>
    <div class="mb-4 sm:mb-2">
      <span class="mx-2">{{petBreed}}</span>
      <span class="mx-2">{{age}}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAge }from '@/utils/dateFormatters.ts'
const props = defineProps({
  petId: String,
  petIconSrc: String,
  petName: String,
  petBreed: String,
  petBirthday: String
})
const age = getAge(props.petBirthday)
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
