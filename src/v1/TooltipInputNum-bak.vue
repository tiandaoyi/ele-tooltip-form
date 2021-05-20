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
      <el-input-number
        :size="size"
        :step="step"
        controls-position="right"
        v-model="numValue"
        :disabled="disabled"
        :precision="precision"
        :min="min"
        :max="max"
        @change="$event => $emit('change', $event)"
        :placeholder="placeholder || ''"
        @clear="clear && clear()"
        @focus="focus && focus()"
      >
      </el-input-number>
    </el-form-item>
  </div>
</template>
<script type="text/babel">
export default {
  name: "EleTooltipRadio",
  data() {
    return {
      numValue: null
    };
  },
  props: {
    precision: {
      type: Number,
      default: null
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: null
    },
    min: {
      type: Number,
      default: null
    },
    size: {
      type: String
      // default: 'mini'
    },
    value: Number,
    input: {
      type: Number
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
  },
  watch: {
    value: {
      handler(e) {
        this.numValue = e;
      },
      immediate: true
    },
    numValue: {
      handler(e) {
        this.$emit("input", e);
      }
    }
  }
};
</script>
