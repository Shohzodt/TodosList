<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  #
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="todo in todoList" :key="todo.id">
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  @click="toSinglePage(todo)"
                >
                  <div class="flex items-center">{{ todo.id }}</div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  @click="toSinglePage(todo)"
                >
                  <div class="text-sm text-gray-900">{{ todo.title }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      px-2
                      inline-flex
                      text-xs
                      leading-5
                      font-semibold
                      rounded-full
                      bg-green-100
                      text-green-800
                    "
                    >{{ todo.completed }}</span
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    inputText: {
      default: null,
    },
  },
  data() {
    return {
      todoList: [],
    };
  },
  watch: {
    inputText(value) {
      if (value.length > 1) {
        this.todoList = this.todoList.filter((item) =>
          item.title.includes(value)
        );
        return;
      }
      this.todoList = this.todos;
    },
    todos: {
      deep: true,
      immediate: true,
      handler(value) {
        this.todoList = value;
      },
    },
  },
  methods: {
    toSinglePage(todo) {
      this.$router.push({ path: `todos/${todo.id}` });
    },
  },
  computed: {
    ...mapState({
      todos: (state) => state.todos,
    }),
  },
};
</script>

<style>
#list {
  cursor: pointer;
}
.bg-white tr {
  cursor: pointer;
}
</style>
