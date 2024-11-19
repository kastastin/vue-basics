const app = Vue.createApp({
  data: () => ({
    notes: [],
    enteredNoteValue: "",
  }),
  methods: {
    addNote() {
      this.notes.push(this.enteredNoteValue);
      this.enteredNoteValue = "";
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
  },
});

app.mount('#user-goals');

