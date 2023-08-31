const { createApp } = Vue;

createApp({
  data() {
    return {
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
      placeHolderMessage: "Add a list item",
      inputMessage: "",
    };
  },
  methods: {
    remove(index) {
      this.list.splice(index, 1);
    },
    addTodo() {
      const newElement = {
        text: this.inputMessage,
        done: false,
      };

      this.list.push(newElement);
      this.inputMessage = "";
    },
  },
}).mount("#app");
