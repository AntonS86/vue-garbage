<template>
  <div>
    <h3>Car id {{ id }}</h3>
    <button class="btn btn-sm btn-primary" @click="goBackToCars">back</button>
    <br>
    <!--<router-link
      class="btn btn-sm btn-info"
      tag="button"
      :to="'/car/' + id + '/full'"
    >full info</router-link>-->
    <router-link
      class="btn btn-sm btn-info"
      tag="button"
      :to="{name: 'carFull', params: { id }, query: {name: 'mazda', year: 2019}, hash: '#scroll'}"
    >full info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        data() {
            console.log(this.$router.currentRoute.params.id)
            return {
                //id: this.$router.currentRoute.params.id,
                id: this.$route.params.id,
            }
        },
        watch: {
            $route(toR, fromR) {
                this.id = toR.params['id']
            }
        },
        methods: {
            goBackToCars: function () {
                this.$router.push('/cars');
            }
        },
        beforeRouteLeave(to, fromR, next) {
            console.log('beforeRouteLeave')
            if (confirm('Выйти?')) {
                next();
            } else {
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>
