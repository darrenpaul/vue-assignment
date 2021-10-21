<template>
  <div
    class="
      bg-blue-400
      m-8
      p-12
      flex
      items-center
      justify-center
      flex-col
      gap-4
      rounded-xl
    "
  >
    <h1 class="font-bold">{{ name }}</h1>
    <p class="text-gray-600">{{ description }}</p>
    <a :href="url" target="_blank">{{ url }}</a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
