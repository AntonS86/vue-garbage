<template>
  <div class="container">
    <app-counter-vuex></app-counter-vuex>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions></app-actions>

    <hr>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
    import CounterVuex from "../CounterVuex";
    import Actions from "../Actions";
    import SecondCounter from '../SecondCounterVuex';

    export default {
        components: {
            appCounterVuex: CounterVuex,
            appActions: Actions,
            appSecondCounter: SecondCounter
        },
        computed: {
            title() {
              return this.$store.getters.title;
            }
        }
    }
</script>

<style scoped>

</style>
