<template>
  <h3 class="text-lg mt-2">{{ radioTitle }}</h3>
  <template v-for="labeltext in labelTexts">
    <div class="form-control">
      <label class="label cursor-pointer justify-start">
        <input
          type="radio"
          name="radioName"
          class="radio checked:bg-accent mr-2"
          checked
        />
        <span class="label-text"> {{ labeltext }} </span>
      </label>
    </div>
  </template>
</template>
<script lang="ts">
type Props = {
  radioTitle: string;
  radioName: string;
  labelTexts: string[];
};
export default defineComponent({
  props: {
    radioTitle: {
      type: String,
      required: true,
    },
    radioName: {
      type: String,
      required: true,
    },
    labelTexts: {
      type: Array as string,
      required: true,
    },
  },
});
</script>
