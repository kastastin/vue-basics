const App = {
  data() {
    return {
      title: "Notes list",
      placeholderText: "Enter note here",
      inputValue: "",
      notes: ['First note', 'Second note'],
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    toUpperCase(str) {
      return str.toUpperCase();
    }
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2;
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) this.inputValue = "";
    }
  }
}

Vue.createApp(App).mount("#app")

