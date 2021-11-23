import { createStore } from "vuex"
import taskStore from "./taskStore"

export default createStore({
  modules: { taskStore },
})
