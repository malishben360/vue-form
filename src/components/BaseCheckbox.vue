<template>
  <input
    v-bind="$attrs"
    :checked="modelValue"
    type="checkbox"
    @change="$emit('update:modelValue', $event.target.checked)"
    class="field"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : ''"
    :aria-invalid="error ? true : false"
  />
  <label :for="uuid" v-if="label">{{ label }}</label>
  <p v-if="error" class="errorMessage" aria-live="assertive">
    {{ error }}
  </p>
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
    error: {
      type: String,
      default: "",
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
