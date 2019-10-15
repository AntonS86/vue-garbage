<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <hr>
    <slot name="text"></slot>
  </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style scoped>
  div {
    border: 1px solid black;
  }

  h3 {
    color: blue;
  }
</style>
