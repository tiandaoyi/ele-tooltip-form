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
      <el-date-picker
        :disabled="disabled"
        :value-format="valueFormat"
        v-model="currentValue"
        align="right"
        :picker-options="pickerOptions"
        :type="type"
        :editable="editable"
      />
    </el-form-item>
  </div>
</template>
<script type="text/babel">
export default {
  name: "EleTooltipDate",
  data() {
    return {
      offsetWidth: 0,
      scrollWidth: 0,
      currentValue: null
    };
  },
  props: {
    value: [Number, String, Date],
    change: {
      type: [Number, String, Date]
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    valueFormat: {
      type: String
    },
    type: {
      type: String,
      default: "date"
    },
    label: {
      type: String
    },
    inputWidth: {
      type: String
    },
    prop: String,
    required: Boolean,
    focus: Function,
    pickerOptions: Object,
    editable: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    value: {
      handler(e) {
        this.currentValue = e;
      },
      immediate: true
    },
    currentValue: {
      handler(e) {
        this.$emit("input", e);
      }
    }
  }
};
</script>
