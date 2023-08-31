const { createApp } = Vue;

createApp({
  data() {
    return {
      list: [
        {
          text: "make a list",
          done: false,
        },
        {
          text: "print the list",
          done: false,
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
    };
  },
}).mount("#app");
