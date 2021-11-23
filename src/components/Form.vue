  <template>
  <form @submit.prevent="createTask()" class="w-full max-w-sm mx-auto">
    <h1 class="font-bold text-left text-2xl">Task manager</h1>

    <input
      type="text"
      autocomplete="off"
      :value="taskContent"
      @change="setValue($event)"
      name="taskContent"
      class="input"
    />
  </form>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Form",
  computed: { ...mapState("taskStore", ["taskContent"]) },
  methods: {
    ...mapMutations("taskStore", ["createTask", "setValue"]),
  },
};
</script>