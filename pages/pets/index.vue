<template>
  <TheTab />
  <!-- タイトル -->
  <h1 class="mt-4 text-2xl ml-2 sm:ml-0">ペット一覧</h1>

  <!-- body -->
  <p class="mt-2 text-right mr-2 sm:mr-0">{{FilteredPets.length}}件</p>
  <div class="border-t-2 flex items-start bg-neutral">
    <div class="hidden sm:inline control-panel bg-white flex-auto m-4 p-2 w-1/12">
      <BaseRadio
        radioTitle="ペットの種類"
        radioName="radio-pet-type"
        :radioItems="petTypes"
        :checkedValue="checkedPetType"
        @update:checkedValue='newValue => {checkedPetType = newValue}'
      />
    </div>
    <div class="content flex flex-wrap sm:gap-4 sm:mx-4 sm:my-4 sm:w-3/4">
      <template v-for="pet in FilteredPets" :key="pet.petId">
        <PetListItem
          :petId="pet.petId"
          :petIconSrc="pet.petIconSrc"
          :petName="pet.petName"
          :petBreed="pet.petBreed"
          :petBirthday="pet.petBirthday"
        />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import PetsJson from '@/assets/json/pets.json'
import PetTypesJson from '@/assets/json/petTypes.json'
const petTypes = PetTypesJson.petTypes
const checkedPetType = ref<String>('')

const pets = ref(PetsJson.pets)
const FilteredPets = ref(PetsJson.pets)
watch(checkedPetType, () => {
  FilteredPets.value = pets.value.filter(pet => pet.petType === checkedPetType.value)
})
</script>
<style lang="css">
</style>
