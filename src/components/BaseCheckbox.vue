<template>
  <div>
    <input
      :checked="modelValue"
      type="checkbox"
      class="field"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <label>{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "BaseCheckbox",

  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style></style>
