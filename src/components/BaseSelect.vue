<template>
  <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    v-bind="{
      ...$attrs,
      onChange: ($event) => $emit('update:modelValue', $event.target.value),
    }"
  >
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option"
      :selected="option == modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    options: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
