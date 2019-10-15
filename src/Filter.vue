<template>
  <div>
    <h2>{{ title | lowerCase }}</h2>
    <h2>{{ title | reverse | lowerCase }}</h2>

    <input type="text" v-model="searchName">
    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
    <app-list></app-list>
  </div>
</template>
<script>
    import listMixin from "./listMixin";

    export default {
        data() {
            return {
                title: 'Hi FILTER',
            }
        },
        mixins: [listMixin],
        filters: {
            lowerCase(value) {
                return value.toLowerCase();
            }
        },
    }
</script>
