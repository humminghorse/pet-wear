<template>
  <div class="w-full px-4 py-4 bg-white border-2">
    <h1 class="text-lg border-b pb-1">{{petName}}の{{itemName}}を使ったコーディネート</h1>
    <div class="my-2">
      <!-- 課題: 改行コード \n が反映されない -->
      <p class="my-2 break-words whitespace-pre-wrap">{{description}}</p>
    </div>
    <p class="text-sm text-transparent/50 border-t pt-1">{{date}}</p>
  </div>
</template>
<script lang="ts">
type Props = {
  petName: string;
  itemName: string;
  description: string;
  date: string;
};
export default defineComponent({
  props: {
    petName: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
});
</script>
