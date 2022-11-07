<template>
  <label :for="uuid" v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    v-bind="{
      ...$attrs,
      onChange: ($event) => $emit('update:modelValue', $event.target.value),
    }"
    class="field"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
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
  <p
    v-if="error"
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import UniqueID from "@/services/UniqueID";

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
