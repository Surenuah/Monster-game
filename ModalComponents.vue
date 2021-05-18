<template>
  <div class="modal-wrap">
    <div class="modal-window">
      <h3>{{mainText}}</h3>
      <button @click="playAgain">{{buttonText}}</button>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponents",
  props: {
    mainText: {
      type: String,
      default: 'Opps'
    },
    buttonText: {
      type: String,
      default: 'Enter button text'
    }
  },
  methods: {
    playAgain() {
      this.$emit('restartGameModal');
    },
    closeModal() {
      this.$emit('closeModal');
    }
  }
}
</script>

<style scoped>
.modal-wrap {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0, .6);
}
.modal-window {
  width: 320px;
  margin: 250px auto;
  background-color: #fff;
  padding: 20px 30px;
}
</style>