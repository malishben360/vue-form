<template>
  <input
    v-bind="$attrs"
    :checked="modelValue"
    type="checkbox"
    class="field"
    :id="uuid"
    @change="$emit('update:modelValue', $event.target.checked)"
  />
  <label :for="uuid" v-if="label">{{ label }}</label>
</template>

<script>
import UniqueID from "@/services/UniqueID";

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
  setup() {
    const uuid = UniqueID().getID();
    return {
      uuid,
    };
  },
};
</script>

<style></style>
