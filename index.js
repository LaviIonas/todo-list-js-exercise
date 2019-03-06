function newTask(title, desc) {
  const task = {
    title: title,
    desc : desc,
    complete: false,

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    taskComplete: function () {
      this.complete = true;
    }
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Up the kitty litter", "she pooped alot");
const task2 = newTask("Do laundry", "I pooped my pants");
const tasks = [task1, task2];

task1.logState();
task1.taskComplete();
task1.logState();


