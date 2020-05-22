<template>
  <el-tooltip 
    :disabled="toolTipDisabled" 
    class="item" 
    effect="light" 
    :content="value" 
    placement="top"
  >
    <el-input
      ref="input" 
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="($event) => $emit('input', $event)"
      :type="type"
      clearable
    >
    </el-input>
  </el-tooltip>
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
      type: String
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
      default: 'text'
    }
  },
  methods: {
    setToolTipDisabled() {
      if (this.$refs.input) {
        this.offsetWidth = this.$refs['input'].$refs.input.offsetWidth;
        this.scrollWidth = this.$refs['input'].$refs.input.scrollWidth;
      }
    }
  },
  updated() {
    this.setToolTipDisabled();
  },
  computed: {
    toolTipDisabled() {
      let offsetWidth = 0;
      let scrollWidth = 0;
      if (this.$refs.input) {
        offsetWidth = this.$refs['input'].$refs && this.$refs['input'].$refs.input ? this.$refs['input'].$refs.input.offsetWidth || 0 : 0;
        scrollWidth = this.$refs['input'].$refs && this.$refs['input'].$refs.input ? this.$refs['input'].$refs.input.scrollWidth || 0 : 0;
      } else {
        offsetWidth = this.offsetWidth;
        scrollWidth = this.scrollWidth;
      }
      let formDisabled = false;
      if (this.$parent && this.$parent._vnode && this.$parent._vnode.tag && this.$parent._vnode.tag === 'form') {
        formDisabled = this.$parent && this.$parent.disabled;
      } else if (this.$parent && this.$parent.$parent && this.$parent.$parent._vnode.tag && this.$parent.$parent._vnode.tag === 'form') {
        formDisabled = this.$parent && this.$parent.$parent && this.$parent.$parent.disabled;
      }
      // false则显示tooltip  true则不显示
      const isDomOverWidth = scrollWidth > offsetWidth;
      return this.disabled ? !isDomOverWidth : formDisabled === true ? !isDomOverWidth : true;
    }
  }
}

</script>
<style>
  .el-tooltip > .el-input__inner[disabled] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
</style>