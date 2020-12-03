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
      <el-radio-group v-model="radioValue">
        <el-radio
          :disabled="disabled"
          :label="item.value"
          v-for="(item, index) of radioList"
          :key="index"
          @change="$event => $emit('input', $event)"
          >{{ item.text }}</el-radio
        >
      </el-radio-group>
    </el-form-item>
  </div>
</template>
<script type="text/babel">
export default {
  name: "EleTooltipRadio",
  data() {
    return {
      radioValue: null
    };
  },
  props: {
    value: Boolean,
    radioList: {
      type: Array
    },
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
  },
  watch: {
    value: {
      handler(e) {
        this.radioValue = e;
      },
      immediate: true
    },
    radioValue: {
      handler(e) {
        this.$emit("input", e);
      }
    }
  }
};
</script>
