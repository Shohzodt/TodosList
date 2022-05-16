<template>
  <div class="search-input">
    <input
      type="text"
      v-model="inputText"
      @input="$emit('inputText', inputText)"
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  input {
    border: 1px solid #ddd;
    padding: 8px 20px;
    border-radius: 20px;
    min-width: 300px;
  }
}
</style>
