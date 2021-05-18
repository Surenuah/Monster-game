<template>
  <div class="hp-wrap">
    <div class="hp-content" :style="{width: currentHP + '%'}">
      {{ currentHP }}
    </div>
  </div>
</template>

<script>
export default {
name: "HealthBarComponent",
  props: {
    currentHP: {
      type: Number,
      required: true,
    }
  }
}
</script>

<style scoped>
.hp-wrap {
  width: 320px;
  background-color: gray;
  border: 1px solid black;
}
.hp-content {
  line-height: 2;
  background-color: greenyellow;
}
</style>