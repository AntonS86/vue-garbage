<template>
  <div>
    <h1>Cars Page</h1>

    <ul>
      <router-link tag="li"
                   v-for="car of 5"
                   :to="'car/' + car"
                   :key="car"
      >
        <a>{{car}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>
