<template>
  <div class="container my-5" v-if="todo != null">
    <h1 class="text-4xl">
      Single Todo <strong>{{ todo.id }}</strong>
    </h1>
    <h5 class="text-xl my-5">
      User Title: <strong>{{ todo.title }}</strong>
    </h5>
    <h6 class="text-xl my-5">
      User ID: <strong>{{ todo.userId }}</strong>
    </h6>
  </div>
  <div class="container my-5" v-else>
    <h1 class="text-4xl">
      Not found todo list
    </h1>
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
