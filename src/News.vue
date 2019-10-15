<template>
  <div>
    <h2 v-colored:background="'green'" v-if="visible">{{ title }}</h2>
    <h2 v-colored:color.font.delay="'purple'" >{{ title }}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, voluptates.</p>
    <button @click="visible = !visible">toggle</button>
    <button v-border @click="title = 'new Title'">changeTitle</button>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: true,
                title: 'News'
            }
        },
        directives: {
            border: {
                bind(el, binding) {
                    el.style.border = '1px solid orange';
                }
            }
        }
    }
</script>
<style scoped>
  p {
    color: red;
  }
</style>
