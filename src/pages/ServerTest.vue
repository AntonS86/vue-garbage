<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car Name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="name">Car Name</label>
      <input type="text" class="form-control" v-model.number="carYear">
    </div>
    <button class="btn btn-success" @click="createCar">Create Car</button>
    <br>
    <button class="btn btn-success mt-3" @click="loadCars">Load Cars</button>
    <hr>
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="car of cars"
        :key="car.id"
      >
        <strong>{{car.name}}</strong> - {{ car.year}}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                carName: '',
                carYear: 2018,
                cars: [],
                resource: null,
            }
        },
        methods: {
            createCar() {
                const car = {
                    name: this.carName,
                    year: this.carYear,

                };
              /*this.$http.post('http://localhost:3000/cars', car)
                  .then(response => {
                     return response.json()
                  }).then(newCar => {
                      console.log(newCar)
              });*/
              this.resource.save({}, car);
            },
            loadCars() {
              /*this.$http.get('http://localhost:3000/cars')
                  .then(response => {
                      return response.json()
                  }).then(cars => {
                      this.cars = cars;
              });*/
              this.resource.get().then(response => response.json())
                  .then(cars => {
                      this.cars = cars;
                  })
            }
        },
        created() {
            this.resource = this.$resource('http://localhost:3000/cars');
        }

    }
</script>

<style scoped>

</style>
