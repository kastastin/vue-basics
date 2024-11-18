const options = {
  data: () => ({
    goals: [],
    enteredGoal: "",
  }),
  methods: {
    addGoal() {
      if (this.enteredGoal) this.goals.push(this.enteredGoal);
      this.enteredGoal = "";
    },
    removeGoal() {
      this.goals.splice(this.goals.indexOf(this.enteredGoal), 1);
    },
  },
};

Vue.createApp(options).mount("#user-goal");

// --- Native JS ---
// const listEl = document.querySelector('ul');
// const inputEl = document.querySelector('input');
// const buttonEl = document.querySelector('button');
//
// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }
//
// buttonEl.addEventListener('click', addGoal);
