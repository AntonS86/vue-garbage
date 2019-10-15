<template>
  <div class="car">
    <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button @click="changeName">Change Name</button>
    <button @click="changeFoo()">Change Parent</button>
    <button @click="updateCounter">Update Counter</button>
  </div>
</template>
<script>
import {eventEmitter} from "./main";

export default {
    //props: ['carName', 'carYear'],
    props: {
        carName: {
            type: String,
            required: true,
            default: 'Default Name'
        },
        carYear: Number,
        changeFoo: Function
    },
    methods: {
        changeName: function() {
            this.carName = 'BMV';
            this.$emit('nameChange', this.carName);
        },
        updateCounter: function () {
            eventEmitter.$emit('counterUpdated', 3)
        }
    },
    computed: {
        reverseName: function() {
            return this.carName.split('').reverse().join('');
        }
    }
}
</script>
<style>
  .car {
    border: 1px solid black;
    padding: 10px;
  }
</style>
