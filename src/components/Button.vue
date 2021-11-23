<template>
  <button
    class="font-bold text-white py-2 px-4 text-sm"
    :class="{
      'bg-red-400 hover:bg-red-600': color === 'error',
      'bg-yellow-400 hover:bg-yellow-600 hover:shadow-lg': color === 'warning',
    }"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    color: String,
  },
};
</script>
