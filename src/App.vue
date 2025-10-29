<script lang="ts" setup>
const count = ref(2)
const double = computed(() => count.value * 2)
</script>
<template>
  <div>vue3-template-2024 {{ count }} {{ double }}</div>
</template>
