<template>
  <component
    v-for="option in options"
    :key="option.value"
    :class="{ vertical: !vertical }"
    :is="vertical ? 'div' : 'span'"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :modelValue="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
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
  },
};
</script>

<style scoped>
.vertical {
  margin-left: 20px;
}
</style>
