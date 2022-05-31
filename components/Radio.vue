<template>
  <h3 class="text-lg mt-2">{{ radioTitle }}</h3>
  <template
    v-for="(radioItem, index) in radioItems"
    :key="index"
  >
    <div class="form-control">
      <label class="label cursor-pointer justify-start">
        <input
          type="radio"
          class="radio checked:bg-accent mr-2"
          :name="radioName"
          :value='radioItem.value'
          v-model='inputCheckedValue'
        />
        <span class="label-text"> {{ radioItem.label }} </span>
      </label>
    </div>
  </template>
</template>
<script setup lang="ts">
const props = defineProps({
  radioTitle: String,
  radioName: String,
  checkedValue: String,
  radioItems: Array as Object[]
})
const emit = defineEmits(['update:checkedValue'])
const inputCheckedValue = ref<String>(props.checkedValue)
watch(inputCheckedValue, () => {
  emit('update:checkedValue', inputCheckedValue.value)
})
// const checked
</script>
