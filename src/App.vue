<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <!-- <li class="nav-item active">
             <router-link class="nav-link" :to="'/'">Home</router-link>
           </li>
           <li class="nav-item">
             <router-link class="nav-link" :to="'/cars'">Cars</router-link>
           </li>-->
          <router-link tag="li" class="nav-item" exact to="/" active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/car/3" active-class="active">
            <a class="nav-link">Car 3</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/car/4" active-class="active">
            <a class="nav-link">Car 4</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <h1>Parent: {{ carName }}</h1>
    <app-counter></app-counter>
    <app-car
      v-bind:carName="carName"
      v-bind:car-year="carYear"
      v-bind:changeFoo="changeNameToAudio"
      v-on:nameChange="carName = $event"
      @counterUpdated="counter = $event"
    ></app-car>
    <app-user>
      <h3 slot="title">{{ userName }}</h3>
      <p slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, tenetur?</p>
    </app-user>
    <app-news></app-news>
    <app-filter></app-filter>
    <app-form></app-form>
    <app-validation></app-validation>
    <app-animation></app-animation>
  </div>
</template>

<script>
    import Car from './Сar';
    import Counter from "./Counter";
    import User from "./User";
    import News from "./News";
    import Filter from "./Filter";
    import Animation from "./Animation";


    export default {
        data() {
            return {
                carName : 'Ford',
                carYear : 2015,
                userName: 'John',
            }
        },
        components: {
            appCar      : Car,
            appCounter  : Counter,
            appUser     : User,
            appNews     : News,
            appFilter   : Filter,
            appAnimation: Animation,
    },
    methods   : {
        changeNameToAudio: function () {
            this.carName = 'Audi';
        }
    }
    }
</script>

<style scoped>
  h3 {
    color: green
  }
</style>
