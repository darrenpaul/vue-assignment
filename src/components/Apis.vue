<template>
  <div class="w-1/2 mx-auto">
    <div v-if="!apiData">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <ApiCard
        v-for="(item, index) in apiData"
        :key="index"
        :name="item.API"
        :description="item.Description"
        :url="item.Link"
      />
    </div>
  </div>
</template>

<script>
// components
import ApiCard from "@/components/ApiCard.vue";

export default {
  components: { ApiCard },

  computed: {
    apiData() {
      return this.$store.getters["apis/DATA"];
    },
  },
};
</script>
