<template>
  <el-tooltip 
    :disabled="!toolTipDisabled" 
    class="item" 
    effect="dark" 
    :content="value" 
    placement="top"
    
  >
    <el-input 
      ref="input" 
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="($event) => $emit('input', $event)"
    >
    </el-input>
  </el-tooltip>
</template>
<script>

export default {
  data() {
    return {
      toolTipDisabled: false,
    }
  },
  props: {
    value: {
      type: String
    },
    input: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setToolTipDisabled() {
      let toolTipDisabled = this.toolTipDisabled;
      if (this.$refs.input) {
        const offsetWidth = this.$refs['input'].$refs.input.offsetWidth;
        const scrollWidth = this.$refs['input'].$refs.input.scrollWidth;
        toolTipDisabled = this.disabled && (scrollWidth > offsetWidth);
      }
      this.toolTipDisabled = toolTipDisabled;
    }
  },
  mounted() {
    // console.log('mouted', this)
    this.setToolTipDisabled();
  },
  // updated() {
  //   console.log('updated')
  // },
  watch: {
    disabled() {
      this.setToolTipDisabled();
    }
  },
}

</script>
<style>
  .el-tooltip > .el-input__inner[disabled] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
</style>