<template>
  <div class="home">
    <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />

    <Form />

    <TaskList />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import TaskList from "@/components/TaskList.vue";

export default {
  name: "Home",
  components: {
    Form,
    TaskList,
  },
};
</script>
