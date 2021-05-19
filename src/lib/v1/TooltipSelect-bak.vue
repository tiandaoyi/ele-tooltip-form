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
    <el-tooltip
      :disabled="toolTipDisabled"
      class="item"
      effect="light"
      :content="selectedString"
      placement="top"
    >
      <el-form-item :prop="prop">
        <!-- 多选或者非必填都是可清除 -->
        <el-select
          ref="select"
          :value="value"
          :multiple="multiple"
          :clearable="multiple || !required"
          collapse-tags
          @change="onChange($event)"
          :placeholder="placeholder || ''"
          :disabled="disabled"
          :filterable="filterable"
          :allow-create="allowCreate"
        >
          <el-option
            v-for="(item, index) of options"
            :key="index"
            :label="labelKey ? item[labelKey] : item.label"
            :value="valueKey ? item[valueKey] : item.value"
            :disabled="itemDisabled && item.disabled"
          >
          </el-option>
        </el-select>
      </el-form-item>
    </el-tooltip>
  </div>
</template>
<script type="text/babel">
export default {
  name: "EleTooltipSelect",
  data() {
    return {
      offsetWidth: 0,
      scrollWidth: 0
    };
  },
  props: {
    options: {
      type: Array,
      default: []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: [Array, Number, String],
    input: {
      type: [Array, String, Number, Boolean]
    },
    // 单条点击
    simpleClick: {
      type: [Array, String, Number, Boolean]
    },
    placeholder: {
      type: String
    },
    // 整体禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 行禁用
    itemDisabled: {
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
    labelKey: String,
    valueKey: String,
    change: Function,
    filterable: {
      type: Boolean,
      default: false
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    isSimpleClick: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    toolTipDisabled() {
      let formDisabled = false;
      if (
        this.$parent &&
        this.$parent._vnode &&
        this.$parent._vnode.tag &&
        this.$parent._vnode.tag === "form"
      ) {
        formDisabled = this.$parent && this.$parent.disabled;
      } else if (
        this.$parent &&
        this.$parent.$parent &&
        this.$parent.$parent._vnode.tag &&
        this.$parent.$parent._vnode.tag === "form"
      ) {
        formDisabled =
          this.$parent && this.$parent.$parent && this.$parent.$parent.disabled;
      }
      const hasMoreValue =
        this.value && Array.isArray(this.value) && this.value.length > 1;
      return this.disabled
        ? !hasMoreValue
        : formDisabled === true
        ? !hasMoreValue
        : true;
    },
    selectedString() {
      const selectedStringArray = [];
      (this.options || []).forEach(item => {
        if (
          (Array.isArray(this.value) &&
            this.value.includes(item[this.valueKey || "value"])) ||
          item[this.valueKey || "value"] === this.value
        ) {
          selectedStringArray.push(item[this.labelKey || "label"]);
        }
      });
      // @TODO 可以考虑直接适用value
      return this.allowCreate
        ? this.value?.toString()
        : selectedStringArray?.toString();
    }
  },
  methods: {
    onChange(e) {
      if (this.isSimpleClick) {
        this.$emit("simpleClick", e);
      } else {
        this.$emit("input", e);
      }
      this.change && this.change();
    }
  }
};
</script>
