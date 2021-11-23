<template>
  <li
    v-for="(task, i) in taskList.slice().reverse()"
    :key="i"
    class="
      flex
      shadow
      bg-green-300
      my-2
      text-gray-900
      font-bold
      p-3
      text-left
      items-center
    "
  >
    <p class="w-full" v-if="taskToUpdate !== task" @click="updateTask(task)">
      {{ task.taskContent }}
    </p>

    <input
      v-if="taskToUpdate === task"
      type="text"
      name="taskToUpdateContent"
      :value="taskToUpdateContent"
      @change="setTaskToUpdateContent($event)"
    />

    <div class="grid gap-2 grid-flow-col ml-auto">
      <Button @click="updateTask(task)" :color="'warning'">Update</Button>

      <Button @click="deleteTask(task)" :color="'error'">Delete</Button>
    </div>
  </li>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Button from "./Button.vue";

export default {
  name: "Task",

  components: { Button },

  computed: {
    ...mapState("taskStore", [
      "taskList",
      "taskToUpdate",
      "taskToUpdateContent",
    ]),
  },
  methods: {
    ...mapMutations("taskStore", [
      "updateTask",
      "deleteTask",
      "setTaskToUpdateContent",
    ]),
  },
};
</script>
