<template>
  <div class="button-wrap">
    <button class="button-box" :style="{background: buttonColor}">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonCompnent.vue",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    buttonColor: {
      type: String,
      default: 'green'
    }
  }
}
</script>

<style scoped>
.button-box {
  width: 320px;
  line-height: 2;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>