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
          :autosize="autosize"
          :show-word-limit="showWordLimit"
        >
          <template slot="append" v-if="append || append === null">{{append}}</template>
          <template slot="prepend" v-if="prepend || prepend === null">{{prepend}}</template>
        </el-input>
      </el-form-item>
      
    </el-tooltip>

  </div>

</template>
<script type="text/babel">

export default {
  name: 'EleTooltipInput',
  data() {
    return {
      offsetWidth: 0,
      scrollWidth: 0,
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
      type: String,
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
    focus: Function,
    append: [String,Number,Boolean],
    prepend: [String,Number,Boolean],
    clearable: Boolean,
    clear: Function,
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
    }
  },
  updated() {
    this.setToolTipDisabled();
  },
  mounted() {
    this.setToolTipDisabled()
  },
  computed: {
    toolTipDisabled() {
      let offsetWidth = 0;
      let scrollWidth = 0;
      if (this.$refs.input) {
        offsetWidth = this.$refs['input']?.$refs?.input?.offsetWidth || 0;
        scrollWidth = this.$refs['input']?.$refs?.input?.scrollWidth || 0;
      } else {
        offsetWidth = this.offsetWidth;
        scrollWidth = this.scrollWidth;
      }
      let formDisabled = false;
      if (this.$parent?._vnode?.tag === 'form') {
        formDisabled = this.$parent && this.$parent.disabled;
      } else if (this.$parent?.$parent?._vnode?.tag === 'form') {
        formDisabled = this.$parent?.$parent?.disabled || false;
      }
      // false则显示tooltip  true则不显示
      const isDomOverWidth = scrollWidth > offsetWidth;
      return this.disabled ? !isDomOverWidth : formDisabled === true ? !isDomOverWidth : true;
    }
  }
}

</script>