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
    inputChangeHandler(e) {
      this.inputValue = e.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = "";
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    }
  }
}

Vue.createApp(App).mount("#app")

