<template>
  <div
    class="card bg-base-100 h-auto my-4 shadow-xl items-center"
    style="width: calc(33.333333% - 1rem)"
  >
    <a :href="'/pets/' + petId">
      <figure class="px-2 pt-2">
        <img
          :src="petIconSrc"
          class="rounded-xl object-contain h-48"
        />
      </figure>
    </a>
    <span class="text-xl">{{petName}}</span>
    <div class="mb-2">
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
