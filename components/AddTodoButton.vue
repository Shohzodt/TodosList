<template>
  <button
    @click="$emit('show')"
    class="
      bg-blue-500
      hover:bg-blue-700
      text-white
      font-bold
      py-2
      px-4
      rounded-lg
    "
  >
    Add Todo
  </button>
</template>

<script>
export default {};
</script>

<style>
</style>
