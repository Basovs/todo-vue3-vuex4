<template>
  <ul v-if="taskList" class="w-full max-w-sm mx-auto">
    <Task />
  </ul>
</template>

<script>
import { mapState } from "vuex";
import Task from "./Task.vue";

export default {
  name: "TaskList",
  components: {
    Task,
  },
  computed: {
    ...mapState("taskStore", ["taskList"]),
  },
};
</script>
