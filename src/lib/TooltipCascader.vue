<template>
  <div class="ele-tooltip-input" :style="{ width: inputWidth }">
    <!-- 超出6个字省略号 -->
    <template v-if="label">
      <span v-if="required" class="ele-tooltip-input__required">*</span>
      <span class="ele-tooltip-input__label" v-if="label && label.length <= 6">{{label}}</span>
      <el-tooltip v-else :content="label" placement="top">
        <span class="ele-tooltip-input__label">{{label.slice(0,5) + '..'}}</span>
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
        <el-cascader
          ref="select"
          :clearable="clearable"
          @change="onChange($event)"
          v-model="currentValue"
          :placeholder="placeholder || ''"
          :disabled="disabled"
          :filterable="filterable"
          :props="props || {}"
          :options="options"
          :show-all-levels ="showAllLevels"
          >
        </el-cascader>
      </el-form-item>
    </el-tooltip>
  </div>
</template>
<script type="text/babel">

export default {
  name: 'EleTooltipSelect',
  data() {
    return {
      offsetWidth: 0,
      scrollWidth: 0,
      currentValue: null
    }
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
    value: [Array, Number, String ],
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
      default: 'text'
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
    clearable: Boolean,
    props: Object,
    showAllLevels: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    toolTipDisabled() {
      let formDisabled = false;
      if (this.$parent && this.$parent._vnode && this.$parent._vnode.tag && this.$parent._vnode.tag === 'form') {
        formDisabled = this.$parent && this.$parent.disabled;
      } else if (this.$parent && this.$parent.$parent && this.$parent.$parent._vnode.tag && this.$parent.$parent._vnode.tag === 'form') {
        formDisabled = this.$parent && this.$parent.$parent && this.$parent.$parent.disabled;
      }
      const hasMoreValue = this.value && Array.isArray(this.value) && this.value.length > 1;
      return this.disabled ? !hasMoreValue : formDisabled === true ? !hasMoreValue : true;
    },
    selectedString() {
      const selectedStringArray = [];
      (this.options || []).forEach(item => {
        if (Array.isArray(this.value) && this.value.includes(item[this.valueKey || 'value']) || (item[this.valueKey || 'value'] === this.value)) {
          selectedStringArray.push(item[this.labelKey || 'label']);
        }
      });
      // @TODO 可以考虑直接适用value
      return this.allowCreate ? this.value?.toString() : selectedStringArray?.toString()
    }
  },
  methods: {
    onChange(e) {
      this.$emit('change', e);
      this.change && this.change()
    }
  },
  watch: {
    value: {
      handler(e) {
        this.currentValue = e
      },
      immediate: true
    },
    currentValue: {
      handler(e) {
        this.$emit('input', e);
      }
    }
  }
}

</script>