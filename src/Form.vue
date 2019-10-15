<template>
  <div>

    <h1>Form</h1>
    <input type="text" v-model.lazy="name">
    <p>{{name}}</p>

    <textarea v-model="textarea"></textarea>
    <p>{{textarea}}</p>

    <label for="">
      <input type="checkbox" value="instagram" v-model="social"> Instagram
    </label>
    <label for="">
      <input type="checkbox" value="vk" v-model="social"> VK
    </label>
    <label for="">
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>
    <ul>
      <li v-for="soc of social">{{ soc }}</li>
    </ul>

    <label for="">
      <input type="radio" value="ford"  v-model="car"> ford
    </label>
    <label for="">
      <input type="radio" value="audi"  v-model="car"> audi
    </label>
    <label for="">
      <input type="radio" value="lada"  v-model="car"> lada
    </label>
    <p>{{car}}</p>

    <hr>

    <select>
      <option
        v-for="name of names"
        v-bind:selected="name === selectName"
      >{{ name }}</option>
    </select>

    <select v-model="selectName">
      <option
        v-for="name of names"
      >{{ name }}</option>
    </select>
    <p>{{selectName}}</p>

    <hr>

    <input type="text" v-model.number="age">
    <p>{{age}}</p>

    <hr>

    <app-onoff v-model="switched"></app-onoff>
    <div>
      <h3 v-if="switched">Component is enabled</h3>
      <h3 v-else>Component is disabled</h3>
    </div>
  </div>
</template>
<script>
    import listMixin from "./listMixin";
    import Onoff from "./Onoff";

    export default {
        data() {
            return {
                name    : 'Initial state',
                textarea: 'I am textarea',
                social: ['vk'],
                car: 'lada',
                selectName: 'igor',
                names: ['anton', 'olga', 'igor', 'vasya'],
                age: 20,
                switched: false
            }
        },
        watch: {
            age(value) {
                console.log(value)
            }
        },
        components: {
            'app-onoff': Onoff,
        }
    }
</script>
<style scoped>
  textarea {
    width: 400px;
    height: 100px;
  }

  p {
    white-space: pre;
  }
</style>
