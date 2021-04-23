<template>
  <div class="container my-5">
    <h1 class="text-4xl">
      Single Todo <strong v-if="todo != null">{{ todo.id }}</strong> 
    </h1>
    <h5 class="text-xl my-5">
      User Title: <strong v-if="todo != null">{{ todo.title }}</strong> 
    </h5>
    <h6 class="text-xl my-5">
      User ID: <strong v-if="todo != null">{{ todo.userId }}</strong> 
    </h6>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async asyncData({ store, params }) {
    await store.dispatch("getSingleTodos", {
      id: params.id,
    });
  },
  computed: {
    ...mapState({
      todo: (state) => state.todo,
    }),
  },
};
</script>

<style>
</style>
