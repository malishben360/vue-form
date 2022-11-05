<template>
  <input
    type="radio"
    v-bind="$attrs"
    :checked="modelValue == value"
    :value="value"
    :id="uuid"
    @change="$emit('update:modelValue', value)"
  />
  <label :for="uuid" v-if="label">{{ label }}</label>
</template>

<script>
import UniqueID from "@/services/UniqueID";

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
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>

<style></style>
