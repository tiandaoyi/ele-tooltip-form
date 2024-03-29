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
      :content="value + ''" 
      placement="top"
      ref="tip"
    >
      <el-form-item :prop="prop">
        <el-input
          ref="input" 
          :value="value"
          :maxlength="maxlength"
          :placeholder="placeholder || ''"
          :disabled="disabled"
          @input="filterReg($event)"
          :type="type"
          :clearable="!focus || clearable"
          :readonly="!!focus && !clearable"
          @clear="clear && clear()"
          @focus="focus && focus()"
          @blur="blur && blur()"
          @change="change && change()"
          :autosize="autosize"
          :show-word-limit="showWordLimit"
          v-if="!handleSelect"
        >
          <template slot="append" v-if="append || append === null">{{append}}</template>
          <template slot="prepend" v-if="prepend || prepend === null">{{prepend}}</template>
        </el-input>
        <el-autocomplete
         :popper-class="getClassName"
          ref="input" 
          :value="value"
          :maxlength="maxlength"
          :placeholder="placeholder || ''"
          :disabled="disabled"
          @input="filterReg($event)"
          :type="type"
          :clearable="!focus || clearable"
          :readonly="!!focus && !clearable"
          @clear="clear && clear()"
          @focus="focus && focus()"
          :autosize="autosize"
          :show-word-limit="showWordLimit"
          @select="handleSelect && handleSelect($event)"
          :fetch-suggestions="querySearchAsync"
          v-if="!!handleSelect"
          :debounce="debounce"
        >
          <template slot="append" v-if="append || append === null">{{append}}</template>
          <template slot="prepend" v-if="prepend || prepend === null">{{prepend}}</template>
        </el-autocomplete>

      </el-form-item>
      
    </el-tooltip>

  </div>

</template>
<script type="text/babel">
import { debounce } from './utils.js'
export default {
  name: 'EleTooltipInput',
  data() {
    return {
      offsetWidth: 0,
      scrollWidth: 0,
      isInit: true,
      updateFlag: true
    }
  },
  props: {
    value: [String, Number],
    input: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    disabled: {
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
    getClassName:String,
    focus: Function,
    handleSelect: Function,
    querySearchAsync: Function,
    append: [String,Number,Boolean],
    prepend: [String,Number,Boolean],
    clearable: Boolean,
    clear: Function,
    blur: Function,
    change: Function,
    debounce: Number,
    autosize: {
      type: [Object, Boolean],
      default: null  
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    reg: {
      type: [String, RegExp],
      default: null
    }
  },
  methods: {
    setToolTipDisabled() {
      if (this.$refs.input) {
        this.offsetWidth = this.$refs['input']?.$refs?.input?.offsetWidth || 0;
        this.scrollWidth = this.$refs['input']?.$refs?.input?.scrollWidth || 0;
      }
    },

    filterReg(e) {
      if (!this.reg || this.reg.test(e)) {
        this.$emit('input', e)
      }
    },
    getFormStatus() {
      let formDisabled = false;
      // 判断表单是否禁用
      if (this.$parent?._vnode?.tag === 'form') {
        formDisabled = this.$parent.disabled || false;
      } else if (this.$parent?.$parent?._vnode?.tag === 'form') {
        formDisabled = this.$parent.$parent.disabled || false;
      }
      return formDisabled
    }
  },
  computed: {
    toolTipDisabled() {
      if (!this.updateFlag) {
        return true
      }

      let offsetWidth = 0;
      let scrollWidth = 0;
      if (this.$refs.input) {
        offsetWidth = this.$refs['input']?.$refs?.input?.offsetWidth || 0;
        scrollWidth = this.$refs['input']?.$refs?.input?.scrollWidth || 0;
      } else {
        offsetWidth = this.offsetWidth;
        scrollWidth = this.scrollWidth;
      }
      // 判断文本内容是否大于宽度
      const isDomOverWidth = scrollWidth > offsetWidth;
      const flag = this.disabled ? !isDomOverWidth : this.getFormStatus() === true ? !isDomOverWidth : true
      return flag
    }
  },
  watch: {
    value: {
      handler(val) {
        this.$nextTick(() => {
          // 初始化的值不判断
          if (!this.isInit) {
            if (this.disabled || this.getFormStatus()) {
              this.setToolTipDisabled()
            } else {
              debounce(this.setToolTipDisabled, 800)
            }
          } else {
            if (val) {// 解决初始化组件了, 但是val有值的问题
              this.updateFlag = false
              this.$nextTick(() => {
                this.updateFlag = true
              })
            }
            this.isInit = false
          }
        })
      },
      immediate: true
    }
  }
}

</script>