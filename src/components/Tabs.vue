<template>
  <div>
    <div class="flex items-center justify-center gap-4">
      <slot name="tab-buttons"></slot>
    </div>
    <slot :name="slotName"></slot>
  </div>
</template>

<script>
export default {
  props: {
    slotName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
