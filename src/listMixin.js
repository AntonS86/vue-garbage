export default {
  data() {
    return {
      searchName: '',
      names     : [
        'vlad',
        'petya',
        'gora'
      ]
    }
  },
  computed: {
    filteredNames: function () {
      return this.names.filter((el) => {
        return el.indexOf(this.searchName) !== -1;
      })
    }
  }
}
