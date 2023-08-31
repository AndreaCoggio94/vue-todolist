const { createApp } = Vue;

createApp({
  data() {
    return {
      newElement: {
        text: "",
        done: false,
      },
      list: [
        {
          text: "make a list",
          done: true,
        },
        {
          text: "print the list",
          done: true,
        },
        {
          text: "add removal of the list",
          done: false,
        },
        {
          text: "add an input",
          done: false,
        },
      ],
      inputMessage: "Add a list item",
    };
  },
  methods: {
    remove(index) {
      this.list.splice(index, 1);
    },
    addTodo() {
      this.list.push(this.newElement);
    },
  },
}).mount("#app");
