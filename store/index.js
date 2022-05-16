export const state = () => ({
  todos: [],
  todo: null
})

export const actions = {
  async getTodos ({ commit }) {
    try {
      const response = await this.$axios.get(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
      )

      if (response.status === 200) {
        commit("SET_TODOS", response.data)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  },
  async getSingleTodos ({ commit }, { id }) {
    try {
      const response = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )

      if (response.status === 200) {
        commit("SET_SINGLETODO", response.data)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
}

export const mutations = {
  SET_TODOS (state, payload) {
    state.todos = payload
  },
  SET_SINGLETODO (state, payload) {
    state.todo = payload
  }
}
