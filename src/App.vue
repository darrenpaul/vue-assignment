<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("apis/SET_DATA");
  },
};
</script>
