<template>
  <input
    type="radio"
    v-bind="$attrs"
    :checked="modelValue == value"
    :value="value"
    @change="$emit('update:modelValue', value)"
  />
  <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
  name: "BaseRadio",

  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style></style>
