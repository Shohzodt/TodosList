<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container" @click.stop>
          <div class="modal-header">
            <slot name="header">Add Todo List</slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <div>
                <input
                  class="
                    px-4
                    py-2
                    leading-tight
                    rounded-md
                    border-2 border-slate-500
                  "
                  type="text"
                  placeholder="Title"
                />
              </div>
              <div>
                <input
                  class="
                    px-4
                    py-2
                    my-2
                    leading-tight
                    rounded-md
                    border-2 border-slate-500
                  "
                  type="text"
                  placeholder="Body"
                />
              </div>
              <button
                class="
                  bg-yellow-400
                  hover:bg-yellow-700
                  text-white
                  font-bold
                  py-2
                  px-4
                  rounded-lg
                "
              >
                Add
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
