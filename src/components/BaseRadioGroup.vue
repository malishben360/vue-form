<template>
  <component
    v-for="option in options"
    :key="option.value"
    :class="{ horizontal: !vertical }"
    :id="uuid"
    :is="vertical ? 'div' : 'span'"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
      :name="name"
      :aria-describedby="error ? `${uuid}-error` : ''"
      :aria-invalid="error ? true : false"
    />
  </component>
  <p
    v-if="error"
    :id="`${uuid}-error`"
    class="errorMessage"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

<script>
import UniqueID from "@/services/UniqueID";

export default {
  name: "BaseRadioGroup",

  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    vertical: {
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

<style scoped>
.horizontal {
  margin-left: 20px;
}
</style>
