<template>
  <div class="ele-tooltip-input" :style="{ width: inputWidth }">
    <!-- 超出6个字省略号 -->
    <template v-if="label">
      <span v-if="required" class="ele-tooltip-input__required">*</span>
      <span
        class="ele-tooltip-input__label"
        v-if="label && label.length <= 6"
        >{{ label }}</span
      >
      <el-tooltip v-else :content="label" placement="top">
        <span class="ele-tooltip-input__label">{{
          label.slice(0, 5) + ".."
        }}</span>
      </el-tooltip>
    </template>
    <el-form-item :prop="prop">
      <el-switch
        :disabled="disabled"
        :value="value"
        @change="$event => $emit('input', $event)"
      >
      </el-switch>
    </el-form-item>
  </div>
</template>
<script type="text/babel">
export default {
  name: "EleTooltipSwitch",
  data() {
    return {
      offsetWidth: 0,
      scrollWidth: 0
    };
  },
  props: {
    value: Boolean,
    input: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    label: {
      type: String
    },
    inputWidth: {
      type: String
    },
    prop: String,
    required: Boolean,
    focus: Function
  }
};
</script>
