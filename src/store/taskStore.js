export default {
  namespaced: true,
  // State as state :D - By default all states are readOnly in components (protected from hacking)
  state: {
    taskContent: "",
    taskList: [],

    taskToUpdate: null,
    taskToUpdateContent: "",
  },
  // computed properties such as .length .filter and so on...
  getters: {},
  // The only CRUD for state
  mutations: {
    setValue(state, event) {
      state.taskContent = event.target.value
    },
    setTaskToUpdateContent(state, event) {
      state.taskToUpdateContent = event.target.value
    },
    createTask(state) {
      console.log("taskContent", state.taskContent)

      const payload = {
        _id: Math.floor(Math.random() * 1000),
        taskContent: state.taskContent,
      }

      state.taskList.push(payload)

      // cleanup
      state.taskContent = ""
    },
    updateTask(state, task) {
      console.log("updateTask")
      if (!state.taskToUpdate) {
        console.log("Selecting current task: ", task)
        // select current task
        state.taskToUpdate = task
        state.taskToUpdateContent = task.taskContent

        return
      }
      if (state.taskToUpdate === task) {
        console.log("Updating current task: ", task)
        // update current task
        const indexOfTask = state.taskList.indexOf(task)
        if (indexOfTask !== -1) {
          const payload = {
            taskContent: state.taskToUpdateContent,
          }
          state.taskList[indexOfTask] = payload
        }
        // cleanup
        state.taskToUpdate = null
        state.taskToUpdateContent = ""

        return
      }
      // update previous selected task before selecting current task
      if (state.taskToUpdate && state.taskToUpdate !== task) {
        console.log("Updating previous task: ", state.taskToUpdate)
        // update previous task
        const indexOfTask = state.taskList.indexOf(state.taskToUpdate)
        if (indexOfTask !== -1) {
          const payload = { taskContent: state.taskToUpdateContent }
          state.taskList[indexOfTask] = payload
        }
        // and preset current task
        state.taskToUpdate = task
        state.taskToUpdateContent = task.taskContent
        console.log("new current task: ", state.taskToUpdate)

        return
      }
    },
    deleteTask(state, task) {
      // console.log(task);
      const indexOfTask = state.taskList.indexOf(task)
      // console.log("indexOfTask", indexOfTask);
      if (indexOfTask !== -1) {
        state.taskList.splice(indexOfTask, 1)
      }
    },
  },
  // Async functions here
  actions: {},
}
