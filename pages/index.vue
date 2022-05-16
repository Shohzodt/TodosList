<template>
  <div class="container my-5">
    <div class="flex justify-between">
      <h1 class="text-4xl">Todos</h1>
      <SearchInput @inputText="(val) => (inputText = val)" />
      <AddTodoButton @show="isShowModal = true" />
    </div>
    <TodosList class="mt-8" :inputText="inputText" />
    <AddTodoModal v-show="isShowModal" @close="isShowModal = false" />
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch("getTodos");
  },
  data() {
    return {
      inputText: "",
      isShowModal: false,
    };
  },
};
</script>

<style>
</style>
