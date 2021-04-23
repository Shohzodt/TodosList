<template>
  <div class="container my-5">
    <h1 class="text-4xl">Todos</h1>
    <TodosList class="mt-8"/>
  </div>
</template>

<script>
export default {
  async asyncData ({ store }) {
    await store.dispatch("getTodos")
  }
}
</script>

<style>
</style>
